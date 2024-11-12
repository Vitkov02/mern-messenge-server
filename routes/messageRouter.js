import express from 'express'
import { sendMessage } from '../controllers/MessageController.js'
import protectRouter from '../middleware/protectRouter.js'

const router = express.Router()

router.post('/send/:id', protectRouter, sendMessage)

export default router