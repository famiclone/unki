const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  res.send('Not implemented')
})

router.get('/:id', async (req, res) => {
  res.send(req.params)
})

router.post('/', async (req, res) => {
  res.send('Not implemented')
})

router.put('/:id', async (req, res) => {
  res.send('Not implemented')
})

router.delete('/:id', async (req, res) => {
  res.send('Not implemented')
})

module.exports = router
