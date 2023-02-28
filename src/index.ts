import express, { Express } from 'express'
import dotenv from 'dotenv'
import { MenuRouter } from './menu/menu.router'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 3030

app.use("/menu", MenuRouter)

app.listen(port, () => {
    console.log('server is running on', port)
})
