import React from 'react'
import PropTypes from 'prop-types'


export function TextEllipsis({ children, width }) {
  const ellipsisStyle = {
    display: 'inline-block',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    maxWidth: `${width}px`,
    verticalAlign: 'middle',
  }
  return (
    <span style={ellipsisStyle}>
      {children}
    </span>
  )
}

TextEllipsis.propTypes = {
  children: PropTypes.node,
  width: PropTypes.number,
}

TextEllipsis.defaultProps = {
  width: 150,
}

export default TextEllipsis
