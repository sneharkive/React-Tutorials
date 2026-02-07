import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Error from "./components/Error";
import KidCard from "./components/KidCard";
import ProductCard from './components/ProductCard';
import ProductDetails from './components/ProductDetails';
import About from "./components/About";

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <Error />,
//   },
//   {
//     path: "/kids",
//     element: <KidCard />,
//   },
// ]);


// to use outlet we have to nest the routes like below
// to get Navbar on every page using outlet

const appRouter = createBrowserRouter([{
  path: "/",
  element: <App />,
  errorElement: <Error />,
  children: [
    { path: "/", element: <ProductCard /> },
    // { path: "/product", element: <ProductCard /> },
    // { path: "/men", element: <Men /> },
    { path: "/kids", element: <KidCard /> },
    { path: "/about", element: <About /> },
    { path: "/product/:productId", element: <ProductDetails /> },

  ],
}]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
);
