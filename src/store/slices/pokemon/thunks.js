import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = (page = 0) => {
    return (dispatch, getState) => {
        dispatch(startLoadingPokemons())

        //todo Realizar peticion HTTP
        // data-pokemons
        // dispatch(setPokemons())

    }
}