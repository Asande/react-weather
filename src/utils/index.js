import { TEMPERATURE_UNITS } from '@/constants'


export function getWeatherIconByName(name = '') {
  switch (name.toLowerCase()) {
    case 'clear': return 'sun'
    default: return 'cloud'
  }
}

export function formatKelvinTemperature(value, units) {
  switch (units) {
    case TEMPERATURE_UNITS.FAHRENHEIT:
      return `${Math.floor(value * 9/5 - 459.67)} F°`
    case TEMPERATURE_UNITS.CELSIUS:
      return `${Math.floor(value - 273.15)} C°`
    default:
      return `${value} K`
  }
}

export function getSystemTheme() {
  const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
  return darkThemeMq.matches ? 'dark' : 'light'
}

export function asyncGetCurrentPosition() {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej)
  })
}

export async function getGeoPermission() {
  if (navigator.permissions) {
    const result = await navigator.permissions.query({ name: 'geolocation' })
    return result.state
  }
  return 'prompt'
}