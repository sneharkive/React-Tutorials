# 📘 Episode 16 — React Optimization Techniques

> **Goal:** Write scalable, maintainable, and performant React applications like a senior developer.

---

## 1️⃣ Single Responsibility Principle (SRP)

### ❌ Problem (Before Optimization)

The `ProductDetails` component was doing **multiple jobs**:

1. Fetching data from an API (network logic)
2. Rendering UI (presentation logic)

```js
useEffect(() => {
  fetchProduct();
}, []);
```

### ❌ Why This Is Bad

* Violates **Single Responsibility Principle**
* Hard to test:

  * You can’t test UI without triggering API calls
* Hard to reuse logic
* Component becomes bulky and messy

📌 **SRP Rule:**

> A component should have **only one reason to change**

---

## 2️⃣ Custom Hooks (SRP Fix)

### ✅ What Is a Custom Hook?

* A **normal JavaScript function**
* Can use React hooks (`useState`, `useEffect`)
* Must start with **`use`** (React rule)

---

### 📁 Folder Structure (Industry Standard)

```
src/
 ├── components/
 ├── hooks/
 │    └── useGetSingleProduct.js
```

---

### 🧠 Extracting Logic into a Hook

#### `useGetSingleProduct.js`

```js
import { useEffect, useState } from "react";

const useGetSingleProduct = (productId) => {
  const [singleProduct, setSingleProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  async function fetchProduct() {
    const data = await fetch("API_URL/" + productId);
    const json = await data.json();
    setSingleProduct(json);
  }

  return singleProduct;
};

export default useGetSingleProduct;
```

---

### 🧩 Using the Hook in Component

```js
const singleProduct = useGetSingleProduct(productId);
```

### ✅ Benefits

* UI component becomes **clean**
* Logic is **reusable**
* Easy to test
* Follows SRP

📌 **Interview Line:**

> Custom hooks help separate business logic from UI and improve reusability.

---

## 3️⃣ Bundling Problem in Large Apps

### ⚠️ What Happens During `npm run build`

* Parcel / Webpack bundles **all JS code**
* Outputs **one huge JS file**

Example:

```
Home + About + Contact + Grocery + Cart
↓
main.js (2MB 😬)
```

### ❌ Why This Is Bad

* User downloads **everything** on first load
* Even code they may never use
* Slower initial page load
* Poor performance on low-end devices

---

## 4️⃣ Code Splitting (Lazy Loading)

### 🎯 Goal

> Load code **only when needed**

---

### ❌ Normal Import (Bad for Performance)

```js
import Grocery from "./components/Grocery";
```

Loads immediately ❌

---

### ✅ Lazy Import (Optimized)

```js
import { lazy } from "react";

const Grocery = lazy(() => import("./components/Grocery"));
```

✔ Component loads **only when accessed**

---

### 🧠 What Happens Internally

* App is split into **multiple bundles**
* Grocery gets its **own chunk**
* Main bundle size reduces drastically

📌 This is called:

* Code Splitting
* Lazy Loading
* Dynamic Import

(all same concept)

---

## 5️⃣ Suspense & Fallback (Required for Lazy Loading)

### ❌ The New Problem

* Lazy component takes time to download
* React has nothing to render temporarily
* App crashes with:

  > *Component suspended while responding to synchronous input*

---

### ✅ Solution: `<Suspense>`

```js
import { Suspense } from "react";

<Suspense fallback={<h1>Loading...</h1>}>
  <Grocery />
</Suspense>
```

---

### 🧠 How It Works

1. User clicks Grocery
2. React starts downloading chunk
3. `fallback` UI is shown
4. Once loaded → component replaces fallback

---

### 🔄 Fallback Examples

```js
fallback={<Shimmer />}
fallback={<Spinner />}
fallback={<h1>Loading...</h1>}
```

---

## 6️⃣ Final Optimizations Achieved

### ✅ Code Quality

* SRP followed
* Business logic isolated
* Clean components
* Reusable hooks

### ✅ Performance

* Smaller initial bundle
* Faster load time
* On-demand code loading

---

## 🧠 Interview Cheat Notes (Episode 16)

### ❓ Why use Custom Hooks?

✔ To follow SRP and reuse logic

### ❓ Why Lazy Loading?

✔ To reduce initial bundle size

### ❓ What does Suspense do?

✔ Shows fallback UI while lazy component loads

### ❓ Can we lazy load routes?

✔ Yes (very common in large apps)

---

## 🧩 One-Line Summary

> Episode 16 teaches how to build scalable React apps by separating logic using Custom Hooks and improving performance using Lazy Loading and Suspense.

---

