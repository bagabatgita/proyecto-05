import { createSlice } from "@reduxjs/toolkit";

const pokemonPerPageSlice = createSlice ({
    name: "pokePerPage",
    initialState: localStorage.getItem("pokePerPage") ? JSON.parse(localStorage.getItem("pokePerPage")) : 12 ,
    reducers:{
        setPokePerPage: (state, action) => {
            localStorage.setItem("pokePerPage",action.payload)
            return action.payload 
        },
    },
})

export const { setPokePerPage } =  pokemonPerPageSlice.actions

export default pokemonPerPageSlice.reducer