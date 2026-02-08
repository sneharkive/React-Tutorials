# 📘 Episode 20 – Props Drilling & Context API

---

## 🔹 Problem: Props Drilling

### What is Props Drilling?

Passing data through components that **don’t need it**, just to reach a deeply nested child.

```
Component A → Component B → Component C
```

Only `Component C` uses the data.

---

### Problems with Props Drilling

* ❌ Unnecessary coupling
* ❌ Intermediate components access sensitive data
* ❌ Hard to maintain in deep trees
* ❌ Refactoring becomes painful
* ❌ Poor scalability

---

## 🔹 Solution: Context API

### What is Context?

A **global data container** that allows components to access shared data **without passing props manually**.

Think of it as:

> A centralized data layer shared across the app

---

## 🔹 Step 1: Create Context

```js
import { createContext } from "react";

const UserContext = createContext({
  name: "Levi",
  email: "levi@gmail.com"
});

export default UserContext;
```

📌 Default value is used **only if no Provider exists**

---

## 🔹 Step 2: Consume Context (Functional Component)

```js
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Profile = () => {
  const { name } = useContext(UserContext);
  return <h1>{name}</h1>;
};
```

✔ No props
✔ No intermediate components involved

---

## 🔹 Step 3: Consume Context (Class Component)

Hooks ❌ don’t work in class components.

```js
<UserContext.Consumer>
  {(data) => <h1>{data.name}</h1>}
</UserContext.Consumer>
```

✔ Uses **Render Props pattern**

---

## 🔹 Step 4: Provide & Update Context

### Wrap Root Component

```js
<UserContext.Provider value={{ name, setName }}>
  <App />
</UserContext.Provider>
```

---

### State Lives in Parent

```js
const [name, setName] = useState("Shivani");
```

📌 Context **does not store state**
📌 Context only **distributes state**

---

## 🔹 Live Update Flow

1. User types in input
2. `setName()` updates state in App
3. Provider receives new value
4. All subscribed components re-render
5. Navbar updates instantly

---

## 🔹 Data Layer vs UI Layer (Revisited)

### UI Layer

* Component hierarchy
* JSX & rendering logic

### Data Layer

* State
* Props
* Context values

Context bridges **data access**, not UI hierarchy.

---

## 🔹 When to Use Context API

✅ Good Use Cases:

* Authentication data
* User profile
* Theme (dark/light)
* Language / locale
* Feature flags

❌ Avoid for:

* Rapidly changing state
* Large lists
* Form inputs at scale

---

## 🔹 Context vs Props

| Feature     | Props          | Context      |
| ----------- | -------------- | ------------ |
| Direction   | Parent → Child | Parent → Any |
| Boilerplate | Low            | Medium       |
| Performance | High           | Medium       |
| Use case    | Local data     | Global data  |

---

## 🧠 Interview Gold (Must Remember)

### Q: What problem does Context solve?

**A:** Props drilling in deeply nested component trees.

---

### Q: Does Context replace Redux?

**A:** No. Context handles data access; Redux handles complex state logic.

---

### Q: Is Context global state?

**A:** Yes, but scoped to the Provider tree.

---

### Q: Why not use Context everywhere?

**A:** It can cause unnecessary re-renders and performance issues.

---

### Q: Can Context update state?

**A:** No. State lives in components; Context distributes it.

---

## ✅ Final Verdict

✔ Your explanation is **correct**
✔ Minor wording fixes applied
✔ Interview-safe & production-ready
✔ Clean architectural understanding

Whenever you’re ready, send **Episode 21** 🚀
