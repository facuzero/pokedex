import { createSlice } from "@reduxjs/toolkit";

export const searchSclice = createSlice({
  name: "pokeSearch",
  initialState: "",
  reducers: {
    setSearchPokemons: (state, action) => {
      return action.payload;
    },
  },
});
