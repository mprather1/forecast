const WeatherModel = Backbone.Model.extend({
  parse: function (result) {
    const object = {
      date: result.dt_txt,
      description: result.weather[0].description,
      current_temp: result.main['temp'],
      temp_min: result.main['temp_min'],
      temp_max: result.main['temp_max']
    }

    return object
  }
})

export default WeatherModel
