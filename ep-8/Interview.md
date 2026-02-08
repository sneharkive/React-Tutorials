# ✅ React Interview Answers (Episode 8 → 16)

---

## 🧭 Routing & Dynamic Routing

**1. What is routing in React?**
Routing decides **which component to show for which URL**.

**2. What is React Router?**
A library that enables **client-side routing** in React apps.

**3. `<a>` vs `<Link>`?**
`<a>` reloads page ❌
`<Link>` does client-side navigation ✅

**4. What is dynamic routing?**
Routes that accept **dynamic values** (e.g. product ID).

**5. What does `:id` mean?**
It defines a **route parameter**.

**6. How does `/product/:productId` work?**
Matches any `/product/123`, `/product/45`, etc.

**7. What is `useParams()`?**
Hook to **read route parameters**.

**8. What does `useParams()` return?**
An **object of URL params**.

**9. How do you fetch data using params?**
Use param in API URL inside `useEffect`.

**10. Why not separate pages for each product?**
Not scalable, thousands of files ❌

**11. Invalid/missing route params?**
Show error UI or redirect.

**12. Why is `key` important?**
Helps React **identify list items efficiently**.

**13. Where should key be placed?**
On the **parent element returned by map**.

**14. If keys are not unique?**
Wrong re-renders, bugs.

**15. How does React use keys?**
For **diffing and reconciliation**.

**16. Programmatic navigation?**
Using `useNavigate()`.

---

## ⚛️ Functional vs Class Components

**17. What is a Class Component?**
Component written using **JavaScript class**.

**18. Why learn class components?**
Legacy code + interviews.

**19. Functional vs Class?**
Hooks vs lifecycle methods.

**20. Why hooks not in class?**
Hooks rely on **function execution order**.

**21. What is `render()`?**
Method that returns JSX.

**22. Passing props to class?**
Via JSX `<Comp prop={value} />`

**23. Access props in class?**
Using `this.props`.

**24. What is `this.props`?**
Object containing passed props.

**25. Why `this` needed?**
Refers to **class instance**.

**26. What is state?**
Component’s **internal data**.

**27. State init in class?**
Inside constructor.

**28. Why state is object?**
React merges updates.

**29. Multiple state variables?**
Yes, as object keys.

**30. Why not modify `this.state` directly?**
No re-render ❌

---

## 🧠 `super(props)`

**31. What is `super(props)`?**
Calls parent constructor.

**32. Why mandatory?**
To access `this`.

**33. Without props in super?**
`this.props` undefined in constructor.

**34. Access props before super?**
No ❌

**35. React-specific?**
No, **JavaScript inheritance**.

**36. `super()` vs `super(props)`?**
Only `super(props)` passes props.

---

## 🔄 Lifecycle Basics

**37. Lifecycle methods?**
Methods triggered during component life.

**38. Three phases?**
Mounting, Updating, Unmounting.

**39. Mounting phase?**
Component creation.

**40. Updating phase?**
State/props change.

**41. Unmounting phase?**
Component removal.

**42. Mount order?**
Constructor → Render → componentDidMount

**43. `componentDidMount()`?**
Runs after first render.

**44. Why API calls here?**
UI already painted.

**45. API in constructor?**
Bad practice ❌

**46. API in render?**
Side effects ❌

**47. When render runs?**
Every state/prop change.

**48. Multiple renders?**
Yes.

---

## 👨‍👦 Parent–Child Lifecycle

**49. Parent & one child order?**
Parent ctor → render → child ctor → render → child mount → parent mount

**50. Parent mount before child?**
No ❌

**51. Why child first?**
Parent waits for children.

**52. Multiple children?**
Render phase batched.

**53. Two sibling order?**
All renders → all mounts.

**54. Why batching?**
Performance.

**55. React Fiber?**
Reconciliation engine.

**56. Render vs Commit?**
Render = calculation
Commit = DOM update

**57. Render phase methods?**
Constructor, render

**58. Commit phase methods?**
componentDidMount, componentDidUpdate

---

## 🔁 Updating Phase

**59. What triggers re-render?**
State/props change.

**60. `componentDidUpdate()`?**
Runs after update.

**61. When does it run?**
After render.

**62. Mount vs Update?**
Mount = once
Update = many times

**63. Infinite loop risk?**
Calling setState inside update.

**64. Prevent loop?**
Compare `prevState`.

**65. `prevProps` & `prevState`?**
Previous values.

**66. Compare state?**
`this.state.x !== prevState.x`

**67. Use case?**
Reacting to specific changes.

---

## 🧹 Unmounting & Cleanup

**68. `componentWillUnmount()`?**
Cleanup before destroy.

**69. When runs?**
Before component removal.

**70. Why cleanup important?**
Avoid memory leaks.

**71. Memory leak?**
Unused background tasks.

**72. Cleanup examples?**
Timers, listeners, subscriptions.

**73. Without cleanup?**
Performance issues.

**74. `setInterval` problem?**
Keeps running.

**75. Why clear timers?**
Prevent stacking.

**76. Cancel API calls?**
Yes (AbortController).

**77. State update after unmount?**
Error/warning.

---

## ⚛️ Hooks vs Lifecycle

**78. `componentDidMount` = `useEffect`?**
Only with `[]`.

**79. Mount using hooks?**
`useEffect(() => {}, [])`

**80. Update using hooks?**
Dependency array.

**81. Unmount using hooks?**
Return cleanup function.

**82. Why `useEffect` runs often?**
Depends on dependencies.

**83. Dependency array?**
Controls effect execution.

**84. Empty array?**
Runs once.

**85. No array?**
Runs every render.

**86. With values?**
Runs on change.

---

## 🧩 Cleanup in Hooks

**87. Cleanup in hooks?**
Return function.

**88. Why return function?**
React calls it on cleanup.

**89. When executed?**
Before unmount / before re-run.

**90. Cleanup vs class unmount?**
Same purpose.

**91. No cleanup?**
Leaks.

**92. Cleanup multiple times?**
Yes.

**93. Cleanup before re-render?**
Yes.

---

## 🧠 Design & Optimization

**94. SRP?**
One responsibility per component.

**95. Why SRP?**
Maintainability.

**96. SRP violation problems?**
Hard testing, tight coupling.

**97. Custom Hook?**
Reusable logic function.

**98. Why `use` prefix?**
Hook rules enforcement.

**99. Hooks inside hooks?**
Yes.

**100. Hook vs component?**
Hooks return logic, not JSX.

**101. Why reusable?**
Shared logic.

**102. Testing benefit?**
Isolated logic.

---

## 🚀 Performance

**103. Bundling?**
Combining files.

**104. Code splitting?**
Breaking bundle.

**105. Lazy loading?**
Load on demand.

**106. Normal vs lazy import?**
Immediate vs deferred.

**107. Lazy loading benefit?**
Faster initial load.

**108. `React.lazy()`?**
Dynamic import.

**109. Suspense?**
Fallback UI wrapper.

**110. Why fallback required?**
UI gap handling.

**111. Without Suspense?**
Error.

**112. Multiple components?**
Yes.

**113. When lazy load?**
Large/rare pages.

**114. SEO impact?**
Needs SSR.

---

## 🔥 Advanced

**115. Render first, fetch later?**
Perceived speed.

**116. Render pure?**
Predictability.

**117. Commit expensive?**
DOM operations.

**118. Why functional preferred?**
Cleaner, simpler.

**119. Class deprecated?**
No, but less used.

**120. When class used?**
Legacy code.

**121. Async lifecycle methods?**
Yes.

**122. Why no side effects in render?**
Infinite loops.

**123. Unnecessary re-renders?**
Bad state design.

**124. DOM optimization?**
Virtual DOM diffing.

**125. Reconciliation?**
Process of updating DOM efficiently.

---

