const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const { engine } = require('express-handlebars')

const routes = require('./routes/routes')

const app = express()
dotenv.config()

app.engine('hbs', engine({ extname: 'hbs' }))
app.set('view engine', 'hbs')
app.set('views', './views')

app.use(express.static(path.join(__dirname, '/public')))

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', routes)

app.use('/', (req, res) => {
  res.status(404).render('errorPage', { pageTitle: '404' })
})

app.listen(3000, async () => {
  console.log('App is running')
  await mongoose.connect(process.env.DB_CONN)
})
