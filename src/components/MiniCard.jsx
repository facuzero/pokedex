import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./MiniCard.module.css";
import { fetchPokemonTypeData } from "../api/pokemonApi";

const MiniCard = () => {
  const dispatch = useDispatch();
  const pokemonTypes = useSelector((state) => state.miniCard.types);

  const error = useSelector((state) => state.miniCard.error);

  useEffect(() => {
    fetchPokemonTypeData(dispatch);
  }, [dispatch]);

  if (!error) {
    return (
      <div>
        <div> Tipos de pokemones</div>
        <div className={styles.cardContainer}>
          {pokemonTypes.length === 0 ? (
            <p>cargando...</p>
          ) : (
            <div>
              {pokemonTypes.map((type, index) => (
                <button className={styles} key={index}>
                  <p className={styles}>{type.name}</p>
                  <img
                    src={`type.sprites.other["official-artwork"].front_default`}
                    alt='imagen pokimon'
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
  return <div>Error: {error}</div>;
};
export default MiniCard;
