import { configureStore } from "@reduxjs/toolkit";
// import movieSlice from "./data/movieSlice";
import { apiSlice } from "./services/apiSlice";
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    // movies: movieSlice.reducer
    // instead we used context api, however 
    // I would prefer to use redux here for simplicity
    // Just to show off the power of context api I did not use redux
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
});
