# 📘 ReactJS – Episode 6 (`useState` Hook & UI Updates)

## 1️⃣ The Core Goal: Filtering Products

### Feature to Build

* **“Top Rated Products”** button
* On click → show only products with:

```js
rating >= 4
```

### Setup

* Button added to UI
* `onClick` event handler attached

---

## 2️⃣ The Big Problem: Normal Variables Don’t Update UI

### Initial Attempt

* Product list stored in a **normal JS variable**

```js
let listOfProduct = productList;
```

### Filtering Logic

```js
listOfProduct.filter(
  (product) => product.rating.rate >= 4
);
```

### What Happens

* `console.log` shows filtered data correctly
* ❌ **UI does NOT update**

### Why This Fails

* React does **not track normal variables**
* Updating a variable:

  * Updates **Data Layer**
  * Does **not notify React**
* Result:

  * UI Layer stays stale

👉 React doesn’t know it needs to re-render.

---

## 3️⃣ The Solution: `useState` Hook

### What is `useState`?

* A **React Hook**
* Used to create **Local State Variables**

```js
import { useState } from "react";
```

### Superpower of State

* When **state changes**:

  * React automatically **re-renders** the component
  * UI updates instantly

👉 This is how React keeps UI in sync with data.

---

## 4️⃣ `useState` Syntax (Very Important)

```js
const [listOfProduct, setListOfProduct] =
  useState(productList);
```

### What’s Happening Here?

This is **Array Destructuring** in JavaScript.

`useState()` returns an array:

| Index | Meaning                  |
| ----- | ------------------------ |
| `0`   | Current state value      |
| `1`   | Function to update state |

### Naming Convention

* State variable → `listOfProduct`
* Setter function → `setListOfProduct`

✅ Standard practice:

```js
set + VariableName (camelCase)
```

---

## 5️⃣ Correct Workflow with `useState`

### Step-by-Step Flow

1️⃣ **Initial Render**

* React renders component with initial data

2️⃣ **User Action**

* Clicks “Top Rated Products” button

3️⃣ **State Update**

```js
setListOfProduct(filteredProducts);
```

4️⃣ **Re-render**

* React detects state change
* Component function runs again
* UI updates automatically

---

## 6️⃣ UI Layer vs Data Layer (Key Mental Model)

### Data Layer

* Holds:

  * Variables
  * State
  * API data

### UI Layer

* What the user sees on screen

### Problem Without State

* Data changes ❌
* UI doesn’t change ❌

### With `useState`

* Data changes ✅
* UI updates automatically ✅

👉 `useState` = **Bridge between Data Layer & UI Layer**

---

## 7️⃣ Why `useState` Is So Important

* Makes React **reactive**
* Enables:

  * Filtering
  * Searching
  * Sorting
  * Dynamic UI updates
* Without state:

  * React is just static HTML

---

## 🔑 Episode 6 Takeaways

* Normal variables ≠ UI updates
* React re-renders **only on state change**
* `useState`:

  * Stores local component data
  * Triggers re-render
* Foundation for:

  * Events
  * Forms
  * API data
  * Interactivity

🎯 End Result:
Clicking **Top Rated Products** now updates the UI instantly — just like a real e-commerce app.

---