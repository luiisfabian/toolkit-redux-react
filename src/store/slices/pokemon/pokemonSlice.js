import { createSlice } from "@reduxjs/toolkit";


export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: {
        page: 1,
        pokemons:[],
        isLoading: false
    },
    reducers: {
        startLoadingPokemons: (state, action) => {
           state.isLoading = true;
        },
        setPokemons: (state, action) => {
            console.log(action);
         },
    },
});

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;