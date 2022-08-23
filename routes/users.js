import express from 'express'
import * as auth from '../middleware/auth.js'
import content from '../middleware/content.js'
import admin from '../middleware/admin.js'
import {
  register,
  login,
  logout,
  getUser,
  getAllUser,
  extend,
  addCart,
  getCart,
  editCart,
  deleteUser
} from '../controllers/users.js'


// 建立 router
const router = express.Router()

router.post('/', content('application/json'), register)
router.post('/login', content('application/json'), auth.login, login)
router.delete('/logout', auth.jwt, logout)
router.post('/extend', auth.jwt, extend)
router.get('/all', auth.jwt, getAllUser)
router.get('/', auth.jwt, getUser)
router.delete('/:id', auth.jwt, admin, deleteUser)
router.post('/cart', content('application/json'), auth.jwt, addCart)
router.patch('/cart', content('application/json'), auth.jwt, editCart)
router.get('/cart', auth.jwt, getCart)


export default router