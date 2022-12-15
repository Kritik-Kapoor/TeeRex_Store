import { createContext, useContext, useReducer } from "react";
import CartReducer from "../reducers/CartReducer";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, {
    cart: [],
  });
  const addToCart = (imageURL, id, name, price, quantity) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { imageURL, id, name, price, quantity },
    });
  };

  return (
    <CartContext.Provider value={{ ...state, dispatch, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
