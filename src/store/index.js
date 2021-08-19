import { configureStore } from '@reduxjs/toolkit'
import reduxThunk from 'redux-thunk'
import reduxLogger from 'redux-logger'

import appReducer from './app'


export const store = configureStore({
  reducer: {
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware()
    middlewares.concat(reduxThunk)
    if (ENV === 'development') {
      middlewares.concat(reduxLogger)
    }
    return middlewares
  },
})
