import { ProdState } from "../context/Context";

export const filteredProducts = () => {
  const {
    products,
    filterState: {
      searchQuery,
      pricefilter,
      colourfilter,
      genderfilter,
      typefilter,
    },
  } = ProdState();

  let newProducts = products;
  if (searchQuery) {
    newProducts = newProducts.filter(
      (prod) =>
        prod.name.toLowerCase().includes(searchQuery) ||
        prod.type.toLowerCase().includes(searchQuery) ||
        prod.color.toLowerCase().includes(searchQuery)
    );
  }
  if (colourfilter) {
    if (colourfilter === "red") {
      newProducts = newProducts.filter((prod) => prod.color === "Red");
    }
    if (colourfilter === "blue") {
      newProducts = newProducts.filter((prod) => prod.color === "Blue");
    }
    if (colourfilter === "green") {
      newProducts = newProducts.filter((prod) => prod.color === "Green");
    }
  }
  if (genderfilter) {
    if (genderfilter === "men") {
      newProducts = newProducts.filter((prod) => prod.gender === "Men");
    }
    if (genderfilter === "women") {
      newProducts = newProducts.filter((prod) => prod.gender === "Women");
    }
  }
  if (pricefilter) {
    if (pricefilter === "low") {
      newProducts = newProducts.filter((prod) => prod.price <= 250);
    }
    if (pricefilter === "mid") {
      newProducts = newProducts.filter(
        (prod) => prod.price > 250 && prod.price < 450
      );
    }
    if (pricefilter === "high") {
      newProducts = newProducts.filter((prod) => prod.price >= 450);
    }
  }
  if (typefilter) {
    if (typefilter === "polo") {
      newProducts = newProducts.filter((prod) => prod.type === "Polo");
    }
    if (typefilter === "hoodie") {
      newProducts = newProducts.filter((prod) => prod.type === "Hoodie");
    }
    if (typefilter === "basic") {
      newProducts = newProducts.filter((prod) => prod.type === "Basic");
    }
  }

  return newProducts;
};
