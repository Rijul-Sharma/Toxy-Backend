import express from 'express'
import { uploadImage } from '../controllers/imageController.js'
import { upload } from '../config/cloudinary.js'

const router = express.Router()

router.post('/upload', upload.single('image'), uploadImage)

export default router
