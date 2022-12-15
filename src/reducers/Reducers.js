export const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export const FilterReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload };
    case "FILTER_BY_COLOUR":
      return { ...state, colourfilter: action.payload };
    case "FILTER_BY_GENDER":
      return { ...state, genderfilter: action.payload };
    case "FILTER_BY_PRICE":
      return { ...state, pricefilter: action.payload };
    case "FILTER_BY_TYPE":
      return { ...state, typefilter: action.payload };
    case "CLEAR_FILTERS":
      return {
        searchQuery: "",
        pricefilter: false,
        colourfilter: false,
        genderfilter: false,
        typefilter: false,
      };
    default:
      return state;
  }
};
