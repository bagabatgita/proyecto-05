import React from "react";

const Card = ({ pokemon }) => {
  return (
    <section>
      <div className="pokemonCard__img">
        <img
          src={pokemon?.sprites.other["official-artwork"].front_default}
          alt=""
        />
      </div>
      <h3 className="pokemonCard__name">{pokemon?.name}</h3>
      <h4 className="pokemonCard__types">
        {pokemon?.types[0].type.name} /{" "}
        {pokemon?.types[1] && `/${pokemon?.types[1].type.name}`}
      </h4>
      <h6 className="pokemonCard__types-subtitle">Tipo</h6>
      <hr className="pokemonCard_line" />
      <section className="pokemonCard__stats">
        {pokemon?.stats.map((stat) => (
          <div className="pokemonCard__stat" key={stat.stat.url}>
            <h5 className="pokemonCard__stat_name">{stat.stat.name}</h5>
            <h5 className="pokemonCard__stat-value">{stat.base_stat}</h5>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Card;
