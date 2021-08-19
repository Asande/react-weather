import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { changeUnits } from '../store/app'
import ToggleLeftRight from './ToggleLeftRight'


export function UnitsToggle(props) {
  const units = useSelector((state) => state.app.units)
  const dispatch = useDispatch()
  return (
    <ToggleLeftRight
      {...props}
      value={units}
      onChange={(newUnits) => dispatch(changeUnits(newUnits))}
      leftItem={{ label: 'C°', value: 'celsius' }}
      rightItem={{ label: 'F°', value: 'fahrenheit' }}
    />
  )
}

export default UnitsToggle