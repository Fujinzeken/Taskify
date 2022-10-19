import React from 'react'
import { Todo } from '../modal';
import SingleTodo from './SingleTodo';
import './styles.css'

interface Props{
  todolist:Todo[];
  setTodoList:React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList= ({todolist, setTodoList}:Props) => {
  return (
    <div className='todos'>
      {todolist.map((item)=>{
        return <SingleTodo 
        todo={item} 
        key={item.id}
        todolist={todolist}
        setTodoList={setTodoList}/>
      })}
    </div>
  )
}

export default TodoList
