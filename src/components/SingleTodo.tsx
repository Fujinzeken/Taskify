import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../modal';
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import './styles.css'

interface Props{
    index:number
    todo:Todo;
    todolist:Todo[];
    setTodoList:React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({todo, todolist, setTodoList}:Props) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)

    const handleDone = (id:number)=>{
        setTodoList(todolist.map((item)=>{
            return item.id === id? {...item, isDone:!item.isDone}:item
        }))
        
    }

    const handleDelete = (id:number)=>{
        setTodoList(todolist.filter((item)=> item.id !== id
        ))
    }

    const handleEdit =(e:React.FormEvent, id:number)=>{
        e.preventDefault()
        setTodoList(todolist.map((item)=>(
            item.id === id ?{...item, todo:editTodo}: item
        )))
        setEdit(!edit)
    }

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(()=>{
        inputRef.current?.focus();
    }, [edit])
  return (
    <form className='singleTodo' onSubmit={(e)=>handleEdit(e, todo.id)}>

        {edit ? (<input type='input' value={editTodo} onChange={(e)=>setEditTodo(e.target.value)} 
        className='todo-single-test'
        ref={inputRef}/>):(
        todo.isDone ?  <s className='todo-single-test'>
        {todo.todo}
        </s>:<span className='todo-single-test'>
        {todo.todo}
        </span> 

        )}
       
        <div>
            <span className='icon'>
                <AiFillEdit onClick={()=>{
                    if(!todo.isDone){
                        setEdit(!edit)
                    }
                   }}/>
            </span>
            <span className='icon'>
                <AiFillDelete onClick={()=> handleDelete(todo.id)}/>
            </span>
            <span className='icon' onClick={()=>handleDone(todo.id)}>
                <MdDone />
            </span>
        </div>
      
    </form>
  )
}

export default SingleTodo
