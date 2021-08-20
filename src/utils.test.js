import { formatKelvinTemperature, getWeatherIconByName } from './utils'


test('formatKelvinTemperature 275 to kelvin to be "275 K"', () => {
  expect(formatKelvinTemperature(275)).toBe('275 K')
})

test('formatKelvinTemperature 275 to celsius to be "1 C°"', () => {
  expect(formatKelvinTemperature(275, 'celsius')).toBe('1 C°')
})

test('formatKelvinTemperature 275 to fahrenheit to be "35 F°"', () => {
  expect(formatKelvinTemperature(275, 'fahrenheit')).toBe('35 F°')
})

test('getWeatherIconByName "Clear" to be "sun"', () => {
  expect(getWeatherIconByName('Clear')).toBe('sun')
})

test('getWeatherIconByName "Random string" to be "cloud"', () => {
  expect(getWeatherIconByName('Random string')).toBe('cloud')
})
