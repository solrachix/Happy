/* eslint-disable import/first */

import { Router } from 'express'
import multer from 'multer'

import multerConfig from './config/multer'

const routes = Router()
const upload = multer(multerConfig)

/**
 * Rota /
 */
routes.get('/', (req, res) => {
  return res.json({
    app: '#3 NLW - Next Level Week',
    author: 'Carlos Miguel',
    email: 'carlos.miguel.oliveira.17@gmail.com'
  })
})

/**
 * Rota "orphanages"/
 * default Controllers = index, show, create, update, delete
 */

import OrphanagesController from './controllers/OrphanagesController'
routes.get('/orphanages', OrphanagesController.index)
routes.get('/orphanages/:id', OrphanagesController.show)
routes.post('/orphanages', upload.array('images'), OrphanagesController.create)

export default routes
