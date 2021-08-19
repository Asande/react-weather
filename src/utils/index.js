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
