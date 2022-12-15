import React from "react";
import { ListGroup, Image, Row, Col, Form, Button } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";
import "./Cart.css";

const CartItem = ({ prod }) => {
  const { dispatch } = useCartContext();

  return (
    <div>
      <ListGroup.Item style={{ border: "none" }} id="listGroup">
        <Row id="row">
          <Col md={2} id="col_1">
            <Image
              src={prod.imageURL}
              alt={prod.name}
              fluid
              rounded
              id="item-img"
            />
          </Col>
          <Col md={2} id="col_2">
            <p>{prod.name}</p>
            <p>Rs {prod.price}</p>
          </Col>
          <Col md={2} style={{ width: "auto" }}>
            <Form.Control
              id="qty-box"
              as="select"
              defaultValue={prod.qty}
              onChange={(e) =>
                dispatch({
                  type: "CHANGE_CART_QTY",
                  payload: {
                    id: prod.id,
                    qty: e.target.value,
                  },
                })
              }
            >
              {[...Array(prod.quantity).keys()].map((x) => (
                <option key={x + 1}>{x + 1}</option>
              ))}
            </Form.Control>
          </Col>
          <Col md={2} id="col_3">
            <Button
              variant="danger"
              type="button"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              Delete
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
    </div>
  );
};

export default CartItem;
