import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Segment, Header, Icon, Loader, Button, Container } from 'semantic-ui-react'

import { WeatherDataList } from '@/components/WeatherDataList'
import TextEllipsis from '@/components/TextEllipsis'
import { addToFavourites } from '@/features/favourites/slice'
import { resetSearch } from './slice'


export function SearchResult() {
  const { search, status, searchResult } = useSelector(state => state.search)
  const dispatch = useDispatch()
  const units = useSelector(state => state.app.units)

  if (!search) {
    return null
  }

  function handleAddToFavourites() {
    dispatch(addToFavourites(searchResult.name))
    dispatch(resetSearch())
  }

  let content = null
  if (status === 'loading') {
    content = <div style={{ margin: '2em' }}><Loader active centered /></div>
  } else if (search && !searchResult) {
    content = (
      <>
        <Icon size='large' style={{ float: 'right' }} name='search' />
        <h3 style={{ marginTop: '0' }}>City name &laquo;<TextEllipsis>{search}</TextEllipsis>&raquo; not found</h3>
      </>
    )
  } else if (search && searchResult) {
    content = (
      <>
        <Icon size='large' style={{ float: 'right' }} name='search' />
        <Header style={{ marginTop: '0' }}>{searchResult.name}</Header>
        <WeatherDataList data={searchResult.main} units={units} />
        <Container textAlign='right'>
          <Button
            size='tiny'
            content='Add to favourites'
            icon='star'
            onClick={handleAddToFavourites}
          />
        </Container>
      </>
    )
  }

  return (
    <Segment>
      {content}
    </Segment>
  )
}

export default SearchResult
