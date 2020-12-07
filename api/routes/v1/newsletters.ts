import { Router } from 'express'
import newsletterController from '../../controllers/newsletters'


const newsletterRouter = Router({
  mergeParams: true
})

newsletterRouter.post('/newsletters/bulk', newsletterController.sendBulkNewsletters)


export default newsletterRouter
