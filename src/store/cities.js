import { createSlice } from '@reduxjs/toolkit'


const citiesSlice = createSlice({
  name: 'cities',
  initialState: [],
  reducers: {
    addCity: (state, action) => {
      state.push(action.payload)
    },
  },
})

export const { addCity, removeCity } = citiesSlice.actions

export default citiesSlice.reducer
