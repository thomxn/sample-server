import { Router } from 'express'
import userController from '../../controllers/users'

const userRouter = Router({
  mergeParams: true
})

userRouter.post('/users', userController.createUser)

export default userRouter
