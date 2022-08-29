import express from 'express'
import content from '../middleware/content.js'
import {
  createForm,
  getForm,
} from '../controllers/contacts.js'

const router = express.Router()

router.post('/', content('application/json'), createForm)
router.get('/', getForm)

export default router