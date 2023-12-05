import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //! url are images from tmdb
  url: {},
  genres: {},
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    //! give the url to the store
    getApiConfiguration: (state, action) => {
      state.url = action.payload;
    },
    //! give the genres to the store
    getGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

//! Action creators are generated for each case reducer function
export const { getApiConfiguration, getGenres } = homeSlice.actions;

export default homeSlice.reducer;
