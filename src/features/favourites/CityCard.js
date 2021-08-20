import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Card, Icon, Header, Button, Loader } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'

import { formatKelvinTemperature, getWeatherIconByName } from '@/utils'
import { WeatherDataList } from '@/components/WeatherDataList'
import { getFavouriteCityData, refreshCity, removeFromFavourites } from './slice'


export function CityCard({ name }) {
  const units = useSelector(state => state.app.units)
  const cityData = useSelector(getFavouriteCityData(name))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshCity(name))
  }, [])

  function handleRemoveFavourite() {
    dispatch(removeFromFavourites(name))
  }

  if (!cityData || cityData.loading) {
    return (
      <Card fluid>
        <Card.Content style={{ padding: '2em' }}>
          <Loader active centered />
        </Card.Content>
      </Card>
    )
  }
  const mainWeather = cityData.weather.weather[0].main
  const formattedTemp = formatKelvinTemperature(cityData.weather.main.temp, units)
  return (
    <Card fluid>
      <Card.Content>
        <div style={{ float: 'right' }}>
          <Header>{formattedTemp}</Header>
          <Icon style={{ float: 'right' }} size='big' name={getWeatherIconByName()} />
        </div>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{mainWeather}</Card.Meta>
        <Card.Description>
          <WeatherDataList data={cityData.weather.main} units={units} />
          <Button size='tiny' icon='trash' color='red' floated='right' onClick={handleRemoveFavourite} />
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
