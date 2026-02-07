# 📘 Episode 12 — Class-Based Components in React

---

## Why Class Components Still Matter

* Modern React uses **Functional Components + Hooks**
* Class components are still important because:

  * Legacy company projects use them
  * Older open-source repos rely on them
  * Interviewers expect you to understand both

👉 Goal of this episode: **Understand how Functional concepts map to Class components**

---

## Setup: Functional vs Class Comparison

* A new **About page** is created and added to the Navbar
* Inside `About.js`, two components are rendered:

  1. `Profile.js` → Functional Component
  2. `ProfileClass.js` → Class-Based Component
* Both components implement:

  * Props
  * State
  * UI rendering

This allows side-by-side comparison.

---

## Creating a Class-Based Component

### Basic Syntax

```js
class ProfileClass extends React.Component {
  constructor(){
    super();
  }

  render() {
    return <h1>Hello</h1>;
  }
}
```

### Rules

* Must use `class` keyword
* Must extend `React.Component`
* Must contain a `render()` method
* JSX is returned **only from `render()`**

---

## Props in Class Components

### Accessing Props

```js
<h1>{this.props.name}</h1>
```

* Props are accessed using `this.props`
* Props are available **even without a constructor**

### Constructor Rule (Important)

```js
constructor(props) {
  super(props);
}
```

* Constructor is **optional**
* Required only when:

  * Initializing state
  * Binding methods
* `super(props)` is required **before using `this`**
* Passing `props` allows access to `this.props` inside constructor

---

## State in Class Components

### Initializing State

```js
constructor(props) {
  super(props);
  this.state = {
    count: 0,
    count2: 0
  };
}
```

Key points:

* State is always a **single object**
* Multiple state variables live inside one object
* Hooks **cannot** be used in class components

---

## Updating State (`this.setState`)

❌ **Wrong (no re-render):**

```js
this.state.count = this.state.count + 1;
```

✅ **Correct:**

```js
this.setState({
  count: this.state.count + 1
});
```

### Important Behavior of `setState`

* `setState` **does not overwrite** state
* It **merges** the updated values
* Other state fields remain unchanged
* `setState` is **asynchronous**
* React may batch multiple updates for performance

### Safer Update Pattern

```js
this.setState((prevState) => ({
  count: prevState.count + 1
}));
```

(Useful when updates depend on previous state)

---

## Lifecycle Order (Initial Mount)

When a class component loads:

1. `constructor()` → state initialization
2. `render()` → JSX returned
3. UI committed to DOM
4. Lifecycle methods like `componentDidMount()` run

👉 This prepares for **Lifecycle Methods** in the next episode.

---

## Hooks vs Class Components

* Hooks work **only in functional components**
* Class components use:

  * `constructor`
  * `render`
  * lifecycle methods (`componentDidMount`, etc.)

---

## Functional vs Class Comparison Table

| Feature      | Functional Component | Class Component                   |
| ------------ | -------------------- | --------------------------------- |
| Definition   | JavaScript function  | Class extending `React.Component` |
| JSX Return   | Direct return        | Inside `render()`                 |
| Props        | `props.name`         | `this.props.name`                 |
| State Init   | `useState()`         | `this.state` in constructor       |
| State Update | Setter function      | `this.setState()`                 |
| Hooks        | ✅ Supported          | ❌ Not supported                   |
| Lifecycle    | Hooks                | Lifecycle methods                 |

---

## Final Takeaways

* Functional Components → modern, preferred
* Class Components → essential for legacy code
* State in classes = object + `setState`
* Props accessed via `this.props`
* Constructor is optional, not mandatory
* Understanding both = strong React fundamentals

---


# Additional Notes

---

## What is `super(props)` in React Class Components?

### Simple answer

`super(props)` **calls the constructor of the parent class (`React.Component`)** and allows you to use `this.props` inside the constructor.

---

## Why is `super(props)` needed?

In JavaScript:

* A class that **extends another class** must call `super()` before using `this`
* `React.Component` is the parent class

```js
class ProfileClass extends React.Component {
  constructor(props) {
    super(props); // 👈 mandatory
    this.state = { count: 0 };
  }
}
```

Without `super(props)` ❌:

```js
this.state = { count: 0 };
// ❌ ReferenceError: Must call super constructor
```

---

## What exactly does it do?

1. Calls `React.Component`’s constructor
2. Initializes `this`
3. Assigns `props` to `this.props`

So after:

```js
super(props);
```

You can safely do:

```js
this.props.name
this.state = {...}
```

---

## `super()` vs `super(props)`

| Code           | Result                                      |
| -------------- | ------------------------------------------- |
| `super()`      | `this.props` ❌ undefined inside constructor |
| `super(props)` | `this.props` ✅ available inside constructor |

💡 Outside the constructor, `this.props` works even without passing `props`, but **inside constructor you need `super(props)`**.

---

## Do we always need a constructor?

❌ No

```js
class ProfileClass extends React.Component {
  render() {
    return <h1>{this.props.name}</h1>;
  }
}
```

✅ Constructor is required **only if**:

* You initialize state
* You bind methods

---

