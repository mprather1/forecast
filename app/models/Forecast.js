const Forecast = Backbone.Model.extend({
  parse: function (response) {
    const object = {
      date: response.dt_txt,
      weather: response.weather[0],
      wind: response.wind,
      main: response.main
    }
    return object
  }
})

export default Forecast
