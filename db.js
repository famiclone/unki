const DB_NAME = process.env.DB_NAME
const USER_NAME = process.env.DB_USER
const USER_PASS = process.env.DB_PASS
const DB_HOST = process.env.DB_HOST

const mongoose = require('mongoose')
const urlString = `mongodb://${USER_NAME}:${USER_PASS}@${DB_HOST}:27017/${DB_NAME}?retryWrites=true&w=majority`
mongoose.connect(urlString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
module.exports = mongoose.connection
