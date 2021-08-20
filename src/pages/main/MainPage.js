import React from 'react'
import { useSelector } from 'react-redux'
import { Container } from 'semantic-ui-react'
import Helmet from 'react-helmet'

import FavouriteCities from '@/features/favourites/FavouriteCities'
import { GeolocationWeather } from '@/features/geo/GeolocationWeather'
import { SearchResult } from '@/features/search/SearchResult'
import { MainPageHeader } from './MainPageHeader'


export function MainPage() {
  const theme = useSelector((state) => state.app.theme)
  return (
    <>
      <Helmet>
        {theme === 'dark' && <link rel='stylesheet' type='text/css' href='dark.css' />}
      </Helmet>
      <MainPageHeader/>
      <Container text style={{ padding: '2em 0' }}>
        <SearchResult />
        <GeolocationWeather/>
        <FavouriteCities/>
      </Container>
    </>
  )
}

export default MainPage