import React from 'react'
import { Provider } from 'react-redux'

import './app.css'
import { store } from './store'
import MainPage from './components/MainPage'


export const App = () => {
  return (
    <Provider store={store}>
      <MainPage/>
    </Provider>
  )
}
