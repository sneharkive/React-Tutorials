# Episode 11 — Dynamic Routing & Product Details Page

---

## 1. What is Dynamic Routing?

Dynamic Routing allows **one component** to handle **multiple dynamic URLs**.

**Real-world example**

* `/product/1`
* `/product/25`
* `/product/987`

Instead of creating thousands of pages, React uses:

* **One route**
* **One component**
* URL parameter decides **what data to load**

---

## 2. Dynamic Route Configuration

Dynamic routes are defined using a **colon (`:`)** in the path.

```js
{
  path: "/product/:productId",
  element: <ProductDetails />
}
```

### Key Points

* `:productId` is a **route parameter**
* Any value after `/product/` will match this route
* One route handles infinite products

---

## 3. `ProductDetails` Component Setup

A new component is created to show **single product details**.

```js
const [singleProduct, setSingleProduct] = useState(null);
```

### Why `null`?

* Data is not available immediately
* API call happens **after initial render**

---

## 4. Extracting Route Params with `useParams`

To know **which product** was clicked, React Router provides `useParams`.

```js
const { productId } = useParams();
```

### What happens?

* URL: `/product/5`
* `productId === "5"`

This ID is now usable inside the component.

---

## 5. Fetching Single Product Data

The API call depends on the **dynamic ID**.

```js
useEffect(() => {
  fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(res => res.json())
    .then(data => setSingleProduct(data));
}, []);
```

### Flow

1. Component renders
2. `useEffect` runs
3. API fetches product by ID
4. State updates
5. Component re-renders with data

---

## 6. Handling `null` State (Very Important)

### The Problem

```js
singleProduct.image ❌
```

Crashes because `singleProduct === null` initially.

### The Solution — Conditional Rendering (Early Return)

```js
if (singleProduct === null) {
  return <Shimmer />;
}
```

### Why this works

* Prevents accessing data before it exists
* Component renders UI **only when data is ready**

---

## 7. Rendering Product Details


Once data is available:

```js
const { image, title, description, price } = singleProduct;
```

Then display:

* Product Image
* Title
* Description
* Price

This creates a **fully dynamic product page**.

---

## 8. Linking Product Cards to Details Page

Each product card must navigate to its own details page.

```js
<Link to={`/product/${product.id}`} key={product.id}>
  <ProductCard product={product} />
</Link>
```

### Important Rules

* `to` prop is **dynamic**
* URL contains product ID
* `key` must be on the **outermost element**
* Since `<Link>` wraps the card, `key` goes on `<Link>`

---

## 9. Complete User Flow (Episode 11)

1. User clicks a product
2. URL changes to `/product/{id}`
3. React Router matches `/product/:productId`
4. `useParams` extracts ID
5. API fetches single product
6. UI renders product details

---

## Key Takeaways (Episode 11)

* Dynamic routing uses **route params**
* `useParams` reads values from URL
* One component handles many products
* Conditional rendering prevents crashes
* `<Link>` enables SPA navigation
* `key` must be on the parent element

---

