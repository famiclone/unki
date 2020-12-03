const express = require('express')
const app = express()
const config = require('./config')
const db = require('./db')

db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () => {
  console.log('Connected!')
})

app.use('/api/user', require('./routes/users/users.js'))
// app.use('/api/decks/:id', require('./routes/decks/decks'))

app.listen(config.PORT, () => `API started at http://localhost:${config.PORT}`)
