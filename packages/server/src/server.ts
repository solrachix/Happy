import './utils/stringReplaceAll'

import express from 'express'
import cors from 'cors'
import path from 'path'
import 'express-async-errors'

import errorHandler from './error/handler'

import routes from './routes'

import './database/connection'

require('dotenv').config()

const app = express()
const port = process.env.PORT_APP || 3333

app.use(express.json())
app.use(cors())

app.use('/v1', routes)

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server running in port: ${port}`)
})
