import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../main-store/store";

export interface shareSliceType {
  toaster: boolean;
  loading: boolean;
}

const initialState: shareSliceType = {
  toaster: false,
  loading: false,
};

export const SharedSlice = createSlice({
  name: "SharedSlice",
  initialState: initialState,
  reducers: {
    showToast: (state: shareSliceType) => {
      state.toaster = true;
    },
    hideToast: (state: shareSliceType) => {
      state.toaster = false;
    },
    showLoading: (state: shareSliceType) => {
      state.loading = true;
    },
    hideLoading: (state: shareSliceType) => {
      state.loading = false;
    },
  },
  extraReducers: () => {},
});

export const getToast = (state: RootState) => state.SharedSlice.toaster;
export const getLoading = (state: RootState) => state.SharedSlice.loading;

export const { showToast, hideToast, showLoading, hideLoading } =
  SharedSlice.actions;

export default SharedSlice.reducer;
