import { Router } from 'express'
import userRouter from './v1/users'
import newsletterRouter from './v1/newsletters'


const routes = Router()

routes.use('/api/v1', userRouter, newsletterRouter )

export default routes
