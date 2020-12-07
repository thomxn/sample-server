import { Request, Response } from 'express'
import logger from '../utils/logger'
import userService from '../services/users'
import {
  validationResult
} from 'express-validator';

const createUser = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).send
        (errors.mapped());
    }

    const response = await userService.createUser(req.body)
    logger.info(response)

    return res.status(200).send(response)
  } catch (err) {
    logger.error(err)
    return res.status(500).send(err)
  }
}
export default {
  createUser
}
