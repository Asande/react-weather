export function getWeatherIconByName(name) {
  switch (name.toLowerCase()) {
    case 'clear': return 'sun'
    default: return 'cloud'
  }
}

export function formatTemperature(value, units) {
  switch (units) {
    case 'fahrenheit':
      return `${Math.floor(value * 9/5 - 459.67)} F°`
    case 'celsius':
      return `${Math.floor(value - 273.15)} C°`
    default:
      return `${value} K`
  }
}

export function getSystemTheme() {
  const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
  return darkThemeMq.matches ? 'dark' : 'light'
}

export const asyncGetCurrentPosition = () => {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej)
  })
}