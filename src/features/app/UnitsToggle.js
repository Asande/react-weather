import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import ToggleLeftRight from '@/components/ToggleLeftRight'
import { TEMPERATURE_UNITS } from '@/constants'
import { changeUnits } from './slice'


export function UnitsToggle(props) {
  const units = useSelector((state) => state.app.units)
  const dispatch = useDispatch()
  return (
    <ToggleLeftRight
      {...props}
      value={units}
      onChange={(newUnits) => dispatch(changeUnits(newUnits))}
      leftItem={{ label: 'C°', value: TEMPERATURE_UNITS.CELSIUS }}
      rightItem={{ label: 'F°', value: TEMPERATURE_UNITS.FAHRENHEIT }}
    />
  )
}

export default UnitsToggle