import axios from "axios";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";

import { paginationLogic } from "../utils/pagination";

const usePokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    const [types, setTypes] = useState([]);
    const [selectType, setSelectType] = useState("");
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonFilter, setPokemonFilter] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    
    const pokePerPage = useSelector((store) => store.pokePerPage);
    const { pagesInBlock, lastPage, pokemonsInPage } = paginationLogic(pokemonFilter,currentPage,pokePerPage);

  
    const handleChangeSelect = (e) => {
      setSelectType(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setPokemonName(e.target.pokemonName.value);
    };
  
    
    
  
    const handleNextPage = () => {
      const nexPage = currentPage + 1
      if (nexPage > lastPage) {
          setCurrentPage(1)
  
      }else{
          setCurrentPage(nexPage)
      }
  
    }
  
    const handlePreviusPage = () => {
      const nexPage = currentPage - 1
      if (nexPage < 1) {
          setCurrentPage(lastPage)
  
      }else{
          setCurrentPage(nexPage)
      }
  
  
    }
  
  
    useEffect(() => {
      const URL = `https://pokeapi.co/api/v2/${selectType ? `type/${selectType}/` : "pokemon/?limit=1279"}`;
      axios
        .get(URL)
        .then((res) => {
          if (selectType) {
            const pokemonByType = res.data.pokemon.map((pokemon) => {
              return {
                name: pokemon.pokemon.name,
                url: pokemon.pokemon.url,
              };
            });
            setPokemons(pokemonByType);
          } else {
            setPokemons(res.data.results);
          }
        })
        .catch((err) => console.log(err));
    }, [selectType]);
  
    useEffect(() => {
      const pokemonByName = pokemons.filter(pokemon => pokemon.name.includes(pokemonName.toLowerCase()));
      setPokemonFilter(pokemonByName);
    }, [pokemonName, pokemons]);
  
    useEffect(() => {
      const URL = "https://pokeapi.co/api/v2/type/";
      axios
        .get(URL)
        .then((res) => setTypes(res.data.results))
        .catch((err) => console.log(err));
    }, []);
  
    useEffect (()=>{
      setCurrentPage(1)
    },[pokemons])

    return{
        handleChangeSelect,
        handleNextPage,
        handlePreviusPage,
        handleSubmit,
        pokemonFilter,
        types,
        pokePerPage,
        pokemonsInPage,pagesInBlock
       
    }
}

export default usePokedex