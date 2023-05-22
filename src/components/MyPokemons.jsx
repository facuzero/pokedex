/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
/* import PokemonDetail from "./PokemonDetail"; */
import { removePokemon } from "../store/pokeCardSlice";
import styles from "../styles";

const MyPokemons = () => {
  const myPokemons = useSelector((state) => state.pokeCard.myPokemons);
  const dispatch = useDispatch();
  const handleRemovePokemon = (pokemon) => {
    dispatch(removePokemon(pokemon));
  };
  return (
    <div>
      <div>MyPokemons</div>
      <div className='pokeCards'>
        {myPokemons.map((pokemon, index) => (
          <styles.CardContainer key={index}>
            {/* <a href={`/pokemonDetail/${pokemon.id}`}> */}
            <a href='#'>
              <styles.CardTitle>{pokemon.name}</styles.CardTitle>
              <styles.CardImage
                src={pokemon.sprites.other["official-artwork"].front_default}
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
            <button onClick={handleRemovePokemon}>Quitar pokemon</button>
          </styles.CardContainer>
        ))}
      </div>
    </div>
  );
};
export default MyPokemons;
