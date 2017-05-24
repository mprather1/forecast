import Marionette from 'marionette'
import ForecastCollection from './collections/ForecastCollection'
import WeatherCollection from './collections/WeatherCollection'
import WeatherView from './views/WeatherView'
import config from './_config'

const Controller = Marionette.Object.extend({
  initialize: function (options) {
    this.app = options.app
  },

  index: function () {
    console.log('index')
  },

  getWeather: function (city) {
    const weatherData = new WeatherCollection([], { city: city, config: config })
    const forecastData = new ForecastCollection([], { city: city, config: config })
    const weatherView = new WeatherView({ city: city, config: config, weather: weatherData, forecast: forecastData })

    this.app.view.showChildView('main', weatherView)
  }
})

export default Controller
