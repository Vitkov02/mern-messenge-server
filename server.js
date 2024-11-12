import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import connectToMongoDB from './db.js'

import authRouter from './routes/authRouter.js'
import messageRoutes from './routes/messageRouter.js'
import userRoutes from './routes/userRouter.js'

import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 5000

dotenv.config()

app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use('/api/auth', authRouter)
app.use('/api/messages', messageRoutes)
app.use('/api/users', userRoutes)

const start = async() => {
    try {
        await connectToMongoDB()

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()

// test