import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Segment } from 'semantic-ui-react'
import { initialize } from '../store/geo'


export function GeolocationWeather() {
  const dispatch = useDispatch()
  const permission = useSelector(state => state.geo.permission)
  const position = useSelector(state => state.geo.position)
  const weather = useSelector(state => state.geo.weather)

  useEffect(() => {
    if (permission === '') {
      dispatch(initialize())
    }
  }, [dispatch, permission])

  return (
    <Segment>{(() => {
      switch(permission) {
        case '': return 'unknown'
        case 'denied': return 'denied'
        case 'prompt': return 'prompt'
        case 'granted': return (
          <>
            <div>lat: {position.lat}</div>
            <div>lon: {position.lon}</div>
            <div>{weather.list.length ? weather.list[0].name : '-'}</div>
          </>
        )
        default: return null
      }
    })()}</Segment>
  )
}
