import { Request, Response } from 'express'
import { GetThirdPartyMenu } from './menu.service'
import {Cache} from '../cacher/cacher' 

export const GetMenu = async (_req: Request, res: Response) => {
    const menu = await Cache(60 * 24, GetThirdPartyMenu)

    res.status(200).json(menu)
}