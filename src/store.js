import { configureStore } from '@reduxjs/toolkit'
import reduxThunk from 'redux-thunk'
import reduxLogger from 'redux-logger'

import appReducer from './features/app/slice'
import geoReducer from './features/geo/slice'
import searchReducer from './features/search/slice'
import favouritesReducer from './features/favourites/slice'


const localStorageSync = (store) => (next) => (action) => {
  const result = next(action)
  localStorage.setItem('store', JSON.stringify(store.getState()))
  return result
}

export const store = configureStore({
  reducer: {
    app: appReducer,
    search: searchReducer,
    geo: geoReducer,
    favourites: favouritesReducer,
  },
  devTools: ENV === 'development',
  preloadedState: JSON.parse(localStorage.getItem('store') || '{}'),
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware()
    middlewares.push(reduxThunk)
    middlewares.push(localStorageSync)
    if (ENV === 'development') {
      middlewares.push(reduxLogger)
    }
    return middlewares
  },
})
