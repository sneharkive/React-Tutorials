## 📘 Episode 18 — Higher Order Components

### 🔹 What is a Higher Order Component (HOC)?

* A **Higher Order Component** is a **function**
* It **takes a component as input**
* It **returns a new component**
* Used to **add extra features** without modifying the original component

```js
const EnhancedComponent = HOC(OriginalComponent);
```

📌 Inspired by **Higher Order Functions** in JavaScript

---

### 🔹 Why Use HOCs?

* Reuse logic
* Keep components clean
* Follow **Open / Closed Principle**

  * Open for extension
  * Closed for modification

---

### 🔹 Use Case in Episode 18: “Best Seller” Badge

**Requirement:**

* If product rating ≥ 4 → show “Best Seller” badge
* Otherwise → show normal product card
* ❌ Do NOT add `if-else` inside Product component

✅ Solution: Wrap Product using an HOC

---

### 🔹 Creating the HOC

```js
const withBestSeller = (Product) => {
  return (props) => {
    return (
      <div className="relative">
        <span className="absolute bg-black text-white px-2 py-1">
          Best Seller
        </span>
        <Product {...props} />
      </div>
    );
  };
};
```

#### Key Points:

* HOC **returns a new component**
* New component **receives props**
* `{...props}` forwards data to original component
* Extra UI (badge) is layered on top

---

### 🔹 Why `{...props}` Is Mandatory

Without it:

* Product won’t receive `title`, `price`, `image`, etc.
* Component will break

✅ Correct pattern:

```js
<Product {...props} />
```

---

### 🔹 Using HOC in Parent Component

```js
const BestSellerProduct = withBestSeller(Product);
```

Inside `.map()`:

```js
products.map((product) =>
  product.rating.rate >= 4 ? (
    <BestSellerProduct {...product} />
  ) : (
    <Product {...product} />
  )
);
```

---

### 🔹 Styling the Badge (Tailwind)

* `absolute` → overlay badge
* `bg-black text-white` → contrast
* Positioned above product image

---

## 🧠 Interview Notes (VERY Important)

### Common Questions:

**Q: What is an HOC?**
A: A function that takes a component and returns a new enhanced component.

**Q: Why use HOCs?**
A: Code reuse, separation of concerns, cleaner components.

**Q: Are HOCs used today?**
A: Less in new code, but heavily used in legacy code and libraries like Redux.

**Q: Alternatives to HOCs?**

* Custom Hooks
* Render Props
* Component Composition

---

## ✅ Final Verdict

✔ Your understanding is **correct**
✔ Explanation matches **industry & interview expectations**
✔ Minor terminology fixes applied
✔ Notes are **README-ready**

When you’re ready 👉 **send Episode 19 transcript**
We’ll keep building this like a **solid React handbook** 🚀
