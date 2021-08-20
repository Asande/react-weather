import React from 'react'
import { useSelector } from 'react-redux'
import { Segment, Header, Icon, Loader } from 'semantic-ui-react'

import { WeatherDataList } from '@/components/WeatherDataList'


export function SearchResult() {
  const { search, status, searchResult } = useSelector(state => state.search)
  const units = useSelector(state => state.app.units)
  if (!search) {
    return null
  }
  let content = null
  if (status === 'loading') {
    content = <div style={{ margin: '2em' }}><Loader active centered /></div>
  } else if (search && !searchResult) {
    content = <div>City name &laquo;{search}&raquo; not found</div>
  } else if (search && searchResult) {
    content = (
      <>
        <Icon size='large' style={{ float: 'right' }} name='search' />
        <Header>{searchResult.name}</Header>
        <WeatherDataList data={searchResult.main} units={units} />
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
