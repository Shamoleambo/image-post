const express = require('express')
const router = express.Router()

const Post = require('../model/Post')

router.get('/', (req, res) => {
  res.render('home', { pageTitle: 'Home', title: 'Home Page' })
})

router.get('/register', (req, res) => {
  res.render('register', {
    title: 'Register',
    pageTitle: 'Register',
    register: true
  })
})

router.get('/login', (req, res) => {
  res.render('login', { title: 'Login', pageTitle: 'Login', login: true })
})

router.get('/post', (req, res) => {
  res.render('create-post', { pageTitle: 'New Post', newPost: true })
})

router.post('/post', async (req, res) => {
  const { title, image: imageUrl, description } = req.body

  const newPost = new Post({ title, imageUrl, description })

  await newPost.save()
  res.status(201).render('home', { pageTitle: 'Home', title: 'Home Page' })
})

module.exports = router
