# 📘 React Notes (Episode 8 → Episode 16)

> **Focus:** Core React concepts, Class Components lifecycle, hooks, optimization, and performance — written for **revision + interviews**.

---

## Episode 8 — Class Based Components Basics

### What is a Class Component?

* ES6 class that extends `React.Component`
* Must contain a `render()` method

```js
class User extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}
```

### Key Points

* Uses `this.props` instead of props argument
* Uses `this.state` for local state
* State updates via `this.setState()`

📌 Mostly asked in **interviews**, not used in modern code

---

## Episode 9 — Props, State & Constructor

### Constructor

* Runs first when component is created
* Used to initialize state

```js
constructor(props) {
  super(props);
  this.state = { count: 0 };
}
```

### Why `super(props)`?

* Calls parent (`React.Component`) constructor
* Enables `this.props`
* Mandatory before using `this`

---

## Episode 10 — State Updates

### Updating State

```js
this.setState({ count: this.state.count + 1 });
```

### Important Rules

* Never mutate state directly
* `setState` triggers re-render

---

## Episode 11 — Rendering & Re-rendering

### When does render run?

* Initial mount
* State update
* Props update

📌 Render should be **pure** (no API calls, no side effects)

---

## Episode 12 — Parent & Child Class Components

### Nesting

* Parent can render child components
* Each component has its own lifecycle

```js
<Parent>
  <Child />
</Parent>
```

---

## Episode 13 — Mounting Lifecycle (Deep Dive)

### Mounting Phases

1. constructor
2. render
3. componentDidMount

### Order (Single Component)

```
Constructor → Render → componentDidMount
```

### API Calls

* Always in `componentDidMount`
* UI renders first, data loads later

### Parent → Child Order

```
Parent constructor
Parent render
Child constructor
Child render
Child componentDidMount
Parent componentDidMount
```

### Multiple Children (Important Interview Question)

Render Phase (batched):

```
Parent constructor
Parent render
Child1 constructor
Child1 render
Child2 constructor
Child2 render
```

Commit Phase:

```
Child1 componentDidMount
Child2 componentDidMount
Parent componentDidMount
```

📌 React batches render for performance (Fiber architecture)

---

## Episode 14 — Updating & Unmounting Lifecycle

### API Call Flow

1. Initial render (Loading UI)
2. componentDidMount → API call
3. setState
4. render again with data

### Conditional Rendering

```js
if (!this.state.userInfo) {
  return <h1>Loading...</h1>;
}
```

### componentDidUpdate

* Runs after state/props change
* Similar to `useEffect` with dependencies

```js
componentDidUpdate(prevProps, prevState) {
  if (this.state.count !== prevState.count) {
    // logic
  }
}
```

### componentWillUnmount

* Runs before component is destroyed
* Used for cleanup

---

## Episode 15 — Cleanup & Memory Leaks

### Problem: Memory Leaks

* Timers keep running after page change
* Causes performance issues

### Solution: Cleanup

```js
componentDidMount() {
  this.timer = setInterval(() => {}, 1000);
}

componentWillUnmount() {
  clearInterval(this.timer);
}
```

### Functional Equivalent

```js
useEffect(() => {
  const timer = setInterval(() => {}, 1000);

  return () => clearInterval(timer);
}, []);
```

📌 Cleanup is mandatory for:

* Timers
* Event listeners
* Subscriptions

---

## Episode 16 — Optimization Techniques

## 1️⃣ Single Responsibility Principle (SRP)

### Problem

* One component doing API + UI

### Solution

* Separate logic using Custom Hooks

---

## 2️⃣ Custom Hooks

### Rules

* Must start with `use`
* Can use other hooks

```js
const useGetData = () => {
  const [data, setData] = useState(null);
  useEffect(() => {}, []);
  return data;
};
```

### Benefits

* Reusability
* Cleaner components
* Easier testing

---

## 3️⃣ Code Splitting & Lazy Loading

### Problem

* One huge JS bundle
* Slow initial load

### Solution

```js
const Grocery = lazy(() => import("./Grocery"));
```

---

## 4️⃣ Suspense

```js
<Suspense fallback={<h1>Loading...</h1>}>
  <Grocery />
</Suspense>
```

* Shows fallback while chunk loads
* Prevents app crash

---

## 🔄 Lifecycle vs useEffect (Quick Map)

| Class Component      | Functional Component        |
| -------------------- | --------------------------- |
| componentDidMount    | useEffect(() => {}, [])     |
| componentDidUpdate   | useEffect(() => {}, [deps]) |
| componentWillUnmount | return cleanup function     |

---

## 🧠 Final Interview Takeaways

* Class lifecycle is **interview-critical**
* `componentDidMount` = API calls
* Cleanup prevents memory leaks
* Custom hooks = SRP
* Lazy loading improves performance

---

