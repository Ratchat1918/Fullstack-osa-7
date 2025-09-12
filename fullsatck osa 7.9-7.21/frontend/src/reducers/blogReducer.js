import { createSlice } from "@reduxjs/toolkit";
import blogServices from '../services/blogs';

const blogSlice=createSlice({
    name:'blogs',
    initialState:[],
    reducers:{
        setBlogs(state, action){
            return action.payload;
        },
        appenedBlog(state,action){
            state.push(action.payload)
        },
        addLike(state,action){
            return state.map(blog.id !== action.payload.id ? blog : action.payload)
        }
    }
});
export const {setBlogs, appenedBlog , addLike} = blogSlice.actions;

export const initializeBlogs = () => {
  return async dispatch => {
    const blogs = await blogServices.getAll()
    dispatch(setBlogs(blogs))
  }
}
export const addBlogs = () =>{
    return async dispatch =>{
        const blogs=await blogServices.create();
        dispatch(appenedBlog(blogs))
    }
}
export const addLikeToBlog = (id) => {
  return async (dispatch, getState) => {
    const blogToLike = getState().blogs.find(a => a.id === id)
    const updatedBlog = { ...blogToLike, likes: blogToLike.likes + 1 }
    const returnedBlog= await blogServices.update(updatedBlog.id,updatedBlog)
    dispatch(addLike(returnedBlog))
  }
}
export default blogSlice.reducer