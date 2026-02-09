# 🔥 REACT INTERVIEW QUESTIONS (EP 1–23)

---

# 📘 EPISODE 1 – Inception (React Basics)

### 1. What is React?

React is a **JavaScript library** for building **fast, interactive user interfaces**, mainly for **single-page applications**, using a **component-based architecture**.

---

### 2. Why is React called a library and not a framework?

Because React focuses **only on the UI layer**.
It does not enforce routing, state management, or folder structure — developers choose those tools themselves.

👉 Framework = opinionated
👉 Library = flexible

---

### 3. What problem does React solve?

React solves:

* **UI inconsistency** caused by frequent DOM updates
* **Performance issues** from direct DOM manipulation
* **Complex state management** in large apps

It does this using **Virtual DOM** and **declarative UI**.

---

### 4. What is `React.createElement()`?

It is a function that creates a **React element object**.

```js
React.createElement("h1", {}, "Hello")
```

This object is later converted into actual DOM elements.

---

### 5. What is JSX?

JSX is a **syntax extension** that lets us write **HTML-like code inside JavaScript**.

```jsx
<h1>Hello</h1>
```

It makes React code **more readable and maintainable**.

---

### 6. Is JSX mandatory?

❌ No.
React can work **without JSX** using `React.createElement()`.
JSX is optional but **highly recommended**.

---

### 7. How does JSX work behind the scenes?

JSX is converted into `React.createElement()` calls by **Babel**.

```jsx
<h1>Hello</h1>
↓
React.createElement("h1", {}, "Hello")
```

---

### 8. Difference between HTML and JSX

| HTML                   | JSX                           |
| ---------------------- | ----------------------------- |
| Uses `class`           | Uses `className`              |
| Attributes are strings | Attributes are JS expressions |
| Can be invalid JS      | Must be valid JS              |
| Case-insensitive       | Case-sensitive                |

---

### 9. What is Babel and why is it needed?

Babel is a **JavaScript compiler** that:

* Converts JSX → JavaScript
* Converts modern JS → browser-compatible JS

Browsers **do not understand JSX**, so Babel is required.

---

### 10. What is a root in React?

A root is the **entry point** where React controls the DOM.

```js
const root = ReactDOM.createRoot(document.getElementById("root"));
```

All React components render inside this root.

---

### 11. How does React render elements on the page?

1. JSX → React Elements
2. React builds a **Virtual DOM**
3. Compares with previous Virtual DOM (**diffing**)
4. Updates only changed parts in the **real DOM**

This makes React **fast and efficient**.

---

# 📘 EPISODE 2 – Igniting Our App (Tooling)

### 1. What is NPM?

NPM (Node Package Manager) is a tool to:

* Install libraries
* Manage dependencies
* Run scripts

It comes bundled with Node.js.

---

### 2. Difference between `dependencies` and `devDependencies`

| dependencies           | devDependencies             |
| ---------------------- | --------------------------- |
| Required in production | Only for development        |
| Used at runtime        | Used while building/testing |
| Example: React         | Example: Babel, ESLint      |

---

### 3. What is a bundler?

A bundler:

* Combines multiple JS/CSS files into fewer files
* Optimizes code for production
* Handles imports, images, CSS, etc.

Examples: Parcel, Vite, Webpack.

---

### 4. Why use Parcel / Vite / Webpack?

Because browsers cannot:

* Understand JSX
* Handle module imports efficiently
* Optimize large apps

Bundlers solve all of this automatically.

---

### 5. What is Parcel doing behind the scenes?

Parcel:

* Bundles files
* Transpiles JS using Babel
* Enables Hot Module Replacement (HMR)
* Optimizes assets
* Does tree shaking
* Caches builds for speed

👉 Zero-config bundler.

---

### 6. What is `package-lock.json`?

It locks **exact versions** of installed dependencies.

Purpose:

* Ensures same dependency versions across machines
* Prevents “works on my machine” bugs

---

### 7. What is `.gitignore`?

It tells Git which files/folders **not to track**.

Common ignored items:

* `node_modules`
* `.env`
* build folders

---

### 8. Difference between `npm` and `npx`

| npm                    | npx                             |
| ---------------------- | ------------------------------- |
| Installs packages      | Executes packages               |
| Saves to project       | No installation needed          |
| Example: `npm install` | Example: `npx create-react-app` |

---

### 9. Why do we need `node_modules`?

`node_modules` contains:

* All installed libraries
* Dependencies of dependencies

Without it, the app **cannot run**.

---

### 10. What is tree shaking?

Tree shaking removes **unused code** from the final bundle.

Benefits:

* Smaller bundle size
* Faster load time
* Better performance

---

---

# 📘 EPISODE 3 – Laying the Foundation

### 1. What is a React component?

A React component is a **reusable, independent piece of UI** that returns React elements.
It can accept **props** and manage its own **state**.

---

### 2. Difference between Function and Class components

| Function Component        | Class Component        |
| ------------------------- | ---------------------- |
| Simple JS function        | ES6 class              |
| Uses Hooks                | Uses lifecycle methods |
| Less boilerplate          | More boilerplate       |
| Preferred in modern React | Mostly legacy          |

---

### 3. What is a React Element?

A React element is a **plain JavaScript object** that describes what should appear on the UI.

```js
const element = <h1>Hello</h1>;
```

React elements are **immutable**.

---

### 4. What does `render()` do?

`render()` returns **React elements** that describe what should be displayed on the screen.

In class components, it is mandatory.
In function components, the function itself acts as render.

---

### 5. What is component composition?

Component composition means **using components inside other components**.

```jsx
<App>
  <Header />
  <Body />
</App>
```

This improves **reusability and readability**.

---

### 6. Why components start with a capital letter?

React treats:

* lowercase → HTML elements
* uppercase → custom components

```jsx
<MyComponent /> ✅
<myComponent /> ❌
```

---

### 7. Can a component return multiple elements?

❌ Not directly.
✅ They must be wrapped inside:

* a single parent
* React Fragment (`<> </>`)

---

### 8. What is React Fragment?

A Fragment lets you group elements **without adding extra DOM nodes**.

```jsx
<>
  <h1>Title</h1>
  <p>Text</p>
</>
```

---

# 📘 EPISODE 4 – Talk is Cheap, Show Me the Code (JSX Deep Dive)

### 1. What is JSX transpiled into?

JSX is transpiled into `React.createElement()` calls by Babel.

---

### 2. Why use `{}` inside JSX?

Curly braces allow **JavaScript expressions** inside JSX.

```jsx
<h1>{name}</h1>
```

---

### 3. Can we write JS inside JSX?

✅ Yes, **JavaScript expressions** only.

❌ Statements like `if`, `for`, `while` are not allowed directly.

---

### 4. What is expression vs statement in JSX?

| Expression      | Statement             |
| --------------- | --------------------- |
| Returns a value | Does not return value |
| Allowed in JSX  | Not allowed           |
| `a + b`         | `if`, `for`           |

---

### 5. Why `className` instead of `class`?

`class` is a **reserved keyword in JavaScript**, so JSX uses `className`.

---

### 6. What happens if JSX has invalid syntax?

The code **fails during compilation**, and Babel throws an error before rendering.

---

### 7. What is conditional rendering?

Rendering UI based on conditions.

```jsx
{isLoggedIn && <Dashboard />}
```

Common methods:

* ternary operator
* logical `&&`

---

# 📘 EPISODE 5 – Let’s Get Hooked (Hooks Intro)

### 1. What are Hooks?

Hooks are **functions that let functional components use state and lifecycle features**.

---

### 2. Why were Hooks introduced?

To:

* Avoid class components
* Reuse logic easily
* Simplify lifecycle management
* Reduce boilerplate

---

### 3. Rules of Hooks

1. Call Hooks at the **top level**
2. Call Hooks **only inside React components or custom hooks**

---

### 4. What is `useState`?

`useState` is a Hook that allows components to have **state**.

```js
const [count, setCount] = useState(0);
```

---

### 5. Why does state update trigger re-render?

React re-renders to **reflect updated UI** whenever state changes.

---

### 6. Difference between state and normal variable

| State                     | Normal Variable  |
| ------------------------- | ---------------- |
| Triggers re-render        | Does not         |
| Preserved between renders | Resets on render |
| Managed by React          | Managed by JS    |

---

### 7. Why `useState` is async?

State updates are **batched and scheduled** for performance, not applied immediately.

---

### 8. What is batching?

Batching combines **multiple state updates into a single re-render** for better performance.

---

# 📘 EPISODE 6 – Exploring the World (API & useEffect)

### 1. What is `useEffect`?

`useEffect` is a Hook to handle **side effects** like:

* API calls
* subscriptions
* timers
* DOM manipulation

---

### 2. Why do we need `useEffect`?

To separate **side-effect logic** from rendering logic.

---

### 3. When does `useEffect` run?

* After the component renders
* Depends on the dependency array

---

### 4. Dependency array behavior

| Dependency Array | Behavior                     |
| ---------------- | ---------------------------- |
| `[a, b]`         | Runs when `a` or `b` changes |
| `[]`             | Runs once on mount           |
| omitted          | Runs on every render         |

---

### 5. What happens if dependency array is empty?

`useEffect` runs **only once** after initial render.

---

### 6. What happens if no dependency array?

`useEffect` runs **after every render**.

---

### 7. Why API calls are done in `useEffect`?

To:

* Avoid infinite loops
* Follow React lifecycle
* Fetch data after component mounts

---

### 8. What is async/await inside `useEffect`?

`useEffect` itself cannot be async.
We define an **async function inside it** and call it.

```js
useEffect(() => {
  async function fetchData() {
    const res = await fetch(url);
  }
  fetchData();
}, []);
```

---

---

# 📘 EPISODE 7 – Finding the Path (Routing)

### 1. What is SPA?

SPA (Single Page Application) loads **one HTML page** and dynamically updates content without full page reloads using JavaScript.

---

### 2. What is React Router?

React Router is a **client-side routing library** that enables navigation between components without refreshing the page.

---

### 3. Difference between `Link` and `<a>` tag

| Link                     | `<a>`                  |
| ------------------------ | ---------------------- |
| Prevents page reload     | Reloads page           |
| Uses client-side routing | Server-side navigation |
| Faster                   | Slower                 |

---

### 4. What is `useParams`?

`useParams` is a hook that returns **dynamic URL parameters**.

```js
const { id } = useParams();
```

---

### 5. What is `useNavigate`?

`useNavigate` is used for **programmatic navigation**.

```js
const navigate = useNavigate();
navigate("/home");
```

---

### 6. What is dynamic routing?

Routing where part of the URL changes dynamically.

```js
/product/:id
```

---

### 7. What is `Outlet`?

`Outlet` renders **child routes** inside a parent route.

---

### 8. How routing works internally?

React Router:

1. Listens to URL changes
2. Matches path with route config
3. Renders corresponding component
4. Updates UI without reload

---

# 📘 EPISODE 8 – Let’s Get Classy (Class Components)

### 1. What is a Class Component?

A class component is an ES6 class that extends `React.Component` and has a `render()` method.

---

### 2. Difference between Class & Function components

| Class                  | Function   |
| ---------------------- | ---------- |
| Uses lifecycle methods | Uses Hooks |
| Uses `this`            | No `this`  |
| More verbose           | Cleaner    |

---

### 3. What is `constructor()`?

Used to:

* Initialize state
* Bind methods

---

### 4. What is `super(props)`?

Calls the parent (`React.Component`) constructor so `this.props` is accessible.

❌ Without it → `this` is undefined.

---

### 5. What is `this.state`?

An object that holds **component-specific data**.

```js
this.state = { count: 0 };
```

---

### 6. What is `this.setState()`?

Used to update state and trigger re-render.

```js
this.setState({ count: this.state.count + 1 });
```

---

### 7. Why hooks don’t work in class components?

Hooks rely on **function execution order**, which class components do not follow.

---

# 📘 EPISODE 9 – Optimizing Our App

### 1. What is lazy loading?

Loading components **only when needed**, not at initial load.

---

### 2. What is code splitting?

Breaking the bundle into **smaller chunks** to load on demand.

---

### 3. What is `React.lazy()`?

Used to dynamically import components.

```js
const About = React.lazy(() => import("./About"));
```

---

### 4. What is `Suspense`?

Used to show fallback UI while lazy component loads.

```jsx
<Suspense fallback={<Loader />}>
  <About />
</Suspense>
```

---

### 5. Why lazy loading improves performance?

* Smaller initial bundle
* Faster first render
* Better user experience

---

### 6. What is chunking?

Splitting code into **separate JS files (chunks)**.

---

# 📘 EPISODE 10 – Tailwind & Styling

### 1. What is Tailwind CSS?

A **utility-first CSS framework** that provides low-level classes to build custom designs.

---

### 2. Difference between CSS, SCSS, Tailwind

| CSS          | SCSS              | Tailwind        |
| ------------ | ----------------- | --------------- |
| Plain styles | CSS with features | Utility classes |
| Repetitive   | More structured   | No custom CSS   |

---

### 3. Pros & cons of Tailwind

**Pros**

* Fast development
* No naming issues
* Smaller CSS bundle

**Cons**

* Long class names
* Initial learning curve

---

### 4. How Tailwind works internally?

* Scans files
* Generates only used classes
* Removes unused CSS (purging)

---

### 5. What is utility-first CSS?

Styling by combining **small reusable utility classes** instead of writing custom CSS.

---

# 📘 EPISODE 11 – Data is the New Oil (Props)

### 1. What are props?

Props are **inputs passed from parent to child components**.

---

### 2. Props vs State

| Props              | State              |
| ------------------ | ------------------ |
| Read-only          | Mutable            |
| Passed from parent | Owned by component |
| External           | Internal           |

---

### 3. Are props mutable?

❌ No. Props are **read-only**.

---

### 4. What is prop drilling?

Passing props through multiple intermediate components unnecessarily.

---

### 5. What is default props?

Fallback values for props when none are passed.

---

### 6. What happens if props change?

Component **re-renders** with new props.

---

# 📘 EPISODE 12 – Let’s Build Store (Lifting State)

### 1. What is lifting state up?

Moving shared state to the **closest common parent**.

---

### 2. Why lift state up?

To:

* Sync data between components
* Avoid duplicate state

---

### 3. How siblings communicate?

Via:

* Shared parent state
* Callback functions

---

### 4. What is single source of truth?

Each piece of state should exist in **one place only**.

---

### 5. Controlled vs uncontrolled components

| Controlled           | Uncontrolled       |
| -------------------- | ------------------ |
| React controls input | DOM controls input |
| Uses state           | Uses ref           |
| Predictable          | Less control       |

---

---

# 📘 EPISODE 13 – Time for the Test (Testing)

### 1. Why testing is important?

Testing ensures:

* Code works as expected
* Bugs are caught early
* Safe refactoring
* Confidence in production releases

---

### 2. Types of testing

**Unit Testing**

* Tests individual functions/components
* Fast and isolated

**Integration Testing**

* Tests interaction between components

**E2E (End-to-End) Testing**

* Tests full user flow (login → checkout)

---

### 3. What is Jest?

Jest is a **JavaScript testing framework** used for:

* Running tests
* Assertions
* Mocking
* Snapshot testing

---

### 4. What is React Testing Library?

RTL tests **components the way users interact** with them (DOM-based testing).

> Focuses on behavior, not implementation.

---

### 5. What is `__tests__` folder?

A convention-based folder where test files are placed.

```txt
Component/
 ├─ Component.js
 └─ __tests__/
     └─ Component.test.js
```

---

### 6. What is mocking?

Mocking replaces real dependencies with fake ones.

Used for:

* APIs
* Timers
* External libraries

---

# 📘 EPISODE 14 – Machine Coding Patterns

### 1. How to structure large React apps?

By:

* Splitting features
* Reusing components
* Clear separation of concerns

---

### 2. Container vs Presentational components

| Container     | Presentational |
| ------------- | -------------- |
| Handles logic | Handles UI     |
| API calls     | JSX only       |
| Stateful      | Stateless      |

---

### 3. Smart vs Dumb components

Same concept as container/presentational:

* Smart = logic
* Dumb = UI

---

### 4. Folder structure best practices

```txt
src/
 ├─ components/
 ├─ pages/
 ├─ hooks/
 ├─ utils/
 ├─ services/
 └─ store/
```

---

# 📘 EPISODE 15 – Custom Hooks

### 1. What is a custom hook?

A reusable function that starts with `use` and contains hook logic.

```js
function useOnlineStatus() {}
```

---

### 2. Why create custom hooks?

* Code reusability
* Cleaner components
* Separation of logic

---

### 3. Rules for custom hooks

* Name must start with `use`
* Call hooks at top level
* Don’t call conditionally

---

### 4. Can custom hooks use other hooks?

✅ Yes. Custom hooks can use any React hook.

---

### 5. Real-life use cases

* API fetching
* Authentication
* Form handling
* Online/offline status

---

# 📘 EPISODE 16 – Reconciliation & Virtual DOM

### 1. What is Virtual DOM?

A lightweight **JavaScript representation of the real DOM**.

---

### 2. How React updates UI efficiently?

1. Updates Virtual DOM
2. Compares with previous version
3. Updates only changed nodes

---

### 3. What is reconciliation?

The process of syncing Virtual DOM with Real DOM.

---

### 4. What is diffing algorithm?

Algorithm React uses to find **minimal DOM changes**.

---

### 5. Why keys are important?

Keys help React identify which elements changed.

---

### 6. Problems with index as key

* Incorrect re-renders
* State mismatch
* Poor performance

---

# 📘 EPISODE 17 – Lifecycle Methods

### 1. What are lifecycle methods?

Methods that run at different phases of a component’s life.

---

### 2. Lifecycle phases

**Mounting**

* constructor
* render
* componentDidMount

**Updating**

* render
* componentDidUpdate

**Unmounting**

* componentWillUnmount

---

### 3. `componentDidMount` vs `useEffect`

| componentDidMount | useEffect       |
| ----------------- | --------------- |
| Class only        | Function only   |
| Runs once         | Depends on deps |

---

### 4. Cleanup function in `useEffect`

Used to clean side effects.

```js
useEffect(() => {
  return () => cleanup();
}, []);
```

---

### 5. When cleanup runs?

* Before re-run of effect
* On component unmount

---

### 6. Complete lifecycle vs `useEffect`

`useEffect` can replace **all lifecycle methods** using dependencies.

---

# 📘 EPISODE 18 – Higher Order Components (HOC)

### 1. What is HOC?

A function that takes a component and returns a new component.

```js
const Enhanced = HOC(Original);
```

---

### 2. Why use HOC?

* Code reuse
* Add common behavior

---

### 3. Difference between HOC and hooks

| HOC               | Hooks           |
| ----------------- | --------------- |
| Wrapper component | Function logic  |
| Older pattern     | Modern approach |

---

### 4. How props are passed in HOC?

Props are forwarded using spread operator.

```js
<WrappedComponent {...props} />
```

---

### 5. Real-world use cases

* Authentication
* Logging
* Authorization

---

### 6. Problems with HOC

* Wrapper hell
* Hard to debug
* Prop collisions

---

# 📘 EPISODE 19 – Controlled vs Uncontrolled

### 1. What is controlled component?

Form input controlled by React state.

---

### 2. What is uncontrolled component?

Form input controlled by DOM using refs.

---

### 3. Difference

| Controlled  | Uncontrolled |
| ----------- | ------------ |
| React state | DOM state    |
| Predictable | Less control |

---

### 4. What is lifting state up?

Moving shared state to common parent.

---

### 5. Why parent controls child?

To maintain **single source of truth**.

---

### 6. Data layer vs UI layer

* **Data layer:** state, logic
* **UI layer:** JSX, styling

---
---

# 📘 EPISODE 20 – Context API

### 1. What is props drilling?

Passing props through multiple intermediate components just to reach a deeply nested child.

---

### 2. Why Context API?

To **avoid props drilling** and share global data (theme, auth, user) across the component tree.

---

### 3. What is `createContext`?

Creates a Context object.

```js
const UserContext = React.createContext();
```

---

### 4. What is Provider?

A component that **supplies data** to its child components.

```jsx
<UserContext.Provider value={data}>
```

---

### 5. What is Consumer?

A component that **reads context data** (older pattern).

---

### 6. `useContext` vs Consumer

| useContext | Consumer    |
| ---------- | ----------- |
| Cleaner    | Verbose     |
| Hook-based | Render prop |
| Modern     | Legacy      |

---

### 7. When NOT to use Context API?

* Frequently changing data
* High-performance critical updates
* Complex state logic

---

### 8. Context vs Redux

| Context       | Redux     |
| ------------- | --------- |
| Simple        | Scalable  |
| Built-in      | External  |
| No devtools   | DevTools  |
| Not optimized | Optimized |

---

# 📘 EPISODE 21 – Redux Toolkit 🔥

### 1. What is Redux?

A **predictable state management library** with a single global store.

---

### 2. Redux vs Context API

| Redux        | Context       |
| ------------ | ------------- |
| Global state | Data sharing  |
| Middleware   | No middleware |
| Scalable     | Limited       |

---

### 3. What is Store?

Central object that holds the **entire application state**.

---

### 4. What is Slice?

A logical unit containing:

* initialState
* reducers
* actions

---

### 5. What is Reducer?

A function that updates state based on action.

---

### 6. What is Action?

A plain object describing **what happened**.

```js
{ type: "addItem", payload: data }
```

---

### 7. What is Dispatch?

A function used to send actions to the store.

---

### 8. What is Selector?

A function to **read data** from the store.

---

### 9. Redux Toolkit advantages

* Less boilerplate
* Built-in Immer
* DevTools enabled
* Best practices by default

---

### 10. Why reducers look mutable?

Because Redux Toolkit uses **Immer** internally.

---

### 11. What is Immer?

A library that allows writing immutable updates using mutable syntax.

---

### 12. Redux data flow

```
UI → dispatch(action)
→ reducer → store updates
→ UI re-renders
```

---

### 13. Redux DevTools

Browser tool to:

* Inspect state
* Time-travel debugging
* Track actions

---

### 14. Redux vs Zustand

| Redux            | Zustand     |
| ---------------- | ----------- |
| Boilerplate      | Minimal     |
| Enterprise-ready | Lightweight |
| Strict pattern   | Flexible    |

---

### 15. When NOT to use Redux?

* Small apps
* Simple state
* Local component state

---

# 📘 EPISODE 22 – useMemo & useRef

## useMemo

### 1. What is `useMemo`?

Caches **computed values** to avoid expensive recalculations.

---

### 2. `useMemo` vs `useCallback`

| useMemo        | useCallback       |
| -------------- | ----------------- |
| Memoizes value | Memoizes function |

---

### 3. When to use `useMemo`?

* Expensive calculations
* Performance issues

---

### 4. What problem does it solve?

Unnecessary re-execution during re-renders.

---

## useRef

### 5. What is `useRef`?

Returns a mutable object that persists across renders.

---

### 6. `useRef` vs `useState`

| useRef       | useState  |
| ------------ | --------- |
| No re-render | Re-render |
| Mutable      | Immutable |

---

### 7. Why `useRef` doesn’t cause re-render?

Updating `.current` doesn’t trigger React’s render cycle.

---

### 8. DOM access using `useRef`

Used to directly access DOM nodes.

```js
inputRef.current.focus();
```

---

### 9. Real-life use cases

* Auto focus
* Timers
* Previous values
* File input click

---

# 📘 EPISODE 23 – Forms & Zod

### 1. Controlled form inputs

Inputs controlled by React state using `value` + `onChange`.

---

### 2. Handling multiple inputs with one state

Using a single object state and `name` attribute.

---

### 3. Why `event.preventDefault()`?

Prevents page refresh on form submit.

---

### 4. What is Zod?

A **schema-based validation library** for JavaScript/TypeScript.

---

### 5. Why Zod over manual validation?

* Cleaner
* Reusable
* Fewer bugs
* Type-safe

---

### 6. What is schema validation?

Validating data against a predefined structure.

---

### 7. What is `safeParse`?

Safely validates data without throwing errors.

---

### 8. How to show validation errors?

Extract errors and conditionally render messages in UI.

---

### 9. Zod vs Yup

| Zod              | Yup         |
| ---------------- | ----------- |
| TypeScript-first | JS-first    |
| Strict typing    | Less strict |
| Faster adoption  | Older       |

---



