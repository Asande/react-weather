import React from 'react'
import { Grid, Header, Image } from 'semantic-ui-react'

import { ThemeToggle } from '@/features/app/ThemeToggle'
import { UnitsToggle } from '@/features/app/UnitsToggle'
import { CitySearchInput } from '@/features/search/CitySearchInput'


const logoStyle = {
  background: '#FFF',
  borderRadius: '5px',
  padding: '.2em',
}

export function MainPageHeader() {
  return (
    <Grid style={{ padding: '1em' }} stackable>
      <Grid.Row >
        <Grid.Column width={5}>
          <Header>
            <Image alt='logo' src='./logo.png' style={logoStyle} /> React Weather
          </Header>
        </Grid.Column>
        <Grid.Column textAlign='center' width={6}>
          <CitySearchInput/>
        </Grid.Column>
        <Grid.Column textAlign='right' width={5}>
          <UnitsToggle style={{ marginRight: '1em' }} />
          <ThemeToggle />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default MainPageHeader
