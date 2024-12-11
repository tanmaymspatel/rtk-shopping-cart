import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./slices/product.slice";
import { commerceApi } from "../services/services";
import { cartReducer } from "./slices/cart.slice";

export const store = configureStore({
  reducer: {
    Products: productReducer,
    cart:cartReducer,
    [commerceApi.reducerPath] :commerceApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(commerceApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
