import express from 'express'

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
