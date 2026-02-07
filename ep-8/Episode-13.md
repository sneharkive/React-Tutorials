# 📘 Episode 13 – React Lifecycle Methods (Class Components)

Episode 13 explains **React Lifecycle Methods** using **Class-Based Components**.
Although Functional Components are the modern approach, lifecycle knowledge is **critical for interviews**, **legacy projects**, and understanding React internals.

---

## 1️⃣ React Lifecycle – Big Picture

React class components have **three lifecycle phases**:

| Phase          | Description                                     |
| -------------- | ----------------------------------------------- |
| **Mounting**   | Component is created and inserted into the DOM  |
| **Updating**   | Component re-renders due to state/props changes |
| **Unmounting** | Component is removed from the DOM               |

📌 **Episode 13 focuses ONLY on the Mounting Phase.**

---

## 2️⃣ Mounting Phase – Lifecycle Methods

When a class component loads for the first time, React calls:

1. **constructor()**
2. **render()**
3. **componentDidMount()**

This order is **guaranteed**.

---

## 3️⃣ Execution Order – Single Class Component

```txt
Constructor → Render → componentDidMount
```

### 🔹 constructor()

* First method to run
* Used for:

  * Initializing state
  * Binding methods
* Runs **before UI exists**

```js
constructor(props) {
  super(props);
  this.state = { count: 0 };
}
```

---

### 🔹 render()

* Returns JSX
* Must be **pure**
* ❌ No API calls
* ❌ No side effects

```js
render() {
  return <h1>{this.state.count}</h1>;
}
```

---

### 🔹 componentDidMount()

* Runs **after DOM is updated**
* Best place for:

  * API calls
  * Subscriptions
  * Timers

```js
componentDidMount() {
  fetchData();
}
```

📌 Equivalent to:

```js
useEffect(() => {}, []);
```

---

## 4️⃣ Why API Calls Go in `componentDidMount`

Correct React flow:

1. Component initializes
2. Initial UI renders (Shimmer / Empty UI)
3. API call executes
4. State updates
5. Component re-renders with data

✅ Faster perceived performance
❌ Avoids blocking initial render

---

## 5️⃣ Parent → Child Lifecycle Order (Single Child)

When a **Parent** renders a **Child**:

```txt
Parent Constructor
Parent Render
Child Constructor
Child Render
Child componentDidMount
Parent componentDidMount
```

📌 **Rule**

> Child completes mounting before parent finishes mounting.

---

## 6️⃣ Tricky Interview Case – Multiple Children

When a parent renders **multiple children (siblings)**:

### ❌ Wrong Assumption

```txt
Child 1 → Child 2 → Parent
```

### ✅ Actual React Execution Order

```txt
Parent Constructor
Parent Render
Child 1 Constructor
Child 1 Render
Child 2 Constructor
Child 2 Render
Child 1 componentDidMount
Child 2 componentDidMount
Parent componentDidMount
```

---

## 7️⃣ Why This Order Exists (Render vs Commit Phase)

### 🔹 Render Phase (Fast)

* constructor
* render
* Virtual DOM diffing
* Batched for **all children**

### 🔹 Commit Phase (Slow)

* DOM updates
* componentDidMount
* Happens after **all renders complete**

📌 React calculates everything first, then updates the DOM once — this is **React Fiber optimization**.

---

## 8️⃣ Why `componentDidMount` Runs Child → Parent

React guarantees:

> Children are fully mounted before parents.

This allows:

* Safe DOM access
* Predictable UI behavior

---

## 9️⃣ Important Interview Points 🚀

* `componentDidMount` runs **once**
* Never make API calls in `render`
* Child lifecycle completes before parent
* Sibling renders are batched
* Render Phase ≠ Commit Phase
* `componentDidMount` ≈ `useEffect([])`

---

