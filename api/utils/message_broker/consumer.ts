import amqp from 'amqplib/callback_api'
import {publishRetryNewsletterQueue} from './init'

const MQ_URI = String(process.env.MQURI)

export const consumeNewsletterQueue = async () => {
  amqp.connect(MQ_URI, (errConn, conn) => {
    if (errConn) {
      console.log('MQ ConnErr', errConn)
      return
    }

    conn.createChannel((errCh, ch) => {
      if (errCh) {
        console.log('MQ ChErr', errCh)
        return
      }

      const queueName= 'newsletter'

      ch.consume(queueName, message => {
        try{
            // sendEmail
            console.log(message?.content.toString())
        }
        catch(err){
            // OnError
            publishRetryNewsletterQueue(err)
        }
      }),
        {
          noAck: true
        }
    })
  })
}

export const consumeRetryNewsletterQueue = async queueName => {
    amqp.connect(MQ_URI, (errConn, conn) => {
      if (errConn) {
        console.log('MQ ConnErr', errConn)
        return
      }
  
      conn.createChannel((errCh, ch) => {
        if (errCh) {
          console.log('MQ ChErr', errCh)
          return
        }
        queueName = 'parking-lot-queue'
  
        ch.consume(queueName, message => {
            try{
                console.log(message?.content.toString())
            }
            catch(err){
                console.log(err);
            }
          
        }),
          {
            noAck: true
          }
      })
    })
  }
  
