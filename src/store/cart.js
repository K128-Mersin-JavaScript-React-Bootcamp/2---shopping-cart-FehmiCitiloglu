import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],

  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload.item;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity = state.totalQuantity + action.payload.productCount;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          totalPrice: newItem.price * action.payload.productCount,
          quantity: action.payload.productCount,
          name: newItem.title,
          image: newItem.image,
        });
      } else {
        existingItem.quantity =
          existingItem.quantity + action.payload.productCount;
        existingItem.totalPrice =
          existingItem.totalPrice + newItem.price * action.payload.productCount;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (state.totalQuantity !== 0) {
        state.totalQuantity--;
      }
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        if (existingItem.totalPrice !== 0) {
          existingItem.totalPrice =
            existingItem.totalPrice - existingItem.price;
        } else {
          existingItem.totalPrice = 0;
        }
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
