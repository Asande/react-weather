import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input } from 'semantic-ui-react'

import { handleSearch } from './slice'


let searchTimeout

export function CitySearchInput() {
  const stateSearch = useSelector((state) => state.search.search)
  const dispatch = useDispatch()
  const [val, setVal] = useState(stateSearch)

  function handleChange(e, { value }) {
    setVal(value)
    if (searchTimeout) {
      clearTimeout(searchTimeout)
    }
    searchTimeout = setTimeout(() => {
      dispatch(handleSearch(value))
    }, 1000)
  }
  return (
    <Input fluid placeholder='Enter city name...' icon='search' value={val} onChange={handleChange} />
  )
}

export default CitySearchInput
