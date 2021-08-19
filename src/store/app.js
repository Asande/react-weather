import { createSlice } from '@reduxjs/toolkit'

import { getSystemTheme } from '../utils'


export const appSlice = createSlice({
  name: 'app',
  initialState: {
    theme: getSystemTheme(),
    units: 'celsius',
  },
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload
    },
    changeUnits: (state, action) => {
      state.units = action.payload
    },
  },
})

export const { changeTheme, changeUnits } = appSlice.actions

export default appSlice.reducer