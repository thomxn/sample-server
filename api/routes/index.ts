import { Router } from 'express'
import userRouter from './v1/users'

const routes = Router()

routes.use('/api/v1', userRouter)

export default routes
