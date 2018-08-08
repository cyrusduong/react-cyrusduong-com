import express from 'express'
import { MongoClient } from 'mongodb'

const mongoURL = process.env.MONGODB_URI || 'mongodb://localhost:32769/'
const dbName = 'test'
let db

const postDBConnect = (err, client) => {
  if (err) console.error('Failed connecting to mongoDB:', err)
  console.log('Connected to mongoDB server')

  // Create/Request the specified db
  db = client.db(dbName)
}

MongoClient.connect(
  mongoURL,
  postDBConnect
)

const server = express()

/**
 * Configure routes
 */
server.get('/health_check', (req, res) => res.send('Server is UP'))

/**
 * Spin up server
 */
let port = 5000 || process.env.PORT
server.listen(port, () => console.log(`Server running on port ${port}`))
