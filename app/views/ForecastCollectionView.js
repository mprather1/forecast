import ForecastItemView from './ForecastItemView'

const ForecastCollectionView = Backbone.Marionette.CollectionView.extend({
  childView: ForecastItemView,
  tagName: 'ul'
})

export default ForecastCollectionView
