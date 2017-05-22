import Marionette from 'marionette'
// import TableView from 'backbone_table_view'
import WeatherCollection from './collections/WeatherCollection'
import WeatherView from './views/WeatherCollectionView.js'
import config from './_config'

const Controller = Marionette.Object.extend({
  initialize: function (options) {
    this.app = options.app
  },

  index: function () {
    console.log('index')
  },

  getWeather: function (city) {
    const app = this.app
    const weatherData = new WeatherCollection([], { city: city, config: config })

    weatherData.fetch({
      success: function (data) {
        app.view.showChildView('main', new WeatherView({ collection: data }))
      }
    })
  }
})

export default Controller
