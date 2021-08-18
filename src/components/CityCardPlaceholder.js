import React from 'react'
import { Placeholder } from 'semantic-ui-react'


export const CityCardPlaceholder = () =>
  <Placeholder>
    <Placeholder.Header image>
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder.Header>
    <Placeholder.Paragraph>
      <Placeholder.Line length='medium' />
      <Placeholder.Line length='short' />
    </Placeholder.Paragraph>
  </Placeholder>

export default CityCardPlaceholder