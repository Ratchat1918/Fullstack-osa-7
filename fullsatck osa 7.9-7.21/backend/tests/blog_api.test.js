const express = require('express')
const app = express()
const blogsRouter = require('../controllers/blogs.js')
const supertest = require('supertest')
const assert = require('assert')
const Blog=require('./models/blog.js')
const api = supertest(app)
app.use(express.json())
app.use('/api/blogs', blogsRouter)

module.exports = app
beforeEach(async () => {
  await Blog.deleteMany({})
  await Blog.insertMany(helper.initialBlogs)
})

test('all notes are returned', async () => {
    const response = await api.get('/api/blogs')
    assert.strictEqual(response.body.length, helper.initialBlogs.length)
  })

test('blog posts is named id noi _id', async () => {
  const response=await api
  .get('/api/blogs')
  .expect(200)
  .expect('Content-Type', /application\/json/)
  const keys=Object.keys(response);
  assert(keys.includes("id"))
})

test('a valid blog can be added ', async () => {
  const newBlog = {
    "title": "kame",
    "author": "somebody2",
    "url": "http://fakeblog3.fi",
    "likes": 55,
    "id": "689f1818a673dff3efdef961asas"
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const blogsAtEnd = await helper.blogssInDb()
  assert.strictEqual(blogsAtEnd.length, helper.initialBlogs.length + 1)

  const contents = notesAtEnd.map((n) => n.content)
  assert(contents.includes('async/await simplifies making async calls'))
})