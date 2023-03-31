const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const { engine } = require('express-handlebars')

const Post = require('./model/Post')

const app = express()
dotenv.config()

app.engine('hbs', engine({ extname: 'hbs' }))
app.set('view engine', 'hbs')
app.set('views', './views')

app.use(express.static(path.join(__dirname, '/public')))

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.render('home', { pageTitle: 'Home', title: 'Home Page' })
})

app.get('/register', (req, res) => {
  res.render('register', {
    title: 'Register',
    pageTitle: 'Register',
    register: true
  })
})

app.get('/login', (req, res) => {
  res.render('login', { title: 'Login', pageTitle: 'Login', login: true })
})

app.get('/post', (req, res) => {
  res.render('create-post', { pageTitle: 'New Post', newPost: true })
})

app.post('/post', async (req, res) => {
  const { title, image: imageUrl, description } = req.body

  const newPost = new Post({ title, imageUrl, description })

  await newPost.save()
  res.status(201).render('home', { pageTitle: 'Home', title: 'Home Page' })
})

app.use('/', (req, res) => {
  res.status(404).render('errorPage', { pageTitle: '404' })
})

app.listen(3000, async () => {
  console.log('App is running')
  await mongoose.connect(process.env.DB_CONN)
})
