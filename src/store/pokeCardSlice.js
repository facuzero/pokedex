import { createSlice } from "@reduxjs/toolkit";

export const pokeCardSlice = createSlice({
  name: "pokeCard",
  initialState: {
    pokemons: [],
    myPokemons: [],
    error: null,
  },
  reducers: {
    listPokemon: (state, action) => {
      const { pokemon, error } = action.payload;
      error ? (state.error = error) : (state.pokemons = pokemon);
    },
    addPokemon: (state, action) => {
      state.myPokemons.push(action.payload);
    },
    removePokemon: (state, action) => {
      state.myPokemons = state.myPokemons.filter(
        (pokemon) => pokemon !== action.payload
      );
    },
  },
});

export const { listPokemon, addPokemon, removePokemon } = pokeCardSlice.actions;
