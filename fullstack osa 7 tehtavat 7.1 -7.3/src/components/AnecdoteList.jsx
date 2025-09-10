import { BrowserRouter as Router, Routes, Route, Link, useParams} from "react-router-dom"
const AnecdoteList = ({ anecdotes }) => (
  <Router>
    <div>
      <h2>Anecdotes</h2>
      <ul>
        {anecdotes.map(anecdote => 
        <Link  to={`/anecdotes/${anecdote.id}`}><li key={anecdote.id} >{anecdote.content}</li></Link>)}
      </ul>
    </div>
    <Routes>
      {anecdotes.map(anecdote=><Route path={"/anecdotes/:id"} 
      element={<AnecdoteInfo anecdotes={anecdotes} id={anecdote.id}></AnecdoteInfo>}></Route>)}
    </Routes>
  </Router>
)
const AnecdoteInfo=({anecdotes})=>{
  const id=useParams().id
  const anecdote= anecdotes.find(n=>n.id===Number(id))
  return(
    <div>
      <h2>{anecdote.content} by {anecdote.author}</h2>
      <p>has {anecdote.vote} votes</p>
      <p>for more info see {anecdote.info}</p>
    </div>
  )
}
export default AnecdoteList