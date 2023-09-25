import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./components/Home/Home";
import ProductPage from "./components/ProductPage/ProductPage";
import Item from "./components/Item/Item";
import "./style.css";

const App = () => {
  return (  <><header>
        <div className="header-text">XXXMuck</div>
      </header>
    <div className="container">
    
      <main>
        <Outlet />
      </main>
    </div>
    <footer>
        <p> © Tereza Ettlerová</p>
      </footer></>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h3>Upss.....404 - MUCK</h3>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Item />,
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
      },
    ],
  },
]);

createRoot(document.querySelector("#app")).render(
  <RouterProvider router={router} />
);
