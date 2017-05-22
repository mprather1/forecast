import WeatherModel from '../models/WeatherModel'
import url from 'url'

const WeatherCollection = Backbone.Collection.extend({
  initialize: function (model, options) {
    this.url = url.resolve(options.config['url'], '/api/weather/' + options.city)
  },
  model: WeatherModel,
  parse: function (response) {
    return response.list
  }
})

export default WeatherCollection
