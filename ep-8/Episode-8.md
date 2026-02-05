# Episode 8 — `useState` Deep Dive & `useEffect` (API + Lifecycle)

## 1. Why `useState` is Required (Normal Variables Fail)

### Experiment

```js
let btnName = "Light";
```

Button click updates `btnName` to `"Dark"`.

### Result

* `console.log` shows value **changes**
* **UI does NOT update**

### Reason

* React does **not track normal variables**
* Updating them does **not trigger a re-render**

### Key Takeaway

> Only **state updates** tell React to re-render a component.
> `useState` exists to keep **UI layer** and **data layer** in sync.

---

## 2. How `const` State Variables Can “Change”

### Common Interview Question

**Q:** If state is declared with `const`, how does its value change?

### Explanation

```js
const [btnName, setBtnName] = useState("Light");
```

* The variable itself is **never mutated**
* On `setBtnName("Dark")`:

  * React **re-runs the component**
  * A **new variable instance** is created with the new value

### Key Insight

> State updates do not mutate variables — they trigger **re-creation of the component** with new state.

---

## 3. Component Re-render vs DOM Update

### What Happens on State Change

* Entire component function **re-executes**
* Example proof:

  ```js
  console.log("Navbar Rendered");
  ```

### But…

* **Real DOM is NOT fully re-rendered**
* Virtual DOM compares:

  * Old VDOM vs New VDOM
* Only the **changed node** (button text) updates in the real DOM

### Performance Insight

> React may re-run the whole component function,
> but it updates **only minimal DOM nodes**.

---

## 4. Why `useEffect` is Needed

### Problem

* Using static mock data (`constants.js`) is unrealistic
* Real apps fetch data from APIs

### Industry-Standard Render Strategy

1. App loads
2. Initial UI renders (empty / loading / skeleton)
3. API call happens in background
4. State updates
5. UI re-renders with real data

---

## 5. `useEffect` Hook Basics

### Purpose

> Run **side effects** (API calls, subscriptions, timers)
> **after** the component renders

### Syntax

```js
useEffect(() => {
  // side effect logic
}, []);
```

* First argument → callback function
* Second argument → dependency array

### Empty Dependency Array `[]`

* Effect runs **only once**
* Equivalent to: *“run after first render”*

---

## 6. API Call Flow with `useEffect`

### Implementation Pattern

```js
useEffect(() => {
  async function fetchData() {
    const data = await fetch(API_URL);
    const json = await data.json();
    setProductList(json);
  }
  fetchData();
}, []);
```

### What Happens Internally

1. Component renders with empty data
2. `useEffect` runs after render
3. API call completes
4. `setProductList()` updates state
5. React re-renders component
6. UI shows fetched products

---

## 7. Lifecycle Mental Model (Very Important)

```
Initial Render (empty / loading UI)
        ↓
useEffect runs (API call)
        ↓
State Update
        ↓
Re-render (actual data shown)
```

---

## Final Takeaways (Interview-Safe)

* Normal variables ❌ do not trigger UI updates
* `useState` ✅ triggers re-render
* `const` state variables are replaced, not mutated
* Component functions can re-run without full DOM updates
* `useEffect` runs **after render**
* API calls belong inside `useEffect`
* Empty dependency array = run once after initial render

---
