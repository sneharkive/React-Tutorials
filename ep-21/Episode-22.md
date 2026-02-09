# 📘 Episode 22 – `useMemo` & `useRef`

---

## 🔹 Why These Hooks?

* `useState` + `useEffect` cover ~95% cases
* These hooks solve **specific performance & DOM problems**
* Frequently asked in interviews

---

## 🔹 `useMemo` – Performance Optimization

### ❓ What is `useMemo`?

Caches the **result of an expensive computation** between re-renders.

---

### ❓ Why is it needed?

React re-renders the entire component on **any state change**.

If computation is heavy:

* UI freezes
* Bad UX

---

### ❓ Problem Example

* Expensive function: Nth Prime Number
* State A: `num`
* State B: `darkMode`

👉 Changing `darkMode` re-runs prime calculation unnecessarily

---

### ✅ Solution

```js
const prime = useMemo(() => {
  return calculatePrime(num);
}, [num]);
```

---

### 🔑 Key Rules

* Runs only when dependencies change
* Must return a **value**
* Must be **pure** (no side effects)

---

### ⚠️ Interview Notes

* `useMemo` is a **performance hint**
* React may drop memoized value
* Do NOT overuse it

---

## 🔹 `useRef` – Mutable Values & DOM Access

---

## 🅰 Use Case 1: Persisting Values (No Re-render)

### Comparison Table

| Method     | Persists | Re-render |
| ---------- | -------- | --------- |
| `let`      | ❌        | ❌         |
| `useState` | ✅        | ✅         |
| `useRef`   | ✅        | ❌         |

---

### Example

```js
const countRef = useRef(0);

countRef.current += 1;
```

📌 Value persists
📌 UI does NOT update

---

## 🅱 Use Case 2: Accessing DOM Elements

### Example: Focus Input

```js
const inputRef = useRef(null);

<input ref={inputRef} />

<button onClick={() => inputRef.current.focus()}>
  Focus
</button>
```

---

### Common DOM Use Cases

* Auto-focus input
* Scroll to element
* Trigger hidden file input
* Measure element size

---

## 🔑 Important Properties

* `useRef()` returns `{ current: value }`
* Changing `.current` does **not** re-render
* Safe alternative to `document.querySelector`

---

## 🧠 Interview Rapid-Fire

### Q: Difference between `useMemo` & `useCallback`?

* `useMemo` → memoizes **value**
* `useCallback` → memoizes **function**

---

### Q: When NOT to use `useMemo`?

* Cheap calculations
* Premature optimization

---

### Q: Can `useRef` replace state?

❌ No — it doesn’t trigger re-render

---

### Q: Is `useRef` async?

❌ No — synchronous mutable container

---

## ✅ Final Takeaway

* `useMemo` → optimize **expensive calculations**
* `useRef` → store values **without re-render** or access DOM
* Both are **optimization tools**, not defaults

---

