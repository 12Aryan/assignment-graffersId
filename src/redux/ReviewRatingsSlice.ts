import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../main-store/store";
import api from "../apis";
import { hideLoading, hideToast, showLoading, showToast } from "./SharedSlice";

export interface reviewRatingsType {
  companyList: Array<any>;
  companyData: any;
  ratingAvg: number;
}

export const FetchCompanyList = createAsyncThunk(
  "FetchCompanyList/get",
  async (_, { dispatch }) => {
    try {
      dispatch(showLoading());
      const response = await api.get("/company_list");
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      dispatch(showToast());
      dispatch(hideLoading());
      setTimeout(
        () => dispatch(hideToast()),

        4000
      );
      return error;
    }
  }
);

export const AddCompany = createAsyncThunk(
  "AddCompany/post",
  async (payload: any, { dispatch }) => {
    try {
      const response = await api.post("/company_list", payload);
      dispatch(FetchCompanyList());
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const FetchCompany = createAsyncThunk(
  "FetchCompany/get",
  async (id: string, { dispatch }) => {
    try {
      dispatch(showLoading());
      const response = await api.get(`/company_list/${id}`);
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      dispatch(showToast());
      dispatch(hideLoading());
      setTimeout(
        () => dispatch(hideToast()),

        4000
      );
      return error;
    }
  }
);

export const AddReview = createAsyncThunk(
  "AddReview/put",
  async ({ payload, id }: any, { dispatch }) => {
    try {
      const response = await api.put(`/company_list/${id}`, payload);
      dispatch(FetchCompany(id));
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const SearchCompany = createAsyncThunk(
  "SearchCompany/post",
  async ({ field, searchQuery }: any) => {
    try {
      const response = await api.get(`/company_list?${field}=${searchQuery}`);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

const initialState: reviewRatingsType = {
  companyList: [],
  companyData: null,
  ratingAvg: 0,
};

export const ReviewRatingsSlice = createSlice({
  name: "ReviewRatingsSlice",
  initialState: initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(FetchCompanyList.fulfilled, (state, action) => {
      state.companyList = action.payload;
    });
    builder.addCase(FetchCompany.fulfilled, (state, action) => {
      state.companyData = action.payload;
    });
    builder.addCase(SearchCompany.fulfilled, (state, action) => {
      state.companyList = action.payload;
    });
  },
});

export const getCompanyList = (state: RootState) =>
  state.ReviewRatingsSlice.companyList;
export const getCompany = (state: RootState) =>
  state.ReviewRatingsSlice.companyData;

// export const {  } = ReviewRatingsSlice.actions;

export default ReviewRatingsSlice.reducer;
