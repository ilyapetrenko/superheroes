import {configureStore} from "@reduxjs/toolkit"
import { heroApi } from './reducers/heroApi.js'
import { heroReducer } from './reducers/heroSlice.js'


export const store = configureStore({
  reducer: {
    [heroApi.reducerPath]: heroApi.reducer,
    hero: heroReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(heroApi.middleware),
})
