import { createSlice } from "@reduxjs/toolkit";
import { IProductSliceState } from "../../utility/model/product.model";

const initialState: IProductSliceState = {
  products: [],
  isLoading:false
};

const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    fetchProducts: (state, action) => {
      state.products = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
  },
});

export const {fetchProducts} = productSlice.actions
export const productReducer= productSlice.reducer