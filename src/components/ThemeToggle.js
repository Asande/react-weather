import React from 'react'
import { Icon } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'

import { changeTheme } from '../store/app'
import ToggleLeftRight from './ToggleLeftRight'


export function ThemeToggle(props) {
  const theme = useSelector(state => state.app.theme)
  const dispatch = useDispatch()
  return (
    <ToggleLeftRight
      {...props}
      value={theme}
      onChange={(newTheme) => dispatch(changeTheme(newTheme))}
      leftItem={{ label: <Icon name='sun' />, value: 'light' }}
      rightItem={{ label: <Icon name='moon' />, value: 'dark' }}
    />
  )
}

export default ThemeToggle
