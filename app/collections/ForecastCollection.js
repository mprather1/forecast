import Forecast from '../models/Forecast'
import url from 'url'

const ForecastCollection = Backbone.Collection.extend({
  model: Forecast,
  initialize: function (model, options) {
    this.url = url.resolve(options.config['url'], '/api/forecast/' + options.city)
  },
  parse: function (response) {
    return response.list
  }
})

export default ForecastCollection
