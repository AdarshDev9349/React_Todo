import "./style.css"
import { useState } from "react";

export default function App(){
  const[newtask,setnewtask]=useState("")
  const[todo, settodo] = useState([])
  function handlesubmit(e) {
      e.preventDefault()
     
      settodo(currenttodo =>{
        return [
          ...todo,{id: crypto.randomUUID(),title: newtask, completed: false},
        ]
  })
        
}
function taskcheck(id,completed){

  settodo(currenttodo =>{
    return currenttodo.map(todo=> {
      if(todo.id===id){
        todo.completed=completed
        return{...todo,completed}
      }
      return todo
    })
})
}
function deletetask(id){
  settodo(currenttodo =>{
    return currenttodo.filter(todo=> todo.id!== id )

})


}
 
 return  <>
  <form onSubmit={handlesubmit} className="task-Form"  action="">

    <div className="task-main">

     <label htmlFor="new-task" >New Task</label>
      
     <input value={newtask} onChange={e =>setnewtask(e.target.value) } type="text" name="new-task" id="new-task" />
    </div>
    <button className="btn">Add</button>
      </form>
      <h1 className="Header">TODO LIST</h1>
      <ul className="task-list">
        {todo.length===0 && "No Todos"}
        {todo.map(todo =>{
          return   <li key={todo.id}>
          <label>
            <input type="checkbox" checked={todo.completed} name="" id="" onChange={e => taskcheck(todo.id,e.target.checked)}/>
           {todo.title}
          </label>
        <button onClick={()=> deletetask(todo.id)} class="btn2">Delete</button>
        </li>
        })}
      
      </ul>


</>
}