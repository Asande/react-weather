import React from 'react'
import { Provider } from 'react-redux'
import { Card, Container } from 'semantic-ui-react'

import { CityCard } from './components/CityCard'
import { SiteHeader } from './components/SiteHeader'
import { store } from './store'
import './app.css'


export const App = () => {
  return (
    <Provider store={store}>
      <SiteHeader/>
      <Container className='rw-main-container'>
        <Card.Group centered>
          <CityCard loading name='Novosibirsk' />
          <CityCard loading name='Novosibirsk' />
          <CityCard name='Novosibirsk' />
        </Card.Group>
      </Container>
    </Provider>
  )
}
