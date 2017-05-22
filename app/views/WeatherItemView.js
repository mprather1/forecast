const WeatherItemView = Backbone.Marionette.View.extend({
  tagName: 'li',
  template: require('../templates/weather-item-view-template.html')
})

export default WeatherItemView
