import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBlogs } from '../reducers/blogReducer'

const BlogForm = ()=>{
    const [newUrl,setNewurl]=useState("")
    const [newAuthor,setNewauthor]=useState("")
    const [newTitle,setNewtitle]=useState("")
    const dispatch=useDispatch()

    const newTitleFunc=event=>{
        setNewtitle(event.target.value)
    }
    const newAuthorFunc=event=>{
        setNewauthor(event.target.value)
    }
    const newUrlFunc=event=>{
        setNewurl(event.target.value)
    }
    
    const createBlog= async (event)=>{
        event.preventDefault()
        const blogObject = {
            title:newTitle,
            author:newAuthor,
            url:newUrl,
            likes:Math.floor(Math.random()*100),
        }
        dispatch(addBlogs(blogObject))
        setNewauthor("")
        setNewtitle("")
        setNewurl("")
    }
    return(
        <>
        <h2>create new blog</h2>
        <form onSubmit={createBlog}>
            <label>
                title
                <input data-testid="title" type='text' value={newTitle} onChange={newTitleFunc} name="title:"></input><br></br>
            </label>
            <label>
                author
                <input type='text' value={newAuthor} onChange={newAuthorFunc} name="author:"></input><br></br>
            </label>
            <label>
                url
                <input type='text'value={newUrl} onChange={newUrlFunc} name="url:"></input><br></br>
            </label>
            <button type='submit'>create</button>
        </form>
        </>
    )
}
export default BlogForm