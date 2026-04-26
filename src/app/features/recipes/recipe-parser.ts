import { remark } from 'remark';
import remarkParse from 'remark-parse';
import type { Ingredient, IngredientGroup, Recipe, RecipeStep } from './recipe.model';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MdNode = any;

function extractText(children: MdNode[]): string {
  return children
    .map((child: MdNode) => {
      if (child.type === 'text' || child.type === 'inlineCode') return child.value as string;
      if (Array.isArray(child.children)) return extractText(child.children);
      return '';
    })
    .join('');
}

function parseYields(text: string): { servings: number | null; prepTime: number | null; cookTime: number | null } {
  const servingsMatch = text.match(/(\d+)\s+(?:portions?|servings?)/i);
  const prepMatch = text.match(/(\d+)\s+min(?:\s+de\s+préparation|\s+prep)/i);
  const cookMatch = text.match(/(\d+)\s+min(?:\s+de\s+cuisson|\s+cook)/i);
  return {
    servings: servingsMatch ? parseInt(servingsMatch[1], 10) : null,
    prepTime: prepMatch ? parseInt(prepMatch[1], 10) : null,
    cookTime: cookMatch ? parseInt(cookMatch[1], 10) : null,
  };
}

function parseIngredient(item: MdNode): Ingredient {
  const para = item.children?.[0];
  if (!para || para.type !== 'paragraph') return { quantity: null, unit: null, name: '' };

  const children: MdNode[] = para.children ?? [];
  if (children.length > 0 && children[0].type === 'emphasis') {
    const emphasisText = extractText(children[0].children ?? []);
    const spaceIdx = emphasisText.indexOf(' ');
    let quantity: number | null;
    let unit: string | null;

    if (spaceIdx === -1) {
      const val = parseFloat(emphasisText);
      quantity = isNaN(val) ? null : val;
      unit = null;
    } else {
      const val = parseFloat(emphasisText.slice(0, spaceIdx));
      quantity = isNaN(val) ? null : val;
      unit = emphasisText.slice(spaceIdx + 1).trim() || null;
    }

    const name = extractText(children.slice(1)).trim();
    return { quantity, unit, name };
  }

  return { quantity: null, unit: null, name: extractText(children).trim() };
}

function parseIngredientGroups(nodes: MdNode[]): IngredientGroup[] {
  const groups: IngredientGroup[] = [];
  let current: IngredientGroup | null = null;

  for (const node of nodes) {
    if (node.type === 'heading') {
      if (current) groups.push(current);
      current = { title: extractText(node.children ?? []), ingredients: [] };
    } else if (node.type === 'list') {
      if (!current) current = { title: null, ingredients: [] };
      for (const item of node.children ?? []) {
        current.ingredients.push(parseIngredient(item));
      }
    }
  }

  if (current) groups.push(current);
  return groups;
}

export function parseRecipe(markdown: string, slug: string): Recipe | null {
  const root = remark().use(remarkParse).parse(markdown);
  const nodes: MdNode[] = root.children;

  const h1Index = nodes.findIndex((n: MdNode) => n.type === 'heading' && n.depth === 1);
  if (h1Index === -1) return null;

  const title = extractText(nodes[h1Index].children ?? []);

  const breakIndices: number[] = [];
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].type === 'thematicBreak') breakIndices.push(i);
  }

  const firstBreak = breakIndices[0] ?? nodes.length;
  const secondBreak = breakIndices[1] ?? nodes.length;

  let description = '';
  let tags: string[] = [];
  let servings: number | null = null;
  let prepTime: number | null = null;
  let cookTime: number | null = null;

  for (const node of nodes.slice(h1Index + 1, firstBreak)) {
    if (node.type !== 'paragraph') continue;
    const children: MdNode[] = node.children ?? [];
    const firstChild = children[0];

    if (firstChild?.type === 'emphasis') {
      tags = extractText(children).split(',').map((t: string) => t.trim()).filter(Boolean);
    } else if (firstChild?.type === 'strong') {
      const yields = parseYields(extractText(children));
      servings = yields.servings;
      prepTime = yields.prepTime;
      cookTime = yields.cookTime;
    } else {
      description = extractText(children);
    }
  }

  const ingredientGroups = parseIngredientGroups(nodes.slice(firstBreak + 1, secondBreak));

  const steps: RecipeStep[] = nodes.slice(secondBreak + 1).map((node: MdNode) => ({
    content: markdown.slice(node.position?.start?.offset ?? 0, node.position?.end?.offset ?? 0).trim(),
  }));

  return { slug, title, description, tags, servings, prepTime, cookTime, ingredientGroups, steps };
}
