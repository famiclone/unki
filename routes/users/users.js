const express = require('express')
const router = express.Router()
const User = require('../../models/user')

/**
 * GET /user/:id
 * Private
 */
router.get('/:id', async (req, res) => {
  const user = User.findById(req.params.id)

  if (!user) {
    res.status(404).json({
      message: 'User not found.'
    })
  }
  res.json(user)
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
