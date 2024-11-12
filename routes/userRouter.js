import express from 'express'
import protectRouter from '../middleware/protectRouter.js'
import {getUserForSidebar} from '../controllers/UserController.js'

const router = express.Router()

router.get('/', protectRouter, getUserForSidebar)

export default router