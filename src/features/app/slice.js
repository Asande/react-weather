import { createSlice } from '@reduxjs/toolkit'

import { getSystemTheme } from '@/utils'
import { TEMPERATURE_UNITS } from '@/constants'


export const appSlice = createSlice({
  name: 'app',
  initialState: {
    theme: getSystemTheme(),
    units: TEMPERATURE_UNITS.CELSIUS,
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

export const { changeTheme, changeUnits, changeSearch } = appSlice.actions

export default appSlice.reducer