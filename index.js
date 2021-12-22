const express = require('express')
const next = require('next')
const cookies = require('cookie-parser')
const mongoose = require('mongoose')
const { randomUUID } = require("crypto")

const app = next({ dev: false })
const handle = app.getRequestHandler()

const config = require('./config')
const session = require('./models/session')
mongoose.connect(config.mongo, {
  useNewURLParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB')
})

app.prepare().then(() => {
  const server = express()
  server.use(cookies(), express.json())
  server.use(async (req, res, next) => {
    let dbSession = await session.findOne({ token: req.cookies.session })
    if (!req.cookies.session || !dbSession) {
      dbSession = await session.create({ token: `${randomUUID()}.${randomUUID()}` })
      res.cookie('session', dbSession.token, { maxAge: 1000 * 60 * 60 * 24 * 365 })
    }
    req.session = dbSession
    next()
  })
  server.use("/api", require('./routes/api'))
  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(config.port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${config.port}`)
  })
})