import Togglable from "./Togglable"
import { useSelector, useDispatch } from 'react-redux'
import  {addLikeToBlog } from '../reducers/blogReducer'

const Blog = ({ blog }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
    marginLeft: 10
  }
  const dispatch=useDispatch()
  let blogs=useSelector(state=>{
    return state.blogs
  })
  blogs= [...blogs].sort((a, b) => b.likes - a.likes)
  function addLike(blogId){
    dispatch(addLikeToBlog(blogId))
  }
  return(
    <div className="blog" style={blogStyle}>
      {blogs.map(blog=>
        <div key={blog.id}>
          {blog.title}
          <label>
            <Togglable data-testid='view' buttonLabel="view">
              <div>
                <p>{blog.url} {blog.likes}<button onClick={()=>addLike(blog.id)}>Like</button> {blog.author}</p>
                </div>
                </Togglable>
          </label>
          </div>
      )}
  </div>
  )
}

export default Blog