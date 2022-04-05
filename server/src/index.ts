import express, { Request, Response } from 'express'
import cookieSession from 'cookie-session'
import './controllers/LoginController'
import './controllers/RootController'
import { AppRouter } from './AppRouter'

const app = express()
const port: number = 3000

app.use(express.urlencoded({ extended: true }))
app.use(cookieSession({ keys: ['done'] }))
app.use(AppRouter.getInstance())

app.listen(port, () => {
  console.log(`Server started and listening at port ${port}`)
})
