const ForecastItemView = Backbone.Marionette.View.extend({
  tagName: 'li',
  template: require('../templates/forecast-item-view-template.html'),
  serializeData: function () {
    return {
      'date': this.model.get('date'),
      'weather_description': this.model.get('weather').description
    }
  }
})

export default ForecastItemView
