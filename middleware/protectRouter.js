import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'

const protectRouter = async (req, res, next) => {
    try {
        const token = req.cookies.jwt
        if(!token) {
            return res.status(401).json({ error: 'Unauthorized - No Token Provided'})
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY)
        if(!decode) {
            return res.status(401).json({error: 'Unauthorized - Invalid Token'})
        }

        const user = await User.findById(decode.userId).select('-password')

        req.user = user

        next()

    } catch (error) {
        console.log('error in protectRouter middleware', error.message)
        res.status(500).json({error: 'Internal server error'})
    }
}

export default protectRouter