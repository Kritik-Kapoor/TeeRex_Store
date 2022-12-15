import React from "react";
import {
  Navbar,
  Container,
  FormControl,
  Badge,
  Nav,
  Button,
} from "react-bootstrap";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { ProdState } from "../context/Context";

const Header = () => {
  const { cart } = useCartContext();
  const { filterDispatch } = ProdState();
  return (
    <Navbar bg="dark" variant="dark" id="main-nav">
      <Container>
        <Navbar.Brand>
          <Link to="/">TeeRex Store</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search a Product"
            className="m-auto"
            onChange={(e) => {
              filterDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              });
            }}
          />
        </Navbar.Text>
        <Nav>
          <Navbar.Text id="nav-text">
            <Link to="/">Products</Link>
          </Navbar.Text>
          {cart.length > 0 ? (
            <Link to="/Cart">
              <Button>
                <BsCart3 color="white" fontSize="25px" />
                <Badge bg="none">{cart.length}</Badge>
              </Button>
            </Link>
          ) : (
            <Button disabled>
              <BsCart3 color="white" fontSize="25px" />
              <Badge bg="none">{cart.length}</Badge>
            </Button>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
