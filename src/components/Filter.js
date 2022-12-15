import React from "react";
import { Button, Form } from "react-bootstrap";
import { ProdState } from "../context/Context";
import "./Filter.css";

const Filter = () => {
  const {
    filterState: { pricefilter, colourfilter, genderfilter, typefilter },
    filterDispatch,
  } = ProdState();

  return (
    <div className="filters">
      <div className="filter-type">
        <h4>Colour</h4>
        <span>
          <Form.Check
            label="Red"
            name="group1"
            type="checkbox"
            id={`inline-1`}
            onChange={(e) =>
              filterDispatch({
                type: "FILTER_BY_COLOUR",
                payload: "red",
              })
            }
            checked={colourfilter === "red" ? true : false}
          />
        </span>
        <span>
          <Form.Check
            label="Blue"
            name="group1"
            type="checkbox"
            id={`inline-2`}
            onChange={(e) =>
              filterDispatch({
                type: "FILTER_BY_COLOUR",
                payload: "blue",
              })
            }
            checked={colourfilter === "blue" ? true : false}
          />
        </span>
        <span>
          <Form.Check
            label="Green"
            name="group1"
            type="checkbox"
            id={`inline-3`}
            onChange={(e) =>
              filterDispatch({
                type: "FILTER_BY_COLOUR",
                payload: "green",
              })
            }
            checked={colourfilter === "green" ? true : false}
          />
        </span>
      </div>
      <div className="filter-type">
        <h4>Gender</h4>
        <span>
          <Form.Check
            label="Men"
            name="group2"
            type="checkbox"
            id={`inline-1`}
            onChange={(e) =>
              filterDispatch({
                type: "FILTER_BY_GENDER",
                payload: "men",
              })
            }
            checked={genderfilter === "men" ? true : false}
          />
        </span>
        <span>
          <Form.Check
            label="Women"
            name="group2"
            type="checkbox"
            id={`inline-2`}
            onChange={(e) =>
              filterDispatch({
                type: "FILTER_BY_GENDER",
                payload: "women",
              })
            }
            checked={genderfilter === "women" ? true : false}
          />
        </span>
      </div>
      <div className="filter-type">
        <h4>Price</h4>
        <span>
          <Form.Check
            label="0-Rs.250"
            name="group3"
            type="checkbox"
            id={`inline-1`}
            onChange={(e) =>
              filterDispatch({
                type: "FILTER_BY_PRICE",
                payload: "low",
              })
            }
            checked={pricefilter === "low" ? true : false}
          />
        </span>
        <span>
          <Form.Check
            label="Rs.251-450"
            name="group3"
            type="checkbox"
            id={`inline-2`}
            onChange={(e) =>
              filterDispatch({
                type: "FILTER_BY_PRICE",
                payload: "mid",
              })
            }
            checked={pricefilter === "mid" ? true : false}
          />
        </span>
        <span>
          <Form.Check
            label="Rs.450"
            name="group3"
            type="checkbox"
            id={`inline-3`}
            onChange={(e) =>
              filterDispatch({
                type: "FILTER_BY_PRICE",
                payload: "high",
              })
            }
            checked={pricefilter === "high" ? true : false}
          />
        </span>
      </div>
      <div className="filter-type">
        <h4>Type</h4>
        <span>
          <Form.Check
            label="Polo"
            name="group4"
            type="checkbox"
            id={`inline-1`}
            onChange={(e) =>
              filterDispatch({
                type: "FILTER_BY_TYPE",
                payload: "polo",
              })
            }
            checked={typefilter === "polo" ? true : false}
          />
        </span>
        <span>
          <Form.Check
            label="Hoodie"
            name="group4"
            type="checkbox"
            id={`inline-2`}
            onChange={(e) =>
              filterDispatch({
                type: "FILTER_BY_TYPE",
                payload: "hoodie",
              })
            }
            checked={typefilter === "hoodie" ? true : false}
          />
        </span>
        <span>
          <Form.Check
            label="Basic"
            name="group4"
            type="checkbox"
            id={`inline-3`}
            onChange={(e) =>
              filterDispatch({
                type: "FILTER_BY_TYPE",
                payload: "basic",
              })
            }
            checked={typefilter === "basic" ? true : false}
          />
        </span>
      </div>
      <Button
        variant="primary"
        onClick={() => {
          filterDispatch({
            type: "CLEAR_FILTERS",
          });
        }}
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filter;
