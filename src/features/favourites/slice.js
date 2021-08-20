import { createSlice } from '@reduxjs/toolkit'

import { fetchCityWeatherByName } from '@/utils/api'


const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: {
    favourites: [],
    weatherData: {},
    status: 'idle',
    error: null,
  },
  reducers: {
    addToFavourites: (state, action) => {
      state.favourites = [...new Set(state.favourites).add(action.payload)]
    },
    removeFromFavourites: (state, action) => {
      const name = action.payload
      state.favourites = state.favourites.filter((fav) => fav !== name)
      delete state.weatherData[name]
    },
    setCityWeatherData: (state, action) => {
      state.weatherData[action.payload.name] = {
        ...state.weatherData[action.payload.name],
        ...action.payload,
      }
    },
  },
})

export const { addToFavourites, removeFromFavourites, setCityWeatherData } = favouritesSlice.actions

export const refreshCity = (name) => async (dispatch) => {
  dispatch(setCityWeatherData({ name, loading: true }))
  try {
    const data = await fetchCityWeatherByName(name)
    dispatch(setCityWeatherData({ name, loading: false, weather: data }))
  } catch {
    dispatch(setCityWeatherData({ name, loading: false }))
  }
}

export const getAllFavouritesNames = (state) => {
  return state.favourites.favourites
}

export const getFavouriteCityData = (name) => (state) => {
  return state.favourites.weatherData[name]
}

export default favouritesSlice.reducer
