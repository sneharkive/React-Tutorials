# 📘 Episode 23 – Form Handling & Validation with Zod

## 1. Goal of Form Handling

Forms are used to:

1. Capture user input (email, password, etc.)
2. Validate data before sending it to the backend

---

## 2. Managing Form State

### ❌ Approach 1: Individual States (Not Scalable)

```js
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
```

**Problems**

* Too many states for large forms
* Hard to maintain and extend

---

### ✅ Approach 2: Single Object State (Best Practice)

```js
const [formData, setFormData] = useState({
  email: "",
  password: ""
});
```

#### Generic Change Handler

```js
const changeHandler = (e) => {
  setFormData(prev => ({
    ...prev,
    [e.target.name]: e.target.value
  }));
};
```

🔑 **Important Rules**

* `name` attribute must match object key
* Spread operator preserves previous values
* Functional update prevents stale state bugs

---

## 3. Form Submission

```js
const submitHandler = (e) => {
  e.preventDefault();
};
```

✅ `onSubmit` is preferred over `onClick`
❌ Without `preventDefault()`, page reloads and state is lost

---

## 4. Validation with Zod

### Defining Schema

```js
const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" })
});
```

---

### Validating Data

```js
const result = LoginSchema.safeParse(formData);
```

* `result.success === true` → valid data
* `result.success === false` → validation failed

✅ `safeParse` is preferred because it **never crashes the app**

---

## 5. Error Handling & Display

### Storing Errors

```js
const [error, setError] = useState({});
```

```js
if (!result.success) {
  setError(result.error.formErrors.fieldErrors);
}
```

### Displaying Errors

```jsx
{error.email && <span className="text-red-500">{error.email[0]}</span>}
{error.password && <span className="text-red-500">{error.password[0]}</span>}
```

📌 Errors are **arrays**, so use `[0]`

---

## ✅ Final Workflow Summary

1. Use **single object state** for form data
2. Use **generic change handler**
3. Prevent default form submission
4. Define validation rules using **Zod schema**
5. Validate using **safeParse**
6. Store and conditionally render errors

---

## 🧠 Interview Gold Lines (Remember These)

* “Controlled components keep UI and state in sync”
* “Single object state scales better for large forms”
* “Zod provides schema-based validation instead of manual if-else”
* “safeParse avoids runtime crashes”
* “Errors are rendered conditionally for better UX”

---
