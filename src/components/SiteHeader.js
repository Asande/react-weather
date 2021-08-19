import React from 'react'
import { Grid, Header, Input, Image } from 'semantic-ui-react'

import { ThemeToggle } from './ThemeToggle'
import { UnitsToggle } from './UnitsToggle'


export function SiteHeader() {
  return (
    <Grid style={{ padding: '1em' }} stackable>
      <Grid.Row >
        <Grid.Column width={5}>
          <Header><Image src='./logo.png' style={{ background: '#FFF', borderRadius: '5px', padding: '.2em' }} />React Weather</Header>
        </Grid.Column>
        <Grid.Column textAlign='center' width={6}>
          <Input fluid placeholder='Enter city name...' icon='search' />
        </Grid.Column>
        <Grid.Column textAlign='right' width={5}>
          <UnitsToggle style={{ marginRight: '1em' }} />
          <ThemeToggle />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default SiteHeader
