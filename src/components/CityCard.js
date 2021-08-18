import React from 'react'
import PropTypes from 'prop-types'
import { Card, Header, Icon } from 'semantic-ui-react'

import { CityCardPlaceholder } from './CityCardPlaceholder'


const EXAMPLE_DATA = {
  'coord': {
    'lon': -122.08,
    'lat': 37.39,
  },
  'weather': [{
    'id': 800,
    'main': 'Clear',
    'description': 'clear sky',
    'icon': '01d',
  }],
  'base': 'stations',
  'main': {
    'temp': 282.55,
    'feels_like': 281.86,
    'temp_min': 280.37,
    'temp_max': 284.26,
    'pressure': 1023,
    'humidity': 100,
  },
  'visibility': 16093,
  'wind': {
    'speed': 1.5,
    'deg': 350,
  },
  'clouds': {
    'all': 1,
  },
  'dt': 1560350645,
  'sys': {
    'type': 1,
    'id': 5122,
    'message': 0.0139,
    'country': 'US',
    'sunrise': 1560343627,
    'sunset': 1560396563,
  },
  'timezone': -25200,
  'id': 420006353,
  'name': 'Mountain View',
  'cod': 200,
}

function getWeatherIconByName(name) {
  switch (name.toLowerCase()) {
    case 'clear': return 'sun'
    default: return 'question mark'
  }
}

export const CityCard = ({ loading, name }) =>
  <Card style={{ margin: '3em' }}>
    <Card.Content>
      {loading ? <CityCardPlaceholder/> :
        <>
          <Icon name={getWeatherIconByName(name)} />
          <Card.Header>{EXAMPLE_DATA.weather[0].main}</Card.Header>
          <Card.Meta>{EXAMPLE_DATA.weather[0].main}</Card.Meta>
          <Card.Description>
            <Header>Speed: {EXAMPLE_DATA.wind.speed}</Header>
          </Card.Description>
        </>}
    </Card.Content>
  </Card>

CityCard.propTypes = {
  name: PropTypes.string.isRequired,
  loading: PropTypes.boolean,
}

export default CityCard
