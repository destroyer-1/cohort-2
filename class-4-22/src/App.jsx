import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([{
    title: "go to gym ",
    description: "study from 7-9",
    completed : false
  },
  {
    title: "go to study",
    description :"study from 9-10",
    completed: true
  }
])

  return (
    <div>
        {/* <Todo title={todos[0].title} description={todos[0].description} />
        <Todo title={todos[1].title} description={todos[1].description} /> */}
        {todos.map(function(todo){
          return <Todo title={todo.title} description={todo.description}/>
        })}
        
    </div>
  )
}

function Todo(props){
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>

    </div>
  )
}

export default App
