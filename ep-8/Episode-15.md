# 📘 Episode 15 – Cleanup & `componentWillUnmount`

Episode 15 **concludes Class-Based Components** by explaining:

* Memory leaks
* Cleanup logic
* `componentWillUnmount`
* Functional vs Class comparison (interview focus)

---

## 1️⃣ The Core Problem: Memory Leaks

### What is the issue?

A component creates **side effects** (timers, listeners) but never removes them.

### Example Scenario

```js
componentDidMount() {
  setInterval(() => {
    console.log("Timer running");
  }, 1000);
}
```

### What goes wrong?

* Component unmounts
* Timer **keeps running**
* Navigating back creates **another timer**
* Timers stack → app slows → browser hangs

📌 This is called a **memory leak**

---

## 2️⃣ Cleanup Concept

### What is Cleanup?

Removing anything that:

* Was created by the component
* Is no longer needed when the component disappears

Examples:

* Timers
* Event listeners
* Subscriptions
* WebSockets
* Observers

---

## 3️⃣ `componentWillUnmount` (Class Components)

### When does it run?

* Just **before** the component is removed from DOM

### Purpose

👉 **Cleanup ONLY**

---

### Correct Timer Cleanup Example

```js
class ProfileClass extends React.Component {
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Timer");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
}
```

### Why `this.timer`?

* Accessible across lifecycle methods
* Prevents orphaned background processes

---

## 4️⃣ What Happens Without Cleanup?

| Action        | Result            |
| ------------- | ----------------- |
| Navigate away | Timer still runs  |
| Navigate back | New timer added   |
| Repeat        | Performance crash |

📌 Real-world apps **must** clean up.

---

## 5️⃣ Functional Component Cleanup (`useEffect`)

### Cleanup Syntax

```js
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Timer");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);
```

### Key Rule

> Whatever you return from `useEffect` is treated as cleanup.

---

## 6️⃣ When Does Cleanup Run in `useEffect`?

Cleanup runs:

1. **Before component unmounts**
2. **Before effect re-runs** (dependency change)

```js
useEffect(() => {
  // effect
  const timer = setInterval(() => {
    console.log("Functional Component Timer")
  }, 1000)
  return () => {
    // cleanup
    clearInterval(timer);
  };
}, [dependency]);
```

📌 This is **more powerful** than class lifecycle methods.

---

## 7️⃣ Why Functional Components Are Cleaner

### Class Component (Messy)

```js
componentDidUpdate(prevProps, prevState) {
  if (prevState.count !== this.state.count) {
    // logic
  }
  if (prevState.text !== this.state.text) {
    // more logic
  }
}
```

### Functional Component (Clean)

```js
useEffect(() => {
  // count logic
}, [count]);

useEffect(() => {
  // text logic
}, [text]);
```

📌 Separation of concerns = cleaner code

---

## 8️⃣ Final Lifecycle Mapping (INTERVIEW GOLD)

| Concept | Class                | Functional                  |
| ------- | -------------------- | --------------------------- |
| Mount   | componentDidMount    | useEffect(() => {}, [])     |
| Update  | componentDidUpdate   | useEffect(() => {}, [deps]) |
| Unmount | componentWillUnmount | useEffect cleanup           |
| Cleanup | manual               | return function             |

---

## 9️⃣ Interview One-Liners ⭐

* Memory leaks happen when cleanup is skipped
* `componentWillUnmount` is only for cleanup
* `useEffect` replaces **three** lifecycle methods
* Cleanup runs before unmount **and** before re-run
* Functional components are easier to maintain

---






---

# 🔁 React Lifecycle vs `useEffect` — Cheat Diagram

---

## 🧱 CLASS COMPONENT LIFECYCLE (Complete Flow)

```
MOUNTING PHASE
--------------------------------
constructor()
   ↓
render()
   ↓
componentDidMount()


UPDATING PHASE
--------------------------------
(props/state change)
   ↓
render()
   ↓
componentDidUpdate(prevProps, prevState)


UNMOUNTING PHASE
--------------------------------
componentWillUnmount()
```

📌 Notes:

* `render()` runs **multiple times**
* API calls → `componentDidMount`
* Cleanup → `componentWillUnmount`

---

## ⚛️ FUNCTIONAL COMPONENT (`useEffect`) FLOW

### Basic Component Execution

```
Function Body Runs (Render)
   ↓
JSX Returned
   ↓
useEffect Runs (after render)
```

---

## 🔁 `useEffect` BEHAVIOR BASED ON DEPENDENCY ARRAY

### 1️⃣ Empty Dependency Array `[]`

```
Render
   ↓
useEffect runs ONCE
   ↓
(unmount)
cleanup runs
```

```js
useEffect(() => {
  // componentDidMount
  return () => {
    // componentWillUnmount
  };
}, []);
```

🟢 Equivalent to:

* `componentDidMount`
* `componentWillUnmount`

---

### 2️⃣ With Dependency `[dep]`

```
Initial Render
   ↓
useEffect runs
   ↓
(dep changes)
cleanup runs
   ↓
useEffect runs again
```

```js
useEffect(() => {
  // componentDidMount + componentDidUpdate
  return () => {
    // cleanup before next run
  };
}, [dep]);
```

🟢 Equivalent to:

* `componentDidMount`
* `componentDidUpdate`
* `componentWillUnmount`

---

### 3️⃣ No Dependency Array

```
Every Render
   ↓
cleanup
   ↓
useEffect
```

```js
useEffect(() => {
  // runs after EVERY render
});
```

🔴 Rarely used (performance risk)

---

## 🧠 SIDE-BY-SIDE MAPPING (INTERVIEW GOLD)

| Class Lifecycle            | Functional (`useEffect`)      |
| -------------------------- | ----------------------------- |
| `constructor`              | Function body                 |
| `render`                   | JSX return                    |
| `componentDidMount`        | `useEffect(() => {}, [])`     |
| `componentDidUpdate`       | `useEffect(() => {}, [deps])` |
| `componentWillUnmount`     | Cleanup function              |
| Multiple lifecycle methods | Single `useEffect`            |

---

## 🧪 CLEANUP COMPARISON

### Class Component

```js
componentDidMount() {
  this.timer = setInterval(...);
}

componentWillUnmount() {
  clearInterval(this.timer);
}
```

### Functional Component

```js
useEffect(() => {
  const timer = setInterval(...);

  return () => {
    clearInterval(timer);
  };
}, []);
```

📌 Cleanup runs:

* Before unmount
* Before effect re-runs

---

## ⚡ WHY `useEffect` IS MORE POWERFUL

| Feature                  | Class | Functional |
| ------------------------ | ----- | ---------- |
| Separate logic per state | ❌     | ✅          |
| Cleanup tied to logic    | ❌     | ✅          |
| Less boilerplate         | ❌     | ✅          |
| Easier mental model      | ❌     | ✅          |

---

## 🎯 ONE-LINE INTERVIEW ANSWER

> `useEffect` is a unified lifecycle hook that can replace `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` depending on its dependency array.

---



