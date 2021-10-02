// import { createContext, useState } from "react";
// import useFetch from '../hooks/use-fetch';
import { createSlice, configureStore } from "@reduxjs/toolkit";

// const ProductContext = createContext({
//   products: [],
//   getProduct: (productId) => {},
// });

// export const ProductContextProvider = (props) => {
//   const [products, setProducts] = useState([]);
//     const [isLoading, error, sendRequest] = useFetch()

//     const getProduct =async (productId) => {
//         const requestObject ={
//             url: "https://api.npoint.io/3a5ea76fb9a0acf96d50/products"
//         }
//         sendRequest(requestObject)
//     }

//   return (
//     <ProductContext.Provider
//       value={{
//         products: products,
//         getProduct:
//       }}
//     >
//       {props.children}
//     </ProductContext.Provider>
//   );
// };

const initialState = {
  products: [],
  showedProduct: 0,
  getItem: (productId) => {},
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts() {},
  },
});

const store = configureStore({
  reducer: { products: productSlice.reduce },
});
