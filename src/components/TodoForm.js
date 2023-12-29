import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");
  const handleSubmit=e=>{
    e.preventDefault(); 
    addTodo(value);
    setValue("");
  };
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' placeholder='Enter here' onChange={(e)=> setValue(e.target.value)} value={value}></input>
        <button type="submit" className='todo-btn'>Submit</button>
    </form>
  )
}

export default TodoForm
