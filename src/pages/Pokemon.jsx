import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./styles/Pokemon.css"


const Pokemon = () => {
  const [pokemon, setPokemon] = useState();
 

  const { id } = useParams();

  const getPercentBar=(stat) => {
    const percent = (stat * 100) / 255 
    return `${percent}%`
  }

  const themes = useSelector((store) => store.themes);

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    axios
      .get(URL)
      .then((res) =>setPokemon(res.data))
      .catch((err) => console.log(err));
  }, []);

  

  return (
    <main className={`${themes}`}>
      {/* Parte Superior */}
      <section className={`pokemon border-${pokemon?.types[0].type.name}`}>

      
      <section className={`pokemon__header bg-lg-${pokemon?.types[0].type.name}`}></section>
        <section className="pokemon__body">
          <div className="pokemon__img">
            <img
              src={pokemon?.sprites.other["official-artwork"].front_default}
              alt=""
            />
          </div>
        </section>
      
      {/* Body */}
      <section>
        <h2 className="pokemon__id"># {pokemon?.id}</h2>
        <h2 className="pokemon__name">{pokemon?.name}</h2>
        <div className="pokemon__dates">
          <div>
            <h5>Weigth</h5>
            <h4>{pokemon?.weight}</h4>
          </div>

          <div>
            <h5>Height</h5>
            <h4>{pokemon?.height}</h4>
          </div>
        </div>

        <div className="pokemon__information">
          <div >
            <h3>Type</h3>
            <div className="pokemon__type">
              {pokemon?.types.map((type) => (
                <div className ={`pokemon__type__1 bg-${type.type.name}`} key={type.type.name}>
                  <span>{type.type.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div >
            <h3>Abilities</h3>
            <div className ="pokemon__abilities" >
              {pokemon?.abilities.map((ability) => (
                <div className ="pokemon__abilities__1"  key={ability.ability.name}>
                  <span>{ability.ability.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section>
          <h2 className="pokemon__stats__title">Stats</h2>
          <section className="pokemon__stats">
            {pokemon?.stats.map((stat) => (
              <article key={stat.stat.name}>
                <div className="pokemon_stat">
                  <h4>{stat.stat.name}</h4>
                  <h5>{stat.base_stat}/150</h5>           
                  
                </div> 
                <div className="pokemon__stat_bar">
                  <div className="pokemon__stat__barGray">
                        <div className="pokemon__stat__barProgress " style={{width: getPercentBar(stat.base_stat)}}></div>
                  </div>

                </div>
                
              </article>
            ))}
          </section>
        </section>
      </section>

      </section>

      <section className={`pokemon__section2 border-${pokemon?.types[0].type.name}`}>
        <h4 className="pokemon__section__title">Movements</h4>
        <ul className="pokemon__moves">
          {
           pokemon?.moves.map((move)=> <li className="pokemon__moves__card" key={move.move.name}>{move.move.name}</li>)
          }
        </ul>
      </section>
    
    </main>
  );
};

export default Pokemon;
