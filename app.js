const path = require('path')
const express = require('express')
const { engine } = require('express-handlebars')

const app = express()

app.engine('hbs', engine({ extname: 'hbs' }))
app.set('view engine', 'hbs')
app.set('views', './views')

app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => {
  res.render('home', { pageTitle: 'Home' })
})

app.get('/register', (req, res) => {
  res.render('register', {
    title: 'Register',
    pageTitle: 'Register',
    register: true
  })
})

app.listen(3000, () => {
  console.log('App is running')
})
