// import React, {useState} from 'react'
// import { v4 as uuidv4 } from "uuid";
// import TodoForm from './TodoForm'
// import Todo from './Todo';
// import EditTodoForm from './EditTodoForm';
// uuidv4();

// const TodoWrapper = () => {
//   const [todos, setTodos] = useState([]);
//   const addTodo = (todo) => {
//     setTodos([
//       ...todos,
//       { id: uuidv4(), task: todo, completed: false, isEditing: false },
//     ]);
//     console.log(todos);
//   }

//   const toggleCompleteFunc = (id) => {
//     setTodos(todos.map((todo) => todo.id === id? {...todo, completed: !todo.completed}: todo ))
//   }

//   const deleteTodoFunc = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id ))
//   }

//   const editTodoFunc = (id) => {
//     setTodos(todos.map((todo) => todo.id === id? {...todo, isEditing: !todo.isEditing}: todo ))
//   }

//   const editTodoFormFunc = (task, id) => {
//     setTodos(todos.map((todo) => todo.id === id? {...todo, task, isEditing: !todo.isEditing}: todo ))
//   }

//   return (<div className='TodoWrapper'>
//   <TodoForm addTodo={addTodo}/>
//   {todos.map((todo) => todo.isEditing? (<EditTodoForm editTodo={editTodoFormFunc} task={todo}/>): (<Todo task={todo} key={todo.id} toggleComplete={toggleCompleteFunc} deleteTodo={deleteTodoFunc} editTodo={editTodoFunc}/>))}
//   </div>
//   )
// }

// export default TodoWrapper


import React, {useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './TodoForm'
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
uuidv4();

 const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos);
    }, []);

    const addTodo = todo => {
        const newTodos = [...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}];
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    const toggleComplete = id => {
        const newTodos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    const deleteTodo = id => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
        const newTodos = todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }
  return (
    <div className='TodoWrapper'>
        <h1>Get Things Done!</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
            todo.isEditing ? (
                <EditTodoForm editTodo={editTask} task={todo} />
            ) : (
                <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
            )
            
        ))}
         
    </div>
  )
}

export default TodoWrapper