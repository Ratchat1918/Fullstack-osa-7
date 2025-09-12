const Note = require('./models/note')
const Blog=require('./models/blog')

const initialNotes = [
  {
    content: 'HTML is easy',
    important: false,
  },
  {
    content: 'Browser can execute only JavaScript',
    important: true,
  },
]
const initialBlogs = [
  
  {
    "title": "name",
    "author": "me",
    "url": "http://fakeblog.fi",
    "likes": 3,
    "id": "689f1818a673dff3efdef961"
  },
  {
    "title": "mame",
    "author": "somebody",
    "url": "http://fakeblog2.fi",
    "likes": 2,
    "id": "689f1818a673dff3efdef961"
  },
]

const nonExistingId = async () => {
  const note = new Note({ content: 'willremovethissoon' })
  await note.save()
  await note.deleteOne()

  return note._id.toString()
}

const notesInDb = async () => {
  const notes = await Note.find({})
  return notes.map((note) => note.toJSON())
}
const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map((blog) => blog.toJSON())
}

module.exports = {
  initialNotes,
  initialBlogs,
  nonExistingId,
  notesInDb,
  blogsInDb
}