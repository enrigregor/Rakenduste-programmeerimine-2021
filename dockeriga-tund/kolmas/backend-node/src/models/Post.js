const { Schema, model } = require('mongoose')

const postSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  title: { type: String, required: true },
  email: { type: String, required: true },
  id: { type: Number, required: true },
});

const Post = model("Post", postSchema)

module.exports = Post