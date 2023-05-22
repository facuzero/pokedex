import { createSlice } from "@reduxjs/toolkit";

export const miniCardSlice = createSlice({
  name: "miniCard",
  initialState: {
    types: [],
    error: null,
  },
  reducers: {
    typePokemon: (state, action) => {
      const { type, error } = action.payload;
      error ? (state.error = error) : (state.types = type);
    },
  },
});

export const { typePokemon } = miniCardSlice.actions;
