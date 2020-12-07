import { Router } from 'express'
import userController from '../../controllers/users'
import {userCreateValidator} from '../../middlewares/validators/users'


const userRouter = Router({
  mergeParams: true
})

userRouter.post('/users', userCreateValidator, userController.createUser)


export default userRouter
