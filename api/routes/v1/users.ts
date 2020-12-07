import { Router } from 'express'
import userController from '../../controllers/users'
import {userCreateValidator} from '../../middlewares/validators/users'


const userRouter = Router({
  mergeParams: true
})

userRouter.post('/users', userCreateValidator, userController.createUser)
userRouter.post('/users/bulk', userController.bulkUsers)


export default userRouter
