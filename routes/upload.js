import express from 'express'
import redis from 'redis'

const router = express.Router()
const client = redis.createClient()
const auth = 'Bearer f4m0c01d'

router.use((req, res, next) => {
  if (req.headers.authorization === auth) {
    next()
  } else {
    res.send('Unauthorized')
  }
})

router.post('/upload', (req, res) => {
  console.log(req.body)
  client.set('transactions', JSON.stringify({data: req.body}))
  client.get('transactions', (err, result) => {
    console.log(result)
    console.log(err)
    res.json(JSON.parse(result))
  })
})

export default router
