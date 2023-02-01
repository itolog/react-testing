import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import photoReducer from "./photo/photoSlice";

const store = configureStore({
  reducer: {
    photo: photoReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
