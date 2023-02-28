import express from 'express'
import apicache from 'apicache'
import { GetMenu } from './menu.controller'

const cache = apicache.middleware

export const MenuRouter = express.Router()

MenuRouter.get('/', cache('5 minutes'), GetMenu)