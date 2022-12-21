require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const connectDB = require('./config/dbConn')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3500
const corsOptions = require('./config/corsOptions')

app.use(cors(corsOptions))

connectDB()

app.use(express.json())

app.use('/', require('./routes/root'))

app.use('/api/cards', require('./routes/cardsRoutes'))

app.all('*', (req, res) => {
  res.status(404)
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'))
  } else if (req.accepts('json')) {
    res.json({ message: '404 Not Found' })
  } else {
    res.type('txt').send('404 Not Found')
  }
})

mongoose.connection.once('open', () => {
  console.log('Connected to DB')
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})