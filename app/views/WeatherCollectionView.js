import WeatherItemView from './WeatherItemView'

const WeatherCollectionView = Backbone.Marionette.CollectionView.extend({
  childView: WeatherItemView,
  tagName: 'ul'
})

export default WeatherCollectionView
