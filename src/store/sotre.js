import { configureStore } from "@reduxjs/toolkit";
import { pokeCardSlice } from "./pokeCardSlice";
import { miniCardSlice } from "./miniCardSlice";
import { searchSclice } from "./searchSlice";

export default configureStore({
  reducer: {
    pokeCard: pokeCardSlice.reducer,
    miniCard: miniCardSlice.reducer,
    pokeSearch: searchSclice.reducer,
  },
});
