# Ubiquitous Language

## Recipe structure

| Term                 | Definition                                                                                 | Aliases to avoid                     |
| -------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------ |
| **Recipe**           | A complete cooking document with metadata, ingredients, and steps                          | Dish, plat, recette                  |
| **Slug**             | URL-safe identifier for a Recipe, derived from its filename without the `.md` extension    | ID, name, identifier                 |
| **Yield**            | The raw RecipeMD metadata block encoding servings and time (e.g. `**2 servings, 10 min prep**`) | Metadata, frontmatter           |
| **Servings**         | The number of portions a Recipe produces as written                                        | Portions, couverts, people           |
| **PrepTime**         | Duration in minutes required to prepare ingredients before cooking                         | Preparation time, prep               |
| **CookTime**         | Duration in minutes of active or passive cooking                                           | Cooking time, cook                   |
| **Tags**             | Comma-separated labels describing a Recipe's category, cuisine, or meal type               | Categories, labels, keywords         |
| **Accent**           | UI color assigned to a Recipe, computed from its Tags based on meal type                   | Color, theme, highlight              |

## Ingredients

| Term                  | Definition                                                                                   | Aliases to avoid              |
| --------------------- | -------------------------------------------------------------------------------------------- | ----------------------------- |
| **Ingredient**        | A single item used in a Recipe, with an optional quantity, optional unit, and a name         | Item, composant               |
| **Quantity**          | The numeric amount of an Ingredient (`null` when unspecified)                                | Amount, dose, number          |
| **Unit**              | The measurement label for a Quantity (e.g. `g`, `ml`, `càs`) (`null` when unspecified)      | Measure, mesure               |
| **IngredientGroup**   | A named or anonymous collection of Ingredients within a Recipe (e.g. "Vinaigrette")         | Section, category, groupe     |

## Instructions

| Term       | Definition                                                                                       | Aliases to avoid              |
| ---------- | ------------------------------------------------------------------------------------------------ | ----------------------------- |
| **Step**   | A single Markdown block in the instructions section of a Recipe, separated by blank lines       | Instruction, étape, action    |

## Relationships

- A **Recipe** contains one or more **IngredientGroups**.
- An **IngredientGroup** has a `title` (`null` for recipes with no grouping) and one or more **Ingredients**.
- An **Ingredient** has a **Name**, an optional **Quantity**, and an optional **Unit**.
- A **Recipe** contains zero or more **Steps**.
- A **Recipe**'s **Slug** equals its filename minus the `.md` extension.
- A **Recipe**'s **Accent** is computed from its **Tags** — not stored in the file.

## Example dialogue

> **Dev:** "If a **Recipe** has no ingredient grouping, do we still have an **IngredientGroup**?"
>
> **Domain expert:** "Yes — one **IngredientGroup** with a `null` title. The UI hides the title when there's only one group."

> **Dev:** "What's the difference between **Yield** and **Servings**?"
>
> **Domain expert:** "**Yield** is the raw RecipeMD string in the file — `**2 servings, 10 min prep, 15 min cook**`. Parsing it produces three fields on the **Recipe**: **Servings**, **PrepTime**, and **CookTime**."

> **Dev:** "Can an **Ingredient** have a **Unit** but no **Quantity**?"
>
> **Domain expert:** "No — a **Unit** without a **Quantity** is meaningless. If **Quantity** is `null`, **Unit** must be `null` too."

> **Dev:** "When does a **Slug** change?"
>
> **Domain expert:** "Only when the file is renamed. The **Slug** is the filename, nothing else — never derived from the **Recipe** title."

## Flagged ambiguities

- **"servings" / "portions" / "couverts"** — all appear in the conversation for the same concept. Canonical term: **Servings**. Use this in code, UI, and discussion.
- **"step" / "instruction" / "étape"** — used interchangeably. Canonical term: **Step**.
- **"yields"** (RecipeMD spec term) refers to the raw bold metadata block; once parsed, it becomes individual fields (**Servings**, **PrepTime**, **CookTime**). Don't use "yields" to refer to those parsed fields.
- **"accent"** is a UI concept, not a domain concept from the recipe content. It is always computed — never treat it as stored data.
