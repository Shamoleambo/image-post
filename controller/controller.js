const Post = require('../model/Post')

exports.getHomePage = async (req, res) => {
  const posts = await Post.find({}).lean()
  res.render('home', { pageTitle: 'Home', title: 'Home Page', posts })
}

exports.getRegisterPage = (req, res) => {
  res.render('register', {
    title: 'Register',
    pageTitle: 'Register',
    register: true
  })
}

exports.getLoginPage = (req, res) => {
  res.render('login', { title: 'Login', pageTitle: 'Login', login: true })
}

exports.getCreatePostPage = (req, res) => {
  res.render('create-post', { pageTitle: 'New Post', newPost: true })
}

exports.createNewPost = async (req, res) => {
  const { title, image: imageUrl, description } = req.body

  const newPost = new Post({ title, imageUrl, description })

  const posts = await Post.find({}).lean()
  await newPost.save()
  res
    .status(201)
    .render('home', { pageTitle: 'Home', title: 'Home Page', posts })
}
