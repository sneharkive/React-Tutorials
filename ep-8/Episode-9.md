# Episode 9 — Conditional Rendering, Shimmer UI & Search Functionality

## 1. Conditional Rendering (Shimmer / Skeleton UI)

### Problem

* On page reload, API data takes time
* `productList` is initially empty
* User sees a **blank white screen**

### Solution: Shimmer (Skeleton) UI

* Instead of loaders/spinners, show **placeholder cards**
* Mimics real content layout (better UX)

### Implementation

* Create a `Skeleton` component using styled `div`s
* Render logic:

  ```js
  if (productList.length === 0) {
    return <Skeleton />;
  }
  ```

### JSX Best Practice (Ternary)

```js
{productList.length === 0 ? <Skeleton /> : <ProductList />}
```

### Key Takeaway

> Conditional rendering improves UX by showing meaningful placeholders while data loads.

---

Perfect — thanks for the more detailed breakdown 👍
Below is a **corrected + expanded Episode 9 README section**, aligned **exactly** with the explanation you just gave.
This version is **clean, precise, interview-safe**, and **replaces the earlier Episode 9 notes**.

---

# Search Feature (Detailed Implementation)

## 1. UI Setup & State Initialization

### UI Elements

* Text input field (`<input />`)
* “Search” button

### State for Search Input

```js
const [searchText, setSearchText] = useState("");
```

### Purpose

* `searchText` stores what the user types
* State updates trigger re-render so UI stays in sync

---

## 2. Two-Way Data Binding (`onChange`)

### Problem

* React does **not** automatically know what the user types
* Input field must be explicitly connected to state

### Solution: Controlled Component

```js
<input
  value={searchText}
  onChange={(e) => setSearchText(e.target.value)}
/>
```

### What Happens Internally

1. User types a character
2. `onChange` fires
3. `setSearchText(e.target.value)` updates state
4. Component re-renders
5. Input displays updated value

### Key Concept

> The input field is a **controlled component** — React fully controls its value.

---

## 3. Search Trigger (`onClick` Event)

### Button Handler

* Search logic runs only when the **Search button** is clicked
* Prevents unnecessary filtering on every keystroke

```js
<button onClick={handleSearch}>Search</button>
```

### Filtering Logic

```js
const filtered = productList.filter((product) =>
  product.title.includes(searchText)
);
```

---

## 4. Critical Bug: Filtering the Same State

### What Went Wrong

* Filtering was done directly on `productList`
* Original API data was overwritten

### Bug Scenario

1. Search “Jacket” → 4 results
2. Search “Rain” → searches inside those 4
3. Result = 0 (even if Rain products exist)

### Root Cause

> Mutating the same state that is being used as the data source.

---

## 5. Correct Architecture: Master vs Display State

### State Design

```js
const [productList, setProductList] = useState([]);
const [filteredProduct, setFilteredProduct] = useState([]);
```

### Responsibilities

| State             | Role                                            |
| ----------------- | ----------------------------------------------- |
| `productList`   | Master data (full API response, never filtered) |
| `filteredProduct` | UI data (filtered results shown on screen)      |

---

## 6. Correct Search Workflow

### Initialization (API Call)

```js
setProductList(data);
setFilteredProduct(data);
```

### Rendering

```js
filteredProduct.map((product) => <ProductCard />)
```

### Search Logic (Correct)

```js
const filtered = productList.filter((product) =>
  product.title.toLowerCase().includes(searchText.toLowerCase())
);

setFilteredProduct(filtered);
```

### Why This Works

* Master data is preserved
* Search always runs on full dataset
* Multiple searches work correctly

---

## 7. Case-Insensitive Search

### Problem

* `"jacket"` ≠ `"Jacket"`

### Fix

```js
product.title.toLowerCase().includes(searchText.toLowerCase())
```

### Result

* Search works regardless of capitalization

---

## Final Key Takeaways (Episode 9)

* Inputs should be **controlled components**
* Use `onChange` for two-way binding
* Never filter the same state repeatedly
* Always keep a **master copy of API data**
* Filter from master → update display state
* Normalize strings for reliable search

---

If you want, next I can:

* 🔍 Add **debounced search** (interview bonus)
* 🧠 Convert this into **1-minute interview answers**
* 📦 Refactor search into a **custom hook**

Just drop **Episode 10** when ready 🚀

## Final Takeaways (Interview-Safe)

* Conditional rendering prevents blank screens
* Shimmer UI provides better perceived performance
* Inputs should be **controlled components**
* Never filter already-filtered state
* Maintain **master + derived state**
* Always normalize strings for search

---

