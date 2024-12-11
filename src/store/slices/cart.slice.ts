import { createSlice } from "@reduxjs/toolkit";
import { ICartSlice } from "../../utility/model/cart.model";
import { RootState } from "../store";

const initialState: ICartSlice = {
  cart: [],
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    addToCart: (state, action) => {
      const existing = state.cart.find((c) => c.id === action.payload.id);
      if (!existing) {
        state.cart = [...state.cart, { ...action.payload, quantity: 1 }];
      } else {
        state.cart = state.cart.map((c) =>
          c.id === action.payload.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
    },
    changeQuantity: (state, action) => {
      if (action.payload.quantity === 0) {
        state.cart = state.cart.filter((c) => c.id !== action.payload.id);
      } else {
        state.cart = state.cart.map((c) =>
          c.id === action.payload.id
            ? { ...c, quantity: action.payload.quantity }
            : c
        );
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload.id;
      state.cart = state.cart.filter((c) => c.id !== id);
    },
  },
});

export const getCart = (state:RootState) =>(state.cart.cart)
export const getIsCartOpen = (state:RootState) =>(state.cart.isCartOpen)

export const {
  setCart,
  toggleCart,
  addToCart,
  removeFromCart,
  changeQuantity,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
