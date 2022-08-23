import express from 'express'
import admin from '../middleware/admin.js'
import * as auth from '../middleware/auth.js'
import {
  createOrder,
  getOrder,
  getOrders,
  deleteOrders
} from '../controllers/orders.js'

const router = express.Router()

router.post('/', auth.jwt, createOrder)

router.get('/', auth.jwt, getOrder)

router.get('/all',auth.jwt, admin, getOrders)

router.delete('/:id',auth.jwt, admin, deleteOrders)

export default router

