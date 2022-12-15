import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import "./Cart.css";

import { useCartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const CartPage = () => {
  const { cart } = useCartContext();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, cur) => acc + Number(cur.price) * cur.qty, 0));
  }, [cart]);

  return (
    <div className="cartPage">
      <h4>Shopping Cart</h4>
      <div className="cartContainer">
        {cart.length > 0 ? (
          <ListGroup>
            {cart.map((prod) => {
              return <CartItem key={prod.id} prod={prod} />;
            })}
          </ListGroup>
        ) : (
          <h4>
            !! Cart is Empty !! Go Back to the store by clicking on the "
            <span>TeeRex Store</span>" or "<span>Products</span>" above !!
          </h4>
        )}
      </div>
      <span className="subtotalContainer">
        <span id="total-amount">Total amount </span>
        <span>Rs. {total}</span>
      </span>
    </div>
  );
};

export default CartPage;
