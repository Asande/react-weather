import React from 'react'
import { Provider } from 'react-redux'
import { Card, Container, Input } from 'semantic-ui-react'

import { CityCard } from './components/CityCard'
import { store } from './store'


export const App = () => {
  return (
    <Provider store={store}>
      <Container style={{ padding: '2em 0' }}>
        <Input fluid placeholder='Enter city name...' icon='search' />
        <Card.Group centered>
          <CityCard loading name='Novosibirsk' />
          <CityCard loading name='Novosibirsk' />
          <CityCard name='Novosibirsk' />
        </Card.Group>
      </Container>
    </Provider>
  )
}
