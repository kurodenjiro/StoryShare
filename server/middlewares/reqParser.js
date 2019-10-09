import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import cors from 'cors'

export default () => ([
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
  cookieParser(),
  cors()
])
