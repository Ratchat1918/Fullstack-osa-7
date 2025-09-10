import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from "react-router-dom"
import Menu from './components/Menu'
import AnecdoteList from './components/AnecdoteList'
import Footer from './components/Footer'
import CreateNew from './components/CreateNew'
import About from './components/About'

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])

  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
    setNotification(`a new ancdote ${anecdote.content}`)
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }
  const padding = {
    padding: 5
  }

  return (
    <div>
      <Router>
        <div>
            <Link style={padding} to="/">anecdotes</Link>
            <Link style={padding} to="/create">create new</Link>
            <Link style={padding} to="/about">about</Link>
            <p>{notification}</p>
        </div>
        <Routes>
          <Route path="/" element={<Menu></Menu>}></Route>
          <Route path="/create" element={<CreateNew addNew={addNew}></CreateNew>}></Route>
          <Route path="about" element={<About></About>}></Route>
        </Routes>
      </Router>
      <AnecdoteList anecdotes={anecdotes}></AnecdoteList>
      <Footer />
    </div>
  )
}

export default App