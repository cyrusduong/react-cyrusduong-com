import express from 'express'
import bodyParser from 'body-parser'
import { MongoClient } from 'mongodb'

import ArticleController from './controllers/article.ctrl'

const mongoURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/'
const dbName = 'test'
let articleController

const postDBConnect = (err, client) => {
  if (err) console.error('Failed connecting to mongoDB:', err)
  console.log('Connected to mongoDB server')

  // Create/Request the specified db
  const db = client.db(dbName)

  // Create articleController and attach to db
  articleController = new ArticleController(db)
}

MongoClient.connect(
  mongoURL,
  { useNewUrlParser: true },
  postDBConnect
)

const server = express()

/**
 * Configure CORS allow
 * See https://enable-cors.org/server_expressjs.html
 */
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

/**
 * Configure middleware to parse req.body
 * See http://expressjs.com/en/api.html
 */
server.use(bodyParser.json()) // for parsing application/json
server.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

/**
 * Configure routes
 */
server.get('/health_check', (req, res) => res.send('Server is UP'))
server.get('/article/:id', (req, res) =>
  res.send(articleController.getArticle(req.params.id))
)
server.post('/article', (req, res) => {
  console.log(req, res)
  res.send(articleController.createArticle(req.body))
})

/**
 * Spin up server
 */
let port = 5000 || process.env.PORT
server.listen(port, () => console.log(`Server running on port ${port}`))
