const path = require('path')
const express = require('express')
const { engine } = require('express-handlebars')

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(3000, () => {
  console.log('App is running')
})
