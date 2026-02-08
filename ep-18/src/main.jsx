import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Error from "./components/Error";
import KidCard from "./components/KidCard";
import ProductCard from "./components/ProductCard";
import ProductDetails from "./components/ProductDetails";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <ProductCard /> },
      { path: "/kids", element: <KidCard /> },
      { path: "/product/:productId", element: <ProductDetails /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
);
