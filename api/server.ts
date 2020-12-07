import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import routes from './routes'

import logger from './utils/logger'
import {consumeNewsletterQueue, consumeRetryNewsletterQueue} from './utils/message_broker/consumer'
import startJob from './utils/cronjob'

// Load .ENV contants to process.env
dotenv.config()

const PORT: number = parseInt(process.env.PORT as string, 10)

if (!PORT) {
  logger.info(`Unable to obtain port ${PORT}`)
  process.exit(1)
}

const app = express()

try {
  app.use(helmet())
  app.use(cors())
  app.use(express.json())
  app.use(routes)

  app.listen(PORT, () => {
    logger.info(`\n\nServer is running on port ${PORT}\n`)
  })

  // Poll every 5 sec
  startJob('*/5 * * * * *', consumeNewsletterQueue)
  startJob('*/5 * * * * *', consumeRetryNewsletterQueue)
  
} catch (err) {
  console.log(err)
}
