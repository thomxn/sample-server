const { config } = require('dotenv')
// Written in JS to ensure compatibility with seqielize-cli without requiring to build first

config()

module.exports = {
  username: String(process.env.DB_USER),
  password: String(process.env.DB_PASSWORD),
  database: String(process.env.DB_NAME),
  port: parseInt(process.env.DB_PORT, 10),
  dialect: String('postgres'),
  host: String(process.env.DB_HOST),
  pool: {
    max: 10,
    min: 5,
    acquire: 30000,
    idle: 100000
  }
}
