import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons, pokemonSlice } from './store/slices/pokemon';
import { pokemonApi } from './api/pokemonApi';

export const PokemonApp = () => {

  const dispatch = useDispatch();

  const { isLoading, pokemons } = useSelector(state => state.pokemon);

  const [page, setPage] = useState(0);

  const lastPage = () => {
    setPage(page => page - 1)
  }

  const nextPage = () => {
    setPage(page => page + 1)

  }


  useEffect(() => {
    dispatch(getPokemons(page))
  }, [page])


  return (
    <>
      <h1>PokemonApp</h1>
      <br />
      <span> Loading  {!isLoading ? 'True' : 'False'}</span>
      <ul >
        {pokemons.map((pokemon) => <li key={pokemon.name}>{pokemon.name}</li>)}
      </ul>
      {/* <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>Next</button> */}
      <button disabled={isLoading} onClick={ lastPage}>
       Back
      </button>

      <button disabled={isLoading} onClick={ nextPage}>
       Next
      </button>
    </>
  )
}
