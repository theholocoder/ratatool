# 🍳 Ratatool

**Ratatool** is a modern Angular application to manage and explore cooking recipes written in Markdown.

The project focuses on **dynamic ingredient scaling**, **clean UI/UX**, and **structured recipe parsing**, while keeping the architecture intentionally simple to experiment with content-driven features.

---

## ✨ MVP Features

### 📖 Recipe display

* Recipes are written in Markdown and parsed into a structured format
* Clean and readable UI for ingredients and steps
* Support for headings, lists, and custom recipe syntax

### ⚖️ Dynamic servings

* Adjust the number of servings
* Ingredient quantities update automatically in real time
* Supports common units (g, ml, units…)

---

### 🔍 Search

* Search recipes by:
  * name
  * ingredients
* Fast and responsive filtering

---

### ➕ Add recipes

* Create recipes directly from the app
* Simple Markdown editor (MVP)
* Recipes are instantly available after creation

---

## 🧱 Tech Stack

* **Frontend**: Angular (with Analog.js)
* **Rendering**: SSR / hybrid rendering
* **Backend**: API routes (Analog server)
* **Storage**: Markdown files on the server filesystem
* **Parsing**: Markdown parser + custom ingredient parsing logic

---

## 🧠 Technical Choices

### 📄 Markdown as source of truth

Recipes are stored as Markdown rather than structured JSON.

This allows:

* human-readable data
* easy import/export (e.g. Obsidian)
* flexibility for parsing experiments

---

### ⚙️ File-based storage (intentionally not scalable)

Recipes are stored as `.md` files on the server.

This is a deliberate choice.

The goal of Ratatool is **not** to build a production-ready scalable backend, but to:

* experiment with Markdown parsing
* iterate quickly
* keep the system simple and transparent

Trade-offs:

* limited scalability
* no advanced concurrency handling
* not suited for high-traffic production use

But:

* great for prototyping
* easy to debug and evolve

---

### 🔄 Server / Client responsibilities

* **Server**

  * Reads and writes Markdown files
  * Exposes recipes through API endpoints

* **Client**

  * Parses Markdown into structured data
  * Handles ingredient scaling logic
  * Manages UI and interactions

---

### ⚖️ Ingredient scaling system

A core feature of Ratatool.

Each ingredient line is parsed into:

* quantity
* unit
* ingredient name

This enables:

* real-time scaling
* consistent display
* future features like shopping list aggregation

---

## 🚧 Future Improvements

* Shopping list generation from selected recipes
* Ingredient normalization & merging
* Advanced Markdown editor with live preview
* Import/export with tools like Obsidian
* Optional backend (e.g. Supabase) for syncing and sharing

---

## 🎯 Project Goals

Ratatool is designed to:

* showcase Angular architecture and modern practices
* demonstrate advanced parsing and data modeling
* provide a useful and extensible tool
* stay simple enough to iterate quickly

---

## 🧪 Status

MVP in progress — currently focused on parsing and scaling logic.

