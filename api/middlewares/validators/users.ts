import {body} from 'express-validator'

export const userCreateValidator = [
    body('firstName')
    .exists()
    .not().isEmpty().withMessage('First Name should not be empty'),
    body('lastName')
    .exists()
    .not().isEmpty().withMessage('Last Name not be empty'),
    body('email')
    .exists()
    .isEmail().withMessage('Invalid email'),
    body('age')
    .exists()
    .not().isEmpty().withMessage('Age should not be empty')    
]