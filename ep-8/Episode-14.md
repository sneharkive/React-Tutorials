# 📘 Episode 14 – React Lifecycle (Updating & Unmounting)

Episode 14 completes the **React Lifecycle** in **Class-Based Components** by covering:

* API calls with real data
* Updating Phase
* Unmounting Phase
* Cleanup logic

This episode is **extremely important for interviews**.

---

## 1️⃣ API Calls in Class Components

### Where should API calls be made?

✅ **`componentDidMount()`**

### Why?

* Runs **after first render**
* UI is already visible (Loading / Shimmer)
* Prevents blocking initial render

---

### Standard API Call Flow

```js
constructor(props) {
  super(props);
  this.state = {
    userInfo: null
  };
}

componentDidMount() {
  this.fetchUserData();
}

async fetchUserData() {
  const data = await fetch("https://api.github.com/users/xyz");
  const json = await data.json();
  this.setState({ userInfo: json });
}
```

---

## 2️⃣ Updating State with API Data

* API response is stored using `this.setState()`
* State update triggers **Updating Phase**
* React re-runs `render()`

📌 `setState` **never mutates state directly**

---

## 3️⃣ Conditional Rendering (Null Handling)

### Problem

Initial render happens **before API data arrives**

```js
this.state.userInfo === null
```

Accessing:

```js
this.state.userInfo.name
```

❌ Crash

---

### Solution: Early Return

```js
render() {
  if (this.state.userInfo === null) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h2>{this.state.userInfo.name}</h2>
      <img src={this.state.userInfo.avatar_url} />
    </div>
  );
}
```

📌 Same concept as conditional rendering in functional components.

---

## 4️⃣ Updating Phase – `componentDidUpdate`

### When does it run?

* After:

  * `setState`
  * Prop change
* After re-render is committed to DOM

---

### Execution Order

```txt
setState
→ render
→ componentDidUpdate
```

---

### Method Signature

```js
componentDidUpdate(prevProps, prevState) {
  // compare values
}
```

---

### Why comparisons are REQUIRED

```js
componentDidUpdate() {
  this.setState({ count: 1 }); // ❌ infinite loop
}
```

✅ Correct:

```js
componentDidUpdate(prevProps, prevState) {
  if (prevState.count !== this.state.count) {
    // safe logic
  }
}
```

📌 Equivalent to:

```js
useEffect(() => {}, [dependency])
```

---

## 5️⃣ Unmounting Phase – `componentWillUnmount`

### When does it run?

* Just **before component is removed** from DOM
* Example:

  * Navigating to another route
  * Conditional rendering removes component

---

### Purpose: CLEANUP 🧹

This is **mandatory** for avoiding memory leaks.

```js
componentWillUnmount() {
  clearInterval(this.timer);
  window.removeEventListener("resize", this.handleResize);
}
```

---

### Typical Cleanup Tasks

* Clear intervals / timeouts
* Remove event listeners
* Cancel subscriptions
* Abort fetch requests

📌 Equivalent to:

```js
useEffect(() => {
  return () => {
    // cleanup
  };
}, []);
```

---

## 6️⃣ Full Lifecycle Flow (Episode 14)

```txt
Mounting:
constructor
→ render (Loading UI)
→ componentDidMount (API Call)

Updating:
setState
→ render (Data UI)
→ componentDidUpdate

Unmounting:
componentWillUnmount
```

---

## 7️⃣ Lifecycle Methods Summary Table

| Phase      | Method               | Purpose                     |
| ---------- | -------------------- | --------------------------- |
| Mounting   | constructor          | Initialize state            |
| Mounting   | render               | Return JSX                  |
| Mounting   | componentDidMount    | API calls                   |
| Updating   | componentDidUpdate   | React to state/prop changes |
| Unmounting | componentWillUnmount | Cleanup                     |

---

## 8️⃣ Interview Gold Lines ⭐

* `componentDidMount` ≈ `useEffect([])`
* `componentDidUpdate` ≈ `useEffect([deps])`
* `componentWillUnmount` ≈ `useEffect cleanup`
* Never call `setState` blindly in `componentDidUpdate`
* Cleanup is mandatory to avoid memory leaks

---


