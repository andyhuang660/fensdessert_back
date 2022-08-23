import express from 'express'
import content from '../middleware/content.js'
import * as auth from '../middleware/auth.js'
import admin from '../middleware/admin.js'
import upload from '../middleware/upload.js'
import {
  createNews,
  getNews,
  editNews
} from '../controllers/news.js'

const router = express.Router()

router.post('/', content('multipart/form-data'), auth.jwt, admin, upload, createNews)
router.get('/', getNews)
router.patch('/:id', content('multipart/form-data'), auth.jwt, admin, upload, editNews)

export default router