import { Request, Response } from 'express'
import logger from '../utils/logger'
import userService from '../services/users'

const getUsers = async (req: Request, res: Response) => {
  try {
    logger.info(req.headers)
    const response = await userService.getUsers()

    logger.info(response)

    return res.status(200).send(response)
  } catch (err) {
    logger.error(err)
    return res.status(500).send(err)
  }
}

const createUser = async (req: Request, res: Response) => {
  try {
    logger.info(req.headers)
    const response = await userService.createUser(req.body)

    logger.info(response)

    return res.status(200).send(response)
  } catch (err) {
    logger.error(err)
    return res.status(500).send(err)
  }
}

export default {
  getUsers,
  createUser
}
