import React from 'react'
import PropTypes from 'prop-types'
import { Card, List, Icon, Header } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

import { CityCardContentPlaceholder } from './CityCardContentPlaceholder'
import { formatTemperature, getWeatherIconByName } from '../utils'


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



export function CityCard({ loading, name }) {
  const mainWeather = EXAMPLE_DATA.weather[0].main
  const units = useSelector(state => state.app.units)
  const formattedTemp = formatTemperature(EXAMPLE_DATA.main.temp, units)
  return (
    <Card>
      <Card.Content>
        {loading ? <CityCardContentPlaceholder/> :
          <>
            <div style={{ float: 'right' }}>
              <Header>{formattedTemp}</Header>
              <Icon style={{ float: 'right' }} size='big' name={getWeatherIconByName(mainWeather)} />
            </div>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>{mainWeather}</Card.Meta>
            <Card.Description>
              <List>
                <List.Item>
                  <List.Icon name='thermometer half' />
                  <List.Content>{formattedTemp} (feels like {formattedTemp})</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='theme' />
                  <List.Content>{EXAMPLE_DATA.main.humidity} %</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='cloud download' />
                  <List.Content>{EXAMPLE_DATA.main.pressure} hPa</List.Content>
                </List.Item>
              </List>
            </Card.Description>
          </>}
      </Card.Content>
    </Card>
  )
}

CityCard.propTypes = {
  name: PropTypes.string.isRequired,
  loading: PropTypes.bool,
}

export default CityCard
