# Episode 10 — `useEffect` Dependency Array & React Routing

---

## 1. `useEffect` Dependency Array — Deep Dive

`useEffect` controls **when side effects run** in a component.
Its behavior depends entirely on the **dependency array (second argument)**.

### Case 1: Empty Dependency Array `[]`

```js
useEffect(() => {
  // logic
}, []);
```

**Behavior**

* Runs **only once** after the initial render
* Does **not** run again on re-renders caused by state updates

**Use Cases**

* API calls
* Subscriptions
* Initial setup logic

---

### Case 2: No Dependency Array

```js
useEffect(() => {
  // logic
});
```

**Behavior**

* Runs **after every render**
* Executes on:

  * Initial render
  * Every state update
  * Every re-render

**Warning**

* Can cause **performance issues**
* Risk of **infinite loops** if state is updated inside the effect

---

### Case 3: Dependency Array with Variables

```js
useEffect(() => {
  // logic
}, [btnName]);
```

**Behavior**

* Runs once on initial render
* Runs again **only when specified dependency changes**

**Use Cases**

* Triggering logic when specific state/props change
* Logging
* Conditional API calls

---

## Rules of Hooks (Very Important)

Hooks **must follow strict rules**:

* ✅ Call hooks at the **top level**
* ❌ No hooks inside `if`, `for`, `while`
* ❌ No hooks inside nested functions
* ❌ No hooks inside callbacks

**Reason**

> React relies on consistent hook call order during re-renders.

---
---

## 2. Introduction to React Router DOM

React Router enables **Single Page Application (SPA)** navigation.

### Installation

```bash
npm i react-router-dom
```

---

## 3. Route Configuration (`createBrowserRouter`)

Routes are defined using `createBrowserRouter` in main.jsx

```js
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/about",
    element: <About />
  }
]);
```

### Key Concepts

* Each route object defines:

  * `path` → URL
  * `element` → Component to render
* Configuration usually lives in the **root file**

---

## 4. `RouterProvider`

To activate routing, the app must be wrapped with `RouterProvider`.

```js
<RouterProvider router={appRouter} />
```

**Purpose**

* Connects route configuration to the React app
* Enables navigation without page reloads

---

## 5. Custom Error Handling (`errorElement`)

React Router supports **custom error pages**.

### Route Configuration

```js
{
  path: "/",
  element: <App />,
  errorElement: <Error />
}
```

### `useRouteError` Hook

```js
const err = useRouteError();
```

**Provides**

* `status` (404, 500)
* `statusText`
* `data`

**Use Case**

* Build user-friendly error pages instead of default unstyled errors

---

## 6. Navigation: `<a>` vs `<Link>`

### ❌ Anchor Tags (`<a>`)

```html
<a href="/about">About</a>
```

**Problem**

* Triggers **full page reload**
* Re-downloads JS bundle
* Breaks SPA behavior

---

### ✅ `Link` Component

```js
<Link to="/about">About</Link>
```

**Behavior**

* Updates URL **without reloading**
* React swaps components internally
* Fast and efficient navigation

---

## 7. Single Page Application (SPA)

**Definition**

* Only **one HTML page**
* URL changes do **not** reload the page
* React controls which component is rendered

**Result**

* Faster transitions
* Better user experience

---

## 8. Nested Routing & `Outlet`

### Requirement

* Navbar/Header should stay fixed
* Only page content should change

---

### Nested Route Configuration

```js
const appRouter = createBrowserRouter([{
  path: "/",
  element: <App />,
  errorElement: <Error />,
  children: [
    { path: "/", element: <ProductCard /> },
    { path: "/kids", element: <KidCard /> },
  ],
}]);
```

---

### Add `Outlet` Component in App.jsx

```js
  <Navbar/>
  <Outlet />
```

**Purpose**

* Acts as a **placeholder**
* React Router injects matching child component here

---

## Final Architecture 

```
App
 ├── Navbar (always visible)
 └── Outlet
      ├── Home
      ├── Men
      └── Kids
```

**Performance**

* No page reloads
* Only content inside `Outlet` changes

---

## Key Takeaways (Episode 10)

* Dependency array controls **when `useEffect` runs**
* Hooks must follow strict rules
* `Link` enables SPA navigation
* `createBrowserRouter` defines routing structure
* `Outlet` enables layout persistence
* Nested routing keeps UI consistent and fast

---

