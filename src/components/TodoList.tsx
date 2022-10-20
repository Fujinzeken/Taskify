import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import { Todo } from '../modal';
import SingleTodo from './SingleTodo';
import './styles.css'

interface Props{
  todolist:Todo[];
  setTodoList:React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodoList:Todo[];
  setCompletedTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList= ({todolist, setTodoList, completedTodoList, setCompletedTodoList}:Props) => {
  return (
    <div className='container'>
      <Droppable droppableId='TodoList'>
        {
          (provided)=>(
            <div className='todos' ref={provided.innerRef} {...provided.droppableProps}>
            <span className='todos-heading'>Active Tasks</span>
            {todolist.map((item, index)=>{
              return <SingleTodo 
              index={index}
              todo={item} 
              key={item.id}
              todolist={todolist}
              setTodoList={setTodoList}/>
            })}
          </div>
          )
        }
   
    </Droppable>
    <Droppable droppableId='TodoRemove'>
      {
        (provided)=>(
      <div className="todos remove" ref={provided.innerRef} {...provided.droppableProps}>
      <span className='todos-heading'>Finished Tasks</span>
      {completedTodoList.map((item, index)=>{
        return <SingleTodo
        index={index} 
        todo={item} 
        key={item.id}
        todolist={completedTodoList}
        setTodoList={setCompletedTodoList}/>
      })}
    </div>
        )
      }
    
    </Droppable>
    </div>
  )
}

export default TodoList
