import express from 'express'
import {models} from './queries'

export default function getRouter (options) {
  const router = express.Router()

  router.route('/weather/:city_name')
    .get(models(options).getCurrentWeatherData)

  return router
}
