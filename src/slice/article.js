import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: [],
  isLoading: false,
  error: null,
  articleDetail: null,
};

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    getArticleListrStart: (state) => {
        state.isLoading = true;
    },
    getArticleListSuccess: (state, action) => {
        state.articles = action.payload;
        state.isLoading = false;
    },
    getArticleListFailure: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    },
    getArticleDetailStart: (state) => {
        state.isLoading = true;
    },
    getArticleDetailSuccess: (state, action) => {
        state.articleDetail = action.payload;
        state.isLoading = false;
    },
    getArticleDetailFailure: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    },
}});

export const { getArticleListrStart, getArticleListSuccess, getArticleListFailure, getArticleDetailStart, getArticleDetailSuccess, getArticleDetailFailure } = articleSlice.actions;
export default articleSlice.reducer;