import express from 'express'
import { UserBusiness } from '../business/UserBusiness'
import { UsersController } from '../controller/UserController'
import { UserDatabase } from '../database/UserDatabase'
import { IdGenerator } from '../services/IdGenerator'

export const userRouter = express.Router()

const userController = new UsersController(
    new UserBusiness(
        new UserDatabase(),
        new IdGenerator()
    )
)

// continuação (definição dos endpoints)