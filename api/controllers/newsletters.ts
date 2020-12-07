import { Request, Response } from 'express'
import logger from '../utils/logger'
import csvtojson from 'csvtojson'


import {publishNewsletterQueue} from '../utils/message_broker/init'
import {uploadFile} from '../utils/files'

const sendBulkNewsletters = async (req: Request, res: Response) => {
  try {
    logger.info(req.headers)
    await uploadFile(req, res)

    let newsletter;

    const data = await csvtojson({
      noheader: true,
      output: 'json',
      delimiter: ','
    }).
    fromString(req.file.buffer.toString())

    data.forEach(row => {
      const elements = row['field1'].split(';')
      newsletter = {
        email: elements[0],
        nw_content: elements[1],
        nw_name:elements[2]
      }
      publishNewsletterQueue(JSON.stringify(newsletter))

    });


    return res.status(204).send()
  } catch (err) {
    logger.error(err)
    return res.status(500).send(err)
  }
}

export default {
    sendBulkNewsletters
}
