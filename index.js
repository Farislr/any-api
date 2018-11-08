import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import upload from './routes/upload'
import feat from './routes/feat'

let app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/', upload)
// app.use('/feat', feat)

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
