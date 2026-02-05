# 📘 ReactJS – Episode 3 (JSX & Components)

## What is JSX?

### Definition

* **JSX = JavaScript XML**
* Looks like HTML but is written **inside JavaScript**

### Important Clarifications

* ❌ JSX is **NOT HTML**
* ❌ JSX is **NOT part of React**
* ✅ JSX is **syntax sugar** that converts to React Elements (JS objects)

👉 JSX exists only to make developers’ lives easier.

---

## 3️⃣ How JSX Works (Babel Magic 🪄)

### Browser Problem

* Browsers understand **only JavaScript**
* JSX has angle brackets `< >`
* Running JSX directly causes:

```bash
SyntaxError: Unexpected token <
```

### Babel (The Superhero 🦸)

* **Babel** is a transpiler/compiler
* Converts JSX into:

  ```js
  React.createElement(...)
  ```
* After conversion:

  * Browser understands it
  * React renders it
---

## 4️⃣ JSX vs HTML (Superpowers of JSX)

Even though JSX looks like HTML, it’s more powerful.

### 🔹 JavaScript inside JSX `{ }`

* You can inject:

  * Variables
  * Expressions
  * Function calls

```jsx
<h1>{21 + 21}</h1>
```

👉 Only **expressions**, not statements (no if/for directly).

---

### 🔹 Multi-line JSX

* Multi-line JSX must be wrapped in parentheses
* Helps Babel understand element boundaries

```jsx
const element = (
  <div>
    <h1>Hello</h1>
    <h2>World</h2>
  </div>
);
```

---

## 5️⃣ Components in React

### What is a Component?

* A **component is a normal JavaScript function**
* It returns **JSX**

```jsx
function Heading() {
  return <h1>Hello React</h1>;
}
```

---

### Types of Components

1. **Class-Based Components**

   * Old way
   * More complex

2. **Functional Components** ✅

   * Modern standard
   * Cleaner & simpler
   * Focus of this series

---

### Component Naming Rules

* Component names must start with a **capital letter**

  * `Heading` ✅
  * `heading` ❌

Why?

* React treats lowercase tags as **HTML elements**
* Uppercase = **Custom Component**

---

## 6️⃣ Component Composition

* Components can be nested inside other components

```jsx
function App() {
  return (
    <div>
      <Heading />
    </div>
  );
}
```

👉 This is how **real-world React apps** are structured.

---

## 7️⃣ Calling Components (Important Detail)

Since components are functions:

```jsx
{Heading()}   // Technically works
```

But ❌ **Not recommended**

✅ Correct React way:

```jsx
<Heading />
```

Why?

* React manages lifecycle
* Enables optimizations
* Standard practice

---

## 🔑 Episode 3 Takeaway

* `React.createElement` → powerful but unreadable
* JSX → **clean, expressive, developer-friendly**
* Babel → silently converts JSX to JS
* Functional Components → building blocks of React apps

🎯 End Result:
A clean **Hello World** using JSX + Functional Components that is:

* Readable
* Scalable
* Production-ready

---
