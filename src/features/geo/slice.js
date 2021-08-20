import { createSlice } from '@reduxjs/toolkit'

import { asyncGetCurrentPosition } from '@/utils'
import { getNearestCity } from '@/utils/api'


const geoSlice = createSlice({
  name: 'geo',
  initialState: {
    permission: '',
    position: null,
    weather: null,
    error: null,
  },
  reducers: {
    changeState: (state, action) => {
      return action.payload
    },
  },
})

export const { changeState } = geoSlice.actions

export const initialize = () => async (dispatch) => {
  const result = await navigator.permissions.query({ name: 'geolocation' })
  const newState = { permission: result.state, position: null, weather: null }

  if (['granted', 'prompt'].includes(result.state)) {
    let pos
    try {
      pos = await asyncGetCurrentPosition()
      newState.position = { lat: pos.coords.latitude, lon: pos.coords.longitude }
    } catch (error) {
      newState.error = 'cannot get geolocation'
    }
    try {
      const weather = await getNearestCity(pos.coords.latitude, pos.coords.longitude)
      newState.weather = weather.list[0]
    } catch (error) {
      console.error(error)
      newState.error = 'cannot find nearest city'
    }
  }
  dispatch(changeState(newState))
}

export default geoSlice.reducer
