# COMPLETE REACT CHEATSHEET (Episodes 1–7)**
---

# 🧠 REACT JS – COMPLETE CHEATSHEET (Ep 1 → Ep 7)

---

## 🔹 EPISODE 1: React Basics (Behind the Scenes)

### Core Ideas

* Browser understands **JavaScript + DOM**
* React does **NOT** directly write HTML
* React uses **JavaScript objects** to build UI

### Key APIs

```js
React.createElement(type, props, children)
ReactDOM.createRoot(root).render(element)
```

### Important

* `React.createElement` returns a **JS Object**
* JSX did NOT exist yet

---

## 🔹 EPISODE 2: Production Ready React

### Why Bundler?

* Raw JS + CDN = ❌ not optimized
* Bundler:

  * Minifies code
  * Compresses files
  * Improves performance

### Parcel Superpowers

* HMR (Hot Module Replacement)
* Caching (`.parcel-cache`)
* File watcher (C++)
* Dev server
* Minification & optimization

### NPM Essentials

```bash
npm init
npm install -D parcel
npm install react react-dom
npx parcel index.html
```

### package.json

* Dependencies
* DevDependencies
* Scripts

---

## 🔹 EPISODE 3: JSX & Components

### JSX

* JSX = JavaScript XML
* Looks like HTML but ❌ NOT HTML
* Converted by **Babel**

### JSX Rules

```jsx
{ }        // JS expressions
className  // not class
style={{ backgroundColor: "red" }}
```

### Components

```jsx
function Component() {
  return <h1>Hello</h1>;
}
```

Rules:

* Must start with **Capital letter**
* Use `<Component />`, not `Component()`

---

## 🔹 EPISODE 4: Props, map(), Keys (Real Project)

### Props

* Props = function arguments
* Read-only

```jsx
<Product title="Shirt" price={200} />
```

```js
function Product({ title, price }) {}
```

### Config Driven UI

* UI driven by **JSON data**
* Same as backend APIs

### map()

```jsx
products.map(item => (
  <Product key={item.id} product={item} />
))
```

### Keys

* Helps React identify elements
* Improves performance
* ❌ Never use index
* ✅ Use unique ID

---

## 🔹 EPISODE 6: useState (MOST IMPORTANT)

### Problem

* Normal variables ❌ don’t update UI

### useState

```js
const [data, setData] = useState(initialValue);
```

* State change → **Re-render**
* UI auto-updates

### Flow

1. Initial render
2. User action
3. setState()
4. Re-render
5. UI updated

---

## 🔹 EPISODE 7: Virtual DOM & Reconciliation (INTERVIEW GOLD)

### Virtual DOM

* Lightweight JS object
* Copy of Real DOM

### Diff Algorithm

* Compares old vs new Virtual DOM
* Finds minimal changes

### Reconciliation (React Fiber)

* Updates **only changed nodes**
* No full page reload
* Extremely fast

---

# 🔥 MOST IMPORTANT INTERVIEW QUESTIONS (WITH ANSWERS)

---

## ✅ BASIC LEVEL

### 1. What is React?

**Answer:**
React is a JavaScript library for building fast, component-based user interfaces using a Virtual DOM.

---

### 2. What is JSX?

**Answer:**
JSX is a syntax extension for JavaScript that looks like HTML and is converted into `React.createElement` by Babel.

---

### 3. Is JSX mandatory?

**Answer:**
No. JSX is optional. You can write React using `React.createElement`, but JSX improves readability.

---

### 4. What are components?

**Answer:**
Components are reusable JavaScript functions that return JSX and represent a part of the UI.

---

## ✅ INTERMEDIATE LEVEL

### 5. What are props?

**Answer:**
Props are read-only inputs passed from parent to child components to display dynamic data.

---

### 6. What is Config-Driven UI?

**Answer:**
A UI that renders based on data (usually JSON) rather than hardcoded values.

---

### 7. Why do we use keys in React?

**Answer:**
Keys help React identify which elements changed, were added, or removed, improving performance.

---

### 8. Why should we not use index as key?

**Answer:**
Using index can cause incorrect UI updates when items are added, removed, or reordered.

---

### 9. What is useState?

**Answer:**
`useState` is a React Hook that creates a state variable and triggers a re-render when updated.

---

### 10. Why doesn’t UI update with normal variables?

**Answer:**
React does not track normal variables. Only state changes trigger re-renders.

---

## ✅ ADVANCED / INTERVIEW FAVORITES

### 11. What happens when state changes?

**Answer:**
React re-renders the component, creates a new Virtual DOM, diffs it with the old one, and updates only changed DOM nodes.

---

### 12. What is Virtual DOM?

**Answer:**
A lightweight JavaScript representation of the Real DOM that React uses to optimize UI updates.

---

### 13. What is Diff Algorithm?

**Answer:**
An algorithm that compares old and new Virtual DOM trees to find minimal UI changes.

---

### 14. What is Reconciliation?

**Answer:**
The process of updating the Real DOM based on differences found between Virtual DOMs.

---

### 15. What is React Fiber?

**Answer:**
React Fiber is the internal architecture that enables efficient reconciliation and incremental rendering.

---

### 16. Why is React fast? ⭐⭐⭐

**Answer (Perfect Interview Answer):**
React is fast because it uses a Virtual DOM, an efficient diffing algorithm, and a reconciliation process (React Fiber) to update only changed DOM nodes.

---

### 17. What is HMR?

**Answer:**
Hot Module Replacement updates only changed files in the browser without a full reload.

---

### 18. Difference between Dependencies & DevDependencies?

**Answer:**
Dependencies are needed in production; DevDependencies are only required during development.

---

## 🧩 ONE-LINE REVISION (SUPER QUICK)

* JSX → syntactic sugar
* Babel → JSX → JS
* Props → read-only data
* State → UI reactivity
* map() → list rendering
* key → performance
* Virtual DOM → fast UI
* Diffing → minimal changes
* Reconciliation → DOM updates

---
