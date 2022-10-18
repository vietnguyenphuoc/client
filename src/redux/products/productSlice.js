import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: null,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, { payload }) => {
      state.products = payload;
    },
  },
});

export const { addProducts } = productSlice.actions;
export const getProducts = (state) => state.products;
export default productSlice.reducer;
