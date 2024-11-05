import express from 'express'
import dotenv from 'dotenv'
import connectToMongoDB from './db.js'
import router from './routes/authRouter.js'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 5000

dotenv.config()

app.use(express.json())
app.use(cors())

app.use('/api/auth', router)

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

