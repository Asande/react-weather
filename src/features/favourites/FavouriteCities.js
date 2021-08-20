import React from 'react'
import { useSelector } from 'react-redux'
import { Segment, Icon, Container } from 'semantic-ui-react'

import { getAllFavouritesNames } from './slice'
import CityCard from './CityCard'


export function FavouriteCities() {
  const favCities = useSelector(getAllFavouritesNames)
  if (!favCities.length) {
    return null
  }
  return (
    <Segment>
      <Icon size='large' style={{ float: 'right' }} name='star' />
      <Container style={{ marginTop: '3em' }}>
        {favCities.map((city) => <CityCard key={city} name={city} />)}
      </Container>
    </Segment>
  )
}

export default FavouriteCities
