import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'

const PORT = 5000
const DB_URL = `mongodb+srv://ilyapetrenko0390:ilyapetrenko0390@cluster0.tmpbgqf.mongodb.net/?retryWrites=true&w=majority`

const app = express()

app.use(express.json())

app.use((req, res, next) => {
  // адреса вашого хосту на фронтенді
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5173')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  next()
})

app.use('/api', router)

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
    app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
  } catch (e) {
    console.log(e)
  }
}

startApp()
