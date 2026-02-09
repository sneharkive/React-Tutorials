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

