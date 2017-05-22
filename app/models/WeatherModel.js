const WeatherModel = Backbone.Model.extend({
  parse: function (result) {
    const object = {
      current_temp: result.temp,
      temp_max: result.temp_max,
      temp_min: result.temp_min,
      humidity: result.humidity
    }

    return object
  }
})

export default WeatherModel
