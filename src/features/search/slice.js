import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { fetchCityWeatherByName } from '@/utils/api'


export const handleSearch = createAsyncThunk('search/handleSearch', async (searchTerm) => {
  if (!searchTerm) {
    return { search: '', searchResult: null }
  }
  const data = await fetchCityWeatherByName(searchTerm)
  return { search: searchTerm, searchResult: data.cod === 200 ? data : null }
})

export const searchSlice = createSlice({
  name: 'app',
  initialState: {
    search: '',
    searchResult: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: {
    [handleSearch.pending]: (state) => {
      state.status = 'loading'
    },
    [handleSearch.fulfilled]: (state, action) => {
      state.status = 'success'
      state.search = action.payload.search
      state.searchResult = action.payload.searchResult
    },
    [handleSearch.rejected]: (state, action) => {
      state.status = 'fail'
      state.error = action.error.message
    },
  },
})

export default searchSlice.reducer
