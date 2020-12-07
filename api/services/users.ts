/* tslint:disable */
import DB from '../models'
import { UserCreationAttributes } from '../models/user'

const getUsers = async () => {
  const user = await DB.Users.findByPk(1, {
    include: [{
      association: DB.Users.associations.addresses,
      required: false
    }]
  })

  return user?.toJSON()
}

const createUser = (body: UserCreationAttributes) => {
  return DB.Users.create(body)
}

export default {
  getUsers,
  createUser
}
