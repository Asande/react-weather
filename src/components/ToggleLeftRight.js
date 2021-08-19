import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'semantic-ui-react'

import './toggleLeftRight.css'


export function ToggleLeftRight({ leftItem, rightItem, onChange, value, ...props }) {
  return (
    <div className='rw-toggle-left-right' {...props}>
      <div className='rw-toggle-left-right_left-item'>
        {leftItem.label}
      </div>
      <div className='rw-toggle-left-right_toggle'>
        <Checkbox
          toggle
          checked={value === rightItem.value}
          onChange={(e, { checked }) => onChange(checked ? rightItem.value : leftItem.value)}
        />
      </div>
      <div className='rw-toggle-left-right_right-item'>
        {rightItem.label}
      </div>
    </div>
  )
}

ToggleLeftRight.propTypes = {
  leftItem: PropTypes.shape({ label: PropTypes.node, value: PropTypes.any }).isRequired,
  rightItem: PropTypes.shape({ label: PropTypes.node, value: PropTypes.any }).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
}

export default ToggleLeftRight
