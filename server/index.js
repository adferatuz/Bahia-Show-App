import express from 'express'
import fileupload from 'express-fileupload'
import cors from 'cors'
import bodyParser from 'body-parser'

import indexRoutes from './routes/index.routes'
import imagesRoutes from './routes/imagenes.route'
import usersRoutes from './routes/users.routes'

const morgan = require('morgan')

import config from './config'
import './database'

const app = express()
const whiteList = [config.Cors]

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(cors({ origin: whiteList }))
app.set('port', process.env.PORT || 4000)

app.use(fileupload({
    tempFileDir: '/temp'
}))

//middlewares
app.use(morgan('dev'))

//Rutas
app.use(indexRoutes)
app.use(imagesRoutes)
app.use(usersRoutes)

app.listen(app.get('port'))
console.log('Server on port: ', app.get('port'))