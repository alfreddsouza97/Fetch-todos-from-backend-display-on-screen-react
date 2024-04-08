import { useEffect, useState } from "react"

function App() {

  const [todos, setTodos ] = useState([]);

  useEffect(()=>{

    fetch("https://sum-server.100xdevs.com/todos")
    .then(async function(res){

      const json = await res.json();

      setTodos(json.todos);
    })
  })


  

  return (

    <div>

      {todos.map(function(todo){

        return <div>
          <TodoComponent title={todo.title} description={todo.description}></TodoComponent>
        </div>
      })}
    </div>
   
  )
}

function TodoComponent({title, description}){

  return <div>

    <h1>{title}</h1>
    <h2>{description}</h2>
  </div>


}

export default App
