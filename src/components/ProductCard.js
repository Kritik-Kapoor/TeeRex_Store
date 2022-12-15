import React from "react";
import { Button, Card } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";

const ProductCard = ({ prod }) => {
  const { addToCart, cart, dispatch } = useCartContext();
  const { imageURL, id, name, price, quantity } = prod;

  return (
    <div className="product">
      <Card style={{ height: "100%" }}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Img variant="top" src={imageURL} />
          <span>
            <Card.Text>Rs.{price}</Card.Text>
            {cart.some((p) => p.id === id) ? (
              <Button
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: prod,
                  });
                }}
                variant="danger"
              >
                Remove from Cart
              </Button>
            ) : (
              <Button
                variant="primary"
                onClick={() => addToCart(imageURL, id, name, price, quantity)}
                disabled={!quantity}
              >
                {!quantity ? "Out of Stock" : "Add to Cart"}
              </Button>
            )}
          </span>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
