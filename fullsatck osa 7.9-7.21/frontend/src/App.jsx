import { useState, useEffect, useRef } from 'react' 
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import Togglable from './components/Togglable'
import BlogForm from './components/BlogForm'
import {  useDispatch } from 'react-redux'
import { initializeBlogs } from './reducers/blogReducer'

const App = () => {
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState("")
  const [user, setUser] = useState(null)

  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(initializeBlogs())
  const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
  if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON)
    setUser(user)
    blogService.setToken(user.token)
  }
}, [])

   const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })
      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      ) 
      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setTimeout(() => {
      }, 5000)
    }
  }
  const loginForm=()=>(
    <form onSubmit={handleLogin}>
        <div>
          username
            <input
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password
            <input
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
  )
  const logOut=()=>{
    window.localStorage.removeItem("loggedBlogappUser")
    location.reload();
  }

  return (
    <div>
      Blogs
      {!user && loginForm()}
      {user && <div>
        <h1>{user.name} logged in <button onClick={logOut}>logout</button></h1>
        <Blog></Blog>
      </div>} 
        Blog App
        <Togglable data-testid="add blog" buttonLabel="add blog"><BlogForm/></Togglable>
    </div>
  )
}

export default App