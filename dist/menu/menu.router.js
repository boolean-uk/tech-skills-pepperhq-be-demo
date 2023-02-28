import express from 'express';
import { GetMenu } from './menu.controller';
export const MenuRouter = express.Router();
MenuRouter.get('/', GetMenu);
