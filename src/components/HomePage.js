import React, { useState, useRef, useEffect } from "react";
import { FiFilter } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import ProductCard from "./ProductCard";
import Filter from "./Filter";
import "./Styles.css";
import { filteredProducts } from "./FilterQuery";
import { ProdState } from "../context/Context";
import { Button } from "react-bootstrap";

const HomePage = () => {
  const { filterDispatch } = ProdState();

  const [open, setOpen] = useState(false);

  let filterRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!filterRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="home">
      <div className="icons">
        <input
          className="search-txt"
          type="text"
          placeholder="Search for products..."
          onChange={(e) => {
            filterDispatch({
              type: "FILTER_BY_SEARCH",
              payload: e.target.value,
            });
          }}
        />
        <AiOutlineSearch id="search-icon" />
        <span className="filter-button-icons" ref={filterRef}>
          <Button id="filter-button" onClick={() => setOpen(!open)}>
            <FiFilter id="filter-icon" />
          </Button>
          <span className={`dropdown-menu ${open ? "active" : "inactive"}`}>
            <Filter />
          </span>
        </span>
      </div>
      <div className="filterContainer">
        <Filter />
      </div>
      <div className="prodContainer">
        {filteredProducts().map((prod) => {
          return <ProductCard key={prod.id} prod={prod} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
