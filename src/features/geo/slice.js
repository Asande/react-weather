import { createSlice } from '@reduxjs/toolkit'

import { asyncGetCurrentPosition, getGeoPermission } from '@/utils'
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
  const permission = await getGeoPermission()
  const newState = { permission, position: null, weather: null }

  if (['granted', 'prompt'].includes(permission)) {
    try {
      const pos = await asyncGetCurrentPosition()
      newState.position = { lat: pos.coords.latitude, lon: pos.coords.longitude }
      const weather = await getNearestCity(pos.coords.latitude, pos.coords.longitude)
      newState.weather = weather.list[0]
    } catch (error) {
      newState.error = 'cannot get geolocation'
    }
  }
  dispatch(changeState(newState))
}

export default geoSlice.reducer
