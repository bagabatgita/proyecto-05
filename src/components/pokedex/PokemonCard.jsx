import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/PokemonCard.css";
import Card from "./Card";
import Loader from "./Loader";

const PokemonCard = ({ pokemonUrl }) => {
  const [pokemon, setPokemon] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(function () {
      axios
        .get(pokemonUrl)
        .then((res) => setPokemon(res.data))
        .catch((err) => console.log(err));
    }, 1500);
  }, []);

  const handleClickPokemon = () => {
    navigate(`/pokedex/${pokemon.id}`);
  };

  return (
    <article
      className={`pokemonCard border-${pokemon?.types[0].type.name}`}
      onClick={handleClickPokemon}
    >
      <section
        className={`pokemonCard__header bg-lg-${pokemon?.types[0].type.name}`}
      ></section>
      <section className="pokemonCard__body">
        {pokemon ? <Card pokemon={pokemon} /> : <Loader />}
      </section>
    </article>
  );
};

export default PokemonCard;
