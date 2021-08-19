import React from 'react'
import { useSelector } from 'react-redux'
import { Container } from 'semantic-ui-react'
import Helmet from 'react-helmet'

import FavouriteCities from './FavouriteCities'
import { SiteHeader } from './SiteHeader'
import { GeolocationWeather } from './GeolocationWeather'


export function MainPage() {
  const theme = useSelector((state) => state.app.theme)
  return (
    <>
      <Helmet>
        {theme === 'dark' && <link rel='stylesheet' type='text/css' href='dark.css' />}
      </Helmet>
      <SiteHeader/>
      <Container className='rw-main-container'>
        <GeolocationWeather/>
        <FavouriteCities/>
      </Container>
    </>
  )
}

export default MainPage