import WeatherCollectionView from './WeatherCollectionView'

const WeatherView = Backbone.Marionette.View.extend({
  initialize: function (options) {
  },
  template: require('../templates/weather-view-template.html'),
  regions: {
    body: {
      el: '#weather-view'
    }
  },
  tagName: 'div',
  onRender: function () {
    this.showChildView('body', new WeatherCollectionView({ collection: this.collection }))
  }

})

export default WeatherView
