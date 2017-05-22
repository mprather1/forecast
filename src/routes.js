import express from 'express'
import {models} from './queries'

export default function getRouter (options) {
  const router = express.Router()

  router.route('/current_weather/:city_name')
    .get(models(options).getCurrentWeatherData)

  router.route('/forecast/:city_name')
    .get(models(options).getForecast)

  return router
}
