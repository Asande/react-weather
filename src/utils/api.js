const API_ROOT = 'https://api.openweathermap.org/data/2.5'


export async function fetchCityWeatherByName(name) {
  try {
    const resp = await fetch(`${API_ROOT}/weather?q=${name}&appid=${OPEN_WEATHER_API_KEY}`)
    return resp.json()
  } catch (error) {
    return null
  }
}

export async function getNearestCity(lat, lon) {
  try {
    const resp = await fetch(`${API_ROOT}/find?lat=${lat}&lon=${lon}&cnt=1&appid=${OPEN_WEATHER_API_KEY}`)
    return resp.json()
  } catch (error) {
    return null
  }
}
