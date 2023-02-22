
export const paginationLogic = (pokemonFilter,currentPage, pokePerPage ) => {
    

    //Pokemons  que se van a mostrar en la pagina actual

    const sliceStart = (currentPage - 1) * pokePerPage;
    const sliceEnd = sliceStart + pokePerPage;
    const pokemonsInPage = pokemonFilter.slice(sliceStart, sliceEnd);

    //ultima pagina
    const lastPage = Math.ceil(pokemonFilter.length / pokePerPage) || 1;

    //Bloque Actual
    const pagesPerBlock = 5;
    const actualBlock = Math.ceil(currentPage / pagesPerBlock);

    const pagesInBlock = [];
    const minPage = (actualBlock * pagesPerBlock - pagesPerBlock) + 1;
    const maxPage = actualBlock * pagesPerBlock;
    for (let i = minPage; i <= maxPage; i++) {
      if (i <= lastPage) {
        pagesInBlock.push(i);
      }
    }
    return { pagesInBlock, lastPage, pokemonsInPage };
  };
