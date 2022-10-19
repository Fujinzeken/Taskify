import React from 'react'
import { Todo } from '../modal';
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import './styles.css'

interface Props{
    todo:Todo;
    todolist:Todo[];
    setTodoList:React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({todo, todolist, setTodoList}:Props) => {
  return (
    <form className='singleTodo'>
      <span className='todo-single-test'>
        {todo.todo}
      </span>
        <div>
            <span className='icon'>
                <AiFillEdit />
            </span>
            <span className='icon'>
                <AiFillDelete />
            </span>
            <span className='icon'>
                <MdDone />
            </span>
        </div>
      
    </form>
  )
}

export default SingleTodo
