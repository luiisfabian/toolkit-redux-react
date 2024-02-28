import { configureStore } from '@reduxjs/toolkit'
import {counterSlice} from './slices/counter/counterSlice'
import { pokemonSlice } from './slices/pokemon'
import { todosApi } from './apis'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemon: pokemonSlice.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware:(buildGetDefaultMiddleware) => buildGetDefaultMiddleware().concat(todosApi.middleware)
})