import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonData } from "../api/pokemonApi";
import { searchSclice } from "../store/searchSlice";
import { styles } from "../styles";
import { addPokemon } from "../store/pokeCardSlice";

const PokeCard = () => {
  const dispatch = useDispatch();
  const pokemonData = useSelector((state) => state.pokeCard.pokemons);
  const error = useSelector((state) => state.pokeCard.error);
  const searchText = useSelector((state) => state.pokeSearch);

  useEffect(() => {
    fetchPokemonData(dispatch);
  }, [dispatch]);

  const handleSearch = () => {
    dispatch(searchSclice.setSearchPokemons(searchText));
  };

  const handleAddPokemon = (pokemon) => {
    dispatch(addPokemon(pokemon));
  };
  if (!error) {
    return (
      <>
        <styles.CardInput type='text' />
        <styles.CardButton onClick={handleSearch}>Buscar</styles.CardButton>
        <styles.CardFlex>
          {pokemonData.length === 0 ? (
            <p>Cargando...</p>
          ) : (
            <>
              {pokemonData.map((pokemon, index) => (
                <styles.CardContainer key={index}>
                  {/* <a href={`/pokemonDetail/${pokemon.id}`}> */}
                  <a href='#'>
                    <styles.CardTitle>{pokemon.name}</styles.CardTitle>
                    <styles.CardImage
                      src={
                        pokemon.sprites.other["official-artwork"].front_default
                      }
                      alt='imagen pokimon'
                    />
                    <styles.CardText>Peso: {pokemon.weight}Lbs</styles.CardText>
                    <styles.AbilitiesList>
                      Habilidades
                      {pokemon.abilities.map((ability, index) => (
                        <styles.AbilityItem key={index}>
                          {ability.ability.name}
                        </styles.AbilityItem>
                      ))}
                    </styles.AbilitiesList>
                  </a>
                  <button onClick={handleAddPokemon}>Agregar pokemon</button>
                </styles.CardContainer>
              ))}
            </>
          )}
        </styles.CardFlex>
      </>
    );
  }
  return <div>Error: {error}</div>;
};
export default PokeCard;
