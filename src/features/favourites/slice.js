import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: {
    cities: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addCity: (state, action) => {
      state[action.payload.name] = { ...action.payload }
    },
    removeCity: (state, name) => {
      delete state[name]
    },
  },
})

export const loadCitiesData = createAsyncThunk('favourites/loadCitiesData', async (state) => {
  const promises = state.cities.map((city) => getCityByName(city.name))
  await Promise.all(promises)
})

export function getAllCities(state) {
  return state.favourites.cities
}

export function getCityByName(state, name) {
  return state.favourites.cities.find((city) => city.name === name)
}

export const { addCity, removeCity } = favouritesSlice.actions

export default favouritesSlice.reducer
