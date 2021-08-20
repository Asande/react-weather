import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'semantic-ui-react'

import { formatKelvinTemperature } from '@/utils/index'
import { TEMPERATURE_UNITS } from '@/constants'


export function WeatherDataList({ data, units }) {
  return (
    <List>
      <List.Item>
        <List.Icon name='thermometer half' />
        <List.Content>{formatKelvinTemperature(data.temp, units)} (feels like {formatKelvinTemperature(data.feels_like, units)})</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='theme' />
        <List.Content>{data.humidity} %</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='cloud download' />
        <List.Content>{data.pressure} hPa</List.Content>
      </List.Item>
    </List>
  )
}

WeatherDataList.propTypes = {
  data: PropTypes.shape({
    humidity: PropTypes.number,
    pressure: PropTypes.number,
    temp: PropTypes.number,
    feels_like: PropTypes.number,
  }),
  units: PropTypes.oneOf(Object.values(TEMPERATURE_UNITS)),
}