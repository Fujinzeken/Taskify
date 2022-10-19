import React, { useState } from 'react';
import './App.css';
import InputField from './components/inputField';
import {Todo} from './modal'


const App:React.FC = ()=> {
  const [todo, setTodo] = useState<string>('')
  const [todolist, setTodoList] = useState<Todo[]>([])


  const handleAdd = (e:React.FormEvent)=>{
    e.preventDefault()
    if(todo){
      setTodoList([...todolist, {id: Date.now(), todo:todo, isDone:false}])
    }
    setTodo('')
  }
  console.log(todolist);
  
  return (
    <div className="App">
    <span className='heading'>Taskify</span>
    <InputField 
     todo={todo}
     setTodo = {setTodo}
     handleAdd ={handleAdd}/>
    
    </div>
  );
}

export default App;
