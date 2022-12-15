import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductContext } from "./context/Context";
import { CartProvider } from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductContext>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductContext>
  </React.StrictMode>
);
