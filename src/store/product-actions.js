import { productActions } from "./products";

export const fetchProductData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.npoint.io/3a5ea76fb9a0acf96d50/products/"
      );

      if (!response.ok) {
        throw new Error("Could not fetch product data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(productActions.getProducts(cartData));
    } catch (error) {
      console.log(error);
    }
  };
};
