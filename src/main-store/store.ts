import { configureStore } from "@reduxjs/toolkit";
import SharedSlice from "../redux/SharedSlice";
import ReviewRatingsSlice from "../redux/ReviewRatingsSlice";

export const store = configureStore({
  reducer: {
    SharedSlice: SharedSlice,
    ReviewRatingsSlice: ReviewRatingsSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
