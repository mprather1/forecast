import 'babel-polyfill'
import config from './_config'
import express from 'express'
import bodyParser from 'body-parser'
import {Server} from 'http'
import path from 'path'
import morgan from 'morgan'
import winston from 'winston-color'
import chalk from 'chalk'
import favicon from 'serve-favicon'
import getRouter from './routes'
import pkg from '../package.json'

const _parentDir = path.dirname(__dirname)

const options = {
  app: express(),
  port: process.env.PORT || 8000,
  environment: process.env.NODE_ENV || 'development',
  logger: winston,
  packageName: pkg.name,
  config: config
}
options.config.parentDir = _parentDir

const { app, environment, port, logger, packageName } = options
const router = getRouter(options)
const server = Server(app)

if (environment !== 'test') {
  app.use(morgan('dev'))
}

app.use(favicon(path.join(__dirname, 'resources', 'images', 'favicon.png')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/css', express.static(path.join(_parentDir, 'node_modules', 'bootstrap', 'dist', 'css')))
app.use(express.static(path.join(__dirname, 'static')))

app.use('/api', router)

server.listen(port, () => {
  if (environment !== 'test') {
    logger.info(`${chalk.bgBlack.cyan(packageName)} listening on port ${port}...`)
  }
})

const serverConfig = {
  server: server,
  options: options
}

export default serverConfig
