const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const { engine } = require('express-handlebars')

const app = express()

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

app.post('/post', (req, res) => {
  const { title, image, description } = req.body
  console.log('title', title)
  console.log('image', image)
  console.log('description', description)
  res.status(201).render('home', { pageTitle: 'Home', title: 'Home Page' })
})

app.listen(3000, () => {
  console.log('App is running')
})
