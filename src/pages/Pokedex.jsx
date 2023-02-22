import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PokemonCard from "../components/pokedex/PokemonCard";
import "./styles/Pokedex.css"
import usePokedex from "../hooks/usePokedex";



const Pokedex = () => {
  const nameTrainer = useSelector((store) => store.nameTrainer);

  const themes = useSelector((store) => store.themes);

  const {handleChangeSelect,handleNextPage, handlePreviusPage, handleSubmit,types,pokePerPage,pokemonsInPage,pagesInBlock,currentPage} = usePokedex()
 
  return (
    <main  className="pokedex">
      <div className="pokedex__text">
         <p>
        <span className="pokedex_welcome">Welcome {nameTrainer} </span> here you cand find information about
        your favorite Pokemon.
      </p>
      <p><span className="pokedex__view">View:{pokePerPage}</span> Per Page</p>
      </div>
     
      <form onSubmit={handleSubmit} className="pokedex__form">
        <div>
          <input className="pokedex__input"
            type="text"
            id="pokemonName"
            placeholder="Search your pokemon"
          />
          <button className="pokedex__btn">Search</button>
        </div>
        <div>
           <select className="pokedex__select" onChange={handleChangeSelect}>
          <option value="">All</option>
          {
          types.map(type=> <option key={type.url}>{type.name}</option> )          
          }
        </select>
        </div>
       
      </form>
     
      <section className="pokedex__card">
        {
        pokemonsInPage.map(pokemon =>  <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} />  )
        }
      </section>
      <section >
        <ul className="pokedex__pagination">
          <li onClick={handlePreviusPage} className="pokedex__active">{"<<"}</li>
          <li onClick={() => setCurrentPage(1)}>...</li>
          {
          pagesInBlock.map(page => <li onClick={() => setCurrentPage(page)} key={page} className={currentPage === page ? `pokedex__active` : `pokedex__normal`} >{page}</li>
          )}
          <li onClick={() => setCurrentPage(lastPage)}>...</li>
          <li onClick={handleNextPage} className="pokedex__active">{">>"}</li>
        </ul>
      </section>
    </main>
  );
};

export default Pokedex;
