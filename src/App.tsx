import React, { useState } from 'react';
import './App.css';
import InputField from './components/inputField';
import TodoList from './components/TodoList';
import {Todo} from './modal'
import {DragDropContext} from 'react-beautiful-dnd'

const App:React.FC = ()=> {
  const [todo, setTodo] = useState<string>('')
  const [todolist, setTodoList] = useState<Todo[]>([])
  const [completedTodoList, setCompletedTodoList] = useState<Todo[]>([])


  const handleAdd = (e:React.FormEvent)=>{
    e.preventDefault()
    if(todo){
      setTodoList([...todolist, {id: Date.now(), todo:todo, isDone:false}])
    }
    setTodo('')
  }
  console.log(todolist);
  
  return (
    <DragDropContext onDragEnd={()=>{}}>
    <div className="App">
    <span className='heading'>Taskify</span>
    <InputField 
     todo={todo}
     setTodo = {setTodo}
     handleAdd ={handleAdd}/>
    <TodoList 
    todolist={todolist} 
    setTodoList={setTodoList}
    completedTodoList={completedTodoList}
    setCompletedTodoList= {setCompletedTodoList}/>
    </div>
    </DragDropContext>
  );
}

export default App;
