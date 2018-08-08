import express from 'express'
import mongoose from 'mongoose'

const url = process.env.MONGODB_URI || 'mongodb://localhost:32769/test'

/** connect to MongoDB datastore */
try {
  mongoose.connect(
    url,
    { useNewUrlParser: true }
  )
} catch (error) {
  console.log('Error attempting to connect to mongoDB. Exiting...')
}

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
