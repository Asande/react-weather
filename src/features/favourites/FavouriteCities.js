import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from 'semantic-ui-react'

import { getAllCities } from './slice'
import CityCard from './CityCard'


export function FavouriteCities() {
  const favCities = useSelector(getAllCities)
  return (
    <Card.Group centered>
      {favCities.map((city) => <CityCard key={city.id} city={city} />)}
    </Card.Group>
  )
}

export default FavouriteCities
