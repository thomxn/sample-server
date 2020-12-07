import {CronJob} from 'cron'
import logger from './logger'

const startJob = (cronTab, callback) => {
  try{
    new CronJob(cronTab, () => {
      callback()
          .catch((err) => {
            logger.error('CRON', err);
          });
    }).start();

  }catch(err) {
    console.log(err);
  }

  };

export default startJob