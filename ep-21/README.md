# 📘 Episode 21 – Redux Toolkit (RTK)

---

## 🔹 Why Redux Toolkit?

* Industry standard for large React apps
* Predictable state management
* Centralized debugging (Redux DevTools)
* Avoids prop drilling & complex Context chains

📌 Redux is **not part of React**

---

## 🔹 Redux Architecture (Big Picture)

```
UI → dispatch(action)
        ↓
     reducer
        ↓
      store
        ↓
   useSelector
        ↓
        UI
```

📌 One-way data flow (Unidirectional)

---

## 🔹 Core Concepts

### Store

* Global object holding application state

### Slice

* Logical partition of store (cart, user, auth, etc.)

### Action

* Plain object describing *what happened*

### Reducer

* Function that updates state based on action

### Selector

* Function to read data from store

---

## 🔹 Installation

```bash
npm install @reduxjs/toolkit react-redux
```

---

## 🔹 Step 1: Create Store

```js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
```

---

## 🔹 Step 2: Create Slice (`cartSlice.js`)

```js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
    clearCart: (state) => {
      state.cartItems.length = 0;
    },
  },
});

export const { addItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
```

📌 Mutable syntax is powered by **Immer**

---

## 🔹 Step 3: Provide Store to App

```js
import { Provider } from "react-redux";
import appStore from "./utils/store/appStore";

<Provider store={appStore}>
  <App />
</Provider>
```

---

## 🔹 Step 4: Read Data (`useSelector`)

```js
import { useSelector } from "react-redux";

const cartItems = useSelector(
  (store) => store.cart.cartItems
);
```

📌 Component automatically subscribes to store updates

---

## 🔹 Step 5: Write Data (`useDispatch`)

```js
import { useDispatch } from "react-redux";
import { addItem } from "../utils/store/cartSlice";

const dispatch = useDispatch();

dispatch(addItem(product));
```

📌 UI never modifies state directly

---

## 🔹 Cart Page Example

```js
const items = useSelector(store => store.cart.cartItems);

items.map(item => <Card key={item.id} {...item} />);
```

---

## 🔹 Debugging with Redux DevTools

* Inspect actions (`cart/addItem`)
* Time-travel debugging
* View previous & next state
* Essential for large apps

---

## 🔹 Context vs Redux (Interview Table)

| Feature     | Context API    | Redux Toolkit |
| ----------- | -------------- | ------------- |
| Scope       | Small / Medium | Large         |
| Debugging   | Limited        | Excellent     |
| Boilerplate | Low            | Medium        |
| Performance | OK             | Optimized     |
| State Logic | Simple         | Complex       |

---

## 🧠 Interview Gold (Must Remember)

### Q: Why Redux Toolkit over Redux?

**A:** Less boilerplate, built-in Immer, better DX.

---

### Q: Does Redux mutate state?

**A:** No. RTK uses Immer to keep immutability.

---

### Q: Why not Context instead?

**A:** Context doesn’t scale well for complex, frequently updated state.

---

### Q: What triggers re-render?

**A:** Selector subscription detecting store change.

---




---

# 🔥 Episode 21 – Redux Toolkit Interview Questions

---

## 🟢 BASIC REDUX QUESTIONS

### 1. What is Redux?

Redux is a **state management library** used to manage global state in large-scale applications. It works independently of React.

---

### 2. Is Redux part of React?

No. Redux is an **external library**. React uses it via `react-redux`.

---

### 3. Why do we need Redux?

* Avoids prop drilling
* Centralized state management
* Predictable data flow
* Easier debugging with DevTools

---

### 4. What problem does Redux solve?

It solves **global state sharing** and **complex state updates** in large applications.

---

### 5. What is Redux Toolkit (RTK)?

Redux Toolkit is the **official, recommended way** to write Redux logic with less boilerplate.

---

### 6. Why Redux Toolkit over traditional Redux?

* Less boilerplate
* Built-in best practices
* Easier reducers
* Immutable updates handled internally

---

## 🟢 REDUX ARCHITECTURE & FLOW

### 7. Explain Redux data flow.

**Unidirectional flow**:

```
UI → Dispatch Action → Reducer → Store → UI (via Selector)
```

---

### 8. What is the Redux store?

The store is a **single global object** that holds the entire application state.

---

### 9. Why does Redux use a single store?

* Single source of truth
* Predictable state changes
* Easier debugging

---

### 10. What is a slice in Redux Toolkit?

A slice is a **logical part of the store** that contains:

* State
* Reducers
* Actions

---

### 11. Why do we divide state into slices?

* Better organization
* Separation of concerns
* Scalability

---

### 12. What is an action?

An action is a **plain object** that describes *what happened*.

---

### 13. What is a reducer?

A reducer is a **pure function** that updates state based on an action.

---

### 14. Can we directly modify the Redux store?

❌ No.
State can only be updated via **reducers**.

---

## 🟢 REDUX TOOLKIT CORE APIS

### 15. What is `configureStore`?

`configureStore` creates the Redux store with:

* Reducers
* Middleware
* DevTools enabled by default

---

### 16. What is `createSlice`?

`createSlice` is a function that:

* Creates reducers
* Auto-generates action creators

---

### 17. What are the mandatory fields in `createSlice`?

* `name`
* `initialState`
* `reducers`

---

### 18. What does `initialState` do?

Defines the **default state** for a slice.

---

### 19. Why can we mutate state directly in RTK reducers?

Redux Toolkit uses **Immer** internally, which converts mutations into immutable updates.

---

### 20. What is Immer?

Immer allows writing **mutable-looking code** while keeping state immutable internally.

---

## 🟢 ACTIONS & PAYLOAD

### 21. What is `action.payload`?

It contains the **data sent from UI** to the reducer.

---

### 22. How do you pass data to a reducer?

By dispatching an action with payload:

```js
dispatch(addItems(product))
```

---

### 23. Who creates action creators in RTK?

`createSlice` automatically creates them.

---

### 24. How do you export actions from a slice?

```js
export const { addItems, removeItems } = cartSlice.actions;
```

---

## 🟢 CONNECTING REDUX TO REACT

### 25. What is `react-redux`?

It is the **binding library** between React and Redux.

---

### 26. What is `<Provider>`?

It makes the Redux store available to the entire React app.

---

### 27. Where should `<Provider>` be used?

At the **root of the application**.

---

### 28. What happens if you don’t wrap the app with `<Provider>`?

Redux hooks will throw an error.

---

## 🟢 `useSelector` QUESTIONS

### 29. What is `useSelector`?

A hook to **read data** from the Redux store.

---

### 30. What does `useSelector` return?

The selected portion of the state.

---

### 31. Does `useSelector` subscribe to the store?

✅ Yes. Component re-renders when selected state changes.

---

### 32. How do you access cart items from store?

```js
useSelector(store => store.cart.cartItems)
```

---

### 33. When does a component re-render with `useSelector`?

When the selected state reference changes.

---

## 🟢 `useDispatch` QUESTIONS

### 34. What is `useDispatch`?

A hook to **send actions** to the Redux store.

---

### 35. Does dispatch directly change the store?

❌ No. It triggers a reducer.

---

### 36. Can we dispatch from anywhere?

No. Only inside React components or custom hooks.

---

### 37. Example of dispatch usage?

```js
dispatch(addItems(item))
```

---

## 🟢 CART IMPLEMENTATION QUESTIONS

### 38. How is cart count updated automatically?

Via `useSelector` subscription to store.

---

### 39. How does Redux avoid prop drilling?

State is accessed directly from store.

---

### 40. How do you clear the cart?

By dispatching a reducer that resets state.

---

### 41. Why is Redux useful for cart functionality?

Cart data is required across multiple components.

---

## 🟢 DEVTOOLS & DEBUGGING

### 42. What are Redux DevTools?

Browser tools to:

* Track actions
* Inspect state changes
* Time travel debugging

---

### 43. Does Redux Toolkit enable DevTools automatically?

✅ Yes (in development mode).

---

### 44. What can you see in Redux DevTools?

* Action names
* Previous state
* Next state

---

## 🟢 REDUX VS CONTEXT API

### 45. Redux vs Context API?

| Redux                 | Context              |
| --------------------- | -------------------- |
| External library      | Built-in             |
| Better for large apps | Good for small apps  |
| DevTools              | No DevTools          |
| Optimized re-renders  | Can cause re-renders |

---

### 46. When should you prefer Redux?

* Large app
* Frequent global updates
* Complex state logic

---

### 47. When is Context API enough?

* Theme
* Auth user
* Language

---

## 🟢 ADVANCED / TRICK QUESTIONS

### 48. Is Redux synchronous?

Yes by default.

---

### 49. How do we handle async logic in Redux?

Using **middleware** (e.g., Thunks).

---

### 50. What is middleware?

A function that runs **between dispatch and reducer**.

---

### 51. Does Episode 21 use middleware?

No. It focuses on core Redux flow.

---

### 52. Can Redux Toolkit replace Context?

For large-scale state management, yes.

---

### 53. Why is Redux predictable?

Because state updates happen only via reducers.

---

### 54. Can multiple reducers exist?

Yes, via multiple slices.

---

### 55. What happens if a reducer mutates state incorrectly?

Immer prevents mutation bugs.

---

## 🧠 FINAL INTERVIEW SUMMARY

* Redux Toolkit is **industry standard**
* Single store, multiple slices
* Immutable updates via Immer
* `useSelector` → read
* `useDispatch` → write
* Predictable, debuggable, scalable

---








