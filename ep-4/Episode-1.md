# Episode 1 

# 📘 Behind the Scenes (Concept Notes)

## 1️⃣ How the Web Works (Before React)

* **JavaScript Engine** executes JS code inside the browser.
* The browser exposes the **DOM (Document Object Model)**:

  * DOM represents HTML as a **tree of objects**.
  * JavaScript manipulates the DOM to update UI.
* Problem with **pure DOM manipulation**:

  * Slow
  * Complex for large applications
  * Hard to manage UI state manually

👉 This is the core problem React tries to solve.

---

## 2️⃣ Why React Was Created

* React provides a **structured and optimized way** to update UI.
* Focuses on:

  * **Efficiency**
  * **Reusability**
  * **Maintainability**

#### React does **not** directly update the real DOM every time.

---

## 3️⃣ Using React Without Create React App (CRA)

## 4️⃣ React.createElement (Core React Concept)

* React does **not use HTML** internally.
* Everything is created using:

```js
React.createElement(type, props, children)
```

* It returns a **JavaScript object**, not HTML.
* Example flow:

  * `React.createElement` → JS Object
  * ReactDOM converts it → real DOM

👉 JSX is just a **syntactic sugar** for this.

---

## 5️⃣ JSX & Babel (Very Important)

### JSX

* JSX looks like HTML but **is NOT HTML**.
* Browsers **cannot understand JSX**.

### Babel

* Babel is a **compiler**.
* Converts JSX into:

```js
React.createElement(...)
```

👉 Without Babel, JSX will fail in the browser.

---

## 6️⃣ Why React Is Fast ⚡

React’s performance comes from multiple optimizations:

### 🔹 Virtual DOM

* React creates a **virtual copy** of the real DOM.
* Changes are first applied to the Virtual DOM.
* React finds the **difference (diffing)**.
* Only the **necessary updates** are applied to the real DOM.

### 🔹 Parcel Bundler

* Handles:

  * File bundling
  * Minification
  * Dependency management
* Improves loading speed.

### 🔹 Hot Module Replacement (HMR)

* Updates only changed files.
* No full page reload.
* Faster development experience.

---

## 7️⃣ Functional Components

* Components are **functions** that return JSX.
* Example:

```js
function Header() {
  return <h1>Welcome</h1>;
}
```

### Benefits:

* Reusable
* Clean
* Easy to test
* Encourages modular design

---

## 9️⃣ Props (Passing Data)

* **Props = properties**
* Used to pass data from **parent → child** component.

```js
<Product name="Laptop" price="75000" />
```

```js
const Product = ({ name, price }) => {
  return (
    <>
        <p>Name: {name}</p>
        <p>Price: {name}</p>
    <>
  )
}
```

* Props are **read-only**.

---

## 1️⃣1️⃣ React Mindset (Final Goal)

* Think in **components**
* Understand **data flow**
* Focus on **architecture**, not just syntax

---
---
