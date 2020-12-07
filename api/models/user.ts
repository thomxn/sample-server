import {
  Sequelize,
  DataTypes,
  Optional,
  Model
} from 'sequelize'

interface UserAttributes {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  age: number
}

// You can also set multiple attributes optional at once
export interface UserCreationAttributes
  extends Optional<UserAttributes, 'id'> {}

export class User extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes {
  public id: number
  public firstName: string
  public lastName: string
  public email: string
  public age: number

  // timestamps!
  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

export default function (sequelize: Sequelize): typeof User {
  User.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      firstName: {
        allowNull: false,
        type: DataTypes.STRING(48),
        unique: true
      },
      lastName: {
        allowNull: false,
        type: DataTypes.STRING(48)
      },
      email: {
        allowNull: true,
        type: DataTypes.STRING
      },
      age: {
        allowNull: true,
        type: DataTypes.FLOAT
      }
    },
    {
      tableName: 'users',
      sequelize
    }
  )

  return User
}
