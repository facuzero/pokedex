import { typePokemon } from "../store/miniCardSlice";
import { listPokemon } from "../store/pokeCardSlice";

export const fetchPokemonType = async (typeUrl) => {
  const typeResponse = await fetch(typeUrl);
  const data = await typeResponse.json();

  return data.results.map((types) => types.url);
};

export const fetchPokemonTypeData = async (dispatch) => {
  try {
    const typeUrl = "https://pokeapi.co/api/v2/type/";
    const typeList = await fetchPokemonType(typeUrl);
    const typeData = await fetchPokemonDetails(typeList);

    dispatch(typePokemon({ type: typeData }));
  } catch (error) {
    dispatch(typePokemon({ error: "Error al obtener los datos de tipos" }));
  }
};

export const fetchPokemonlist = async (apiUrl) => {
  const response = await fetch(apiUrl);
  const data = await response.json();

  return data.results.map((pokemon) => pokemon.url);
};

export const fetchPokemonDetails = async (pokemonUrls) => {
  const pokemonResponses = await Promise.all(
    pokemonUrls.map((url) => fetch(url))
  );
  const pokemonData = await Promise.all(
    pokemonResponses.map((response) => response.json())
  );

  return pokemonData;
};

export const fetchPokemonData = async (dispatch) => {
  try {
    const randomOffset = Math.floor(Math.random() * 1281) + 1;
    const apiUrl = `https://pokeapi.co/api/v2/pokemon?offset=${randomOffset}&limit=${12}`;

    const pokemonList = await fetchPokemonlist(apiUrl);
    const pokemonDetails = await fetchPokemonDetails(pokemonList);

    dispatch(listPokemon({ pokemon: pokemonDetails }));
  } catch (error) {
    dispatch(listPokemon({ error: "Error al obtener los datos" }));
  }
};

/* export const fetchSearch = async (dispatch) => {
  try {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon";
    const pokemonList = await fetchPokemonlist(apiUrl);
    const filteredResults = await dispatch(
      listPokemon({ pokemon: pokemonDetails })
    );
  } catch (error) {
    dispatch(listPokemon({ error: "Error al obtener los datos" }));
  }
}; */
