import request from 'request'
import path from 'path'
import url from 'url'

export default function getAllRoutes (options) {
  const {config} = options
  const queries = {}

  queries.getCurrentWeatherData = async (req, res, next) => {
    const city = await getCity(req.params.city_name, config)

    request(url.resolve('http://api.openweathermap.org/data/2.5/', 'forecast?id=' + city.id + '&APPID=8e8e74551334e207d61aeca980950b06&units=imperial'))
      .pipe(res)
  }

  return queries
}

function getCity (name, config) {
  var cities = require(path.join(config.parentDir, 'cities.json'))

  for (var i = 0; i < cities.length; i++) {
    if (cities[i].name === name) {
      return cities[i]
    }
  }
}
