const mongoose = require('mongoose')
const { Schema } = mongoose

const postSchema = Schema({
  title: { type: String, required: true },
  imageUrl: { type: String, required: true },
  description: String
})

module.exports = mongoose.model('Post', postSchema)
