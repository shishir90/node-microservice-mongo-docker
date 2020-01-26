const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const api = require('../api/users')
// const swaggerUi = require('swagger-ui-express')
const version = 'v1';

const start = (options) => {
  return new Promise((resolve, reject) => {
    if (!options.repo) {
      reject(new Error('The server must be started with a connected repository'))
    }
    if (!options.port) {
      reject(new Error('The server must be started with an available port'))
    }

    const app = express()
    app.use(morgan('dev'))
    app.use(helmet())
    // app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

    app.use((err, req, res, next) => {
      reject(new Error('Oh Pants! Something went wrong! ' + err))
      res.status(500).send('Doh! Something went wrong!')
    })
    
    app.use(`/${version}`, api)

    api(app, options)

    const server = app.listen(options.port, () => resolve(server))
  })
}

module.exports = Object.assign({}, {start})
