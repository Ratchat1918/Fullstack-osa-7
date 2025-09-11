import { useState } from 'react'
import { useNavigate} from "react-router-dom"
const CreateNew = (props) => {
  const navigate=useNavigate()

  const useField = () => {
    const [value, setValue] = useState('')
    const onChange = (event) => {
      setValue(event.target.value)
    }
    const onReset=()=>{
      setValue('')
    }
    return {
      value,
      onChange,
      onReset
    }
  }
  const content = useField('')
  const author = useField('')
  const info = useField('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0
    })
    navigate('/')
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form  onSubmit={handleSubmit}>
        <div>
          content
          <input {...content} />
        </div>
        <div>
          author
          <input {...author} />
        </div>
        <div>
          url for more info
          <input {...info} />
        </div>
        <input type="submit" value="create" />
        <button type="button" onClick={() => {
          content.onReset()
          author.onReset()
          info.onReset()
        }}>reset</button>
      </form>
    </div>
  )

}
export default CreateNew