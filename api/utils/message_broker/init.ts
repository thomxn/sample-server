import amqp, { Channel } from 'amqplib/callback_api'

const MQ_URI = String(process.env.MQURI)

let ch: Channel

amqp.connect(MQ_URI, (errConn, conn) => {
  if (errConn) {
    console.log('MQ ConnErr', errConn)
    return
  }

  conn.createChannel((errCh, channel) => {
    if (errCh) {
      console.log('MQ ChErr', errCh)
      return
    }
    ch = channel
  })
})

const publishToQueue = (queueName, data) => {
  ch.sendToQueue(queueName, Buffer.from(data))
}



export const publishNewsletterQueue = data => publishToQueue('newsletter', data)

export const publishRetryNewsletterQueue = data =>
  publishToQueue('parking-lot-queue', data)

process.on('exit', code => {
  ch.close(err => {
    console.log('Error Closing message channel', err)
  })
  console.log('Closing message channel', code)
})
