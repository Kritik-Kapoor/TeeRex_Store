import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { FilterReducer, productReducer } from "../reducers/Reducers";

export const Items = createContext();

const API =
  "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";

export const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, {
    products: [],
  });

  const [filterState, filterDispatch] = useReducer(FilterReducer, {
    searchQuery: "",
    pricefilter: false,
    colourfilter: false,
    genderfilter: false,
    typefilter: false,
  });

  const getProducts = async (url) => {
    const res = await axios.get(url);
    const products = await res.data;
    dispatch({ type: "SET_PRODUCTS", payload: products });
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <Items.Provider value={{ ...state, filterState, filterDispatch }}>
      {children}
    </Items.Provider>
  );
};

export const ProdState = () => {
  return useContext(Items);
};
