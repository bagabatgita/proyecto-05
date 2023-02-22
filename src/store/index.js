import { configureStore } from "@reduxjs/toolkit";
import nameTrainer from "./slices/nameTrainer.slice";
import pokePerPage from "./slices/pokemonPerPage.slice";
import themes from "./slices/theme.slice";

export default configureStore({
    reducer:{
        nameTrainer,
        pokePerPage,
        themes

    }
},
)


