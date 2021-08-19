export async function fetchCityWeatherByName(name) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${OPEN_WEATHER_API_KEY}`
  try {
    const resp = await fetch(url)
    return resp.json()
  } catch (error) {
    return null
  }
}
