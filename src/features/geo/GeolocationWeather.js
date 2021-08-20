import { WeatherDataList } from '@/components/WeatherDataList'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Segment, Header, Icon } from 'semantic-ui-react'

import { initialize } from './slice'


export function GeolocationWeather() {
  const dispatch = useDispatch()
  const permission = useSelector(state => state.geo.permission)
  const position = useSelector(state => state.geo.position)
  const weather = useSelector(state => state.geo.weather)
  const units = useSelector(state => state.app.units)

  useEffect(() => {
    dispatch(initialize())
  }, [])

  return (
    <Segment>
      <Icon size='large' style={{ float: 'right' }} name='map marker alternate' />
      {position && weather && <Header>{weather.name}</Header>}
      <div>Permission: {permission}</div>
      <div>Position: {position ? `lat ${position.lat} lon ${position.lon}` : '-'}</div>
      <div>Weather: {!weather && '-'}</div>
      {!!weather && <WeatherDataList data={weather.main} units={units} />}
    </Segment>
  )
}
