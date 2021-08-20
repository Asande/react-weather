import React from 'react'
import PropTypes from 'prop-types'
import { Card, Icon, Header } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

import { formatKelvinTemperature, getWeatherIconByName } from '@/utils'
import { WeatherDataList } from '@/components/WeatherDataList'
import { CityCardContentPlaceholder } from './CityCardContentPlaceholder'
import { getCityByName } from './slice'


export function CityCard({ name }) {
  const units = useSelector(state => state.app.units)
  const cityData = useSelector(getCityByName(name))
  const { loading, weather } = cityData
  if (loading) {
    return (
      <Card>
        <Card.Content>
          <CityCardContentPlaceholder/>
        </Card.Content>
      </Card>
    )
  }
  const mainWeather = weather.weather[0].main
  const formattedTemp = !loading ? formatKelvinTemperature(weather.main.temp, units) : null
  return (
    <Card>
      <Card.Content>
        <div style={{ float: 'right' }}>
          <Header>{formattedTemp}</Header>
          <Icon style={{ float: 'right' }} size='big' name={getWeatherIconByName()} />
        </div>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{mainWeather}</Card.Meta>
        <Card.Description>
          <WeatherDataList data={mainWeather} units={units} />
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

CityCard.propTypes = {
  name: PropTypes.string.isRequired,
  loading: PropTypes.bool,
}

export default CityCard
