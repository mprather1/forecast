import WeatherCollectionView from './WeatherCollectionView'
import ForecastCollectionView from './ForecastCollectionView'

const WeatherView = Backbone.Marionette.View.extend({
  initialize: function (options) {
    console.log('options')
    this.weather = options.weather
    this.forecast = options.forecast
    this.city = options.city
  },

  template: require('../templates/weather-view-template.html'),
  regions: {
    weather: {
      el: '#weather-view'
    },
    forecast: {
      el: '#forecast-view'
    }
  },
  tagName: 'div',
  onRender: function () {
    const self = this
    this.weather.fetch({
      success: function (data) {
        self.showChildView('weather', new WeatherCollectionView({ collection: data }))
      }
    })

    this.forecast.fetch({
      success: function (data) {
        self.showChildView('forecast', new ForecastCollectionView({ collection: data }))
      }
    })
  },
  serializeData: function () {
    return {
      'city': this.city
    }
  }
})

export default WeatherView
