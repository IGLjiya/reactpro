import React, { Fragment, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uniqueId } from 'uuid';
import { addToList, removeFromList } from '../Redux/Slice/todoSlice';
import { LiaEditSolid } from "react-icons/lia";
import { RiChatDeleteFill } from "react-icons/ri";
import { GrDocumentUpdate } from "react-icons/gr";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";



const TodoRedux = () => {

    const { todoList } = useSelector(states => states.todo)
    const [todo, setTodo] = useState("")
    const dispatch = useDispatch()


    const handleTodo = () => {
        if (!todo) {
            return toast.error("Task Required")
        }
        if (todo.length < 5) {
            return toast.error("Minimum 5 character")
        }

        const exist = todoList.findIndex(element => element.task.toLowerCase() == todo.toLowerCase())
        if (exist > -1) {
            return toast.error("Task Already Exist")
        }
        const taskObject = {
            Id: uniqueId(),
            task: todo,
            completed: false,
            createdAt: new Date().toLocaleString("en-IN"),
            updatedAt: new Date().toLocaleString("en-IN")
        }
        dispatch(addToList(taskObject))
        setTodo("")
        return toast.success("Task Added")

    }

    const handleRemove = (removeId) =>{
        dispatch(removeFromList({removeId:removeId}))
    }



    return (
        <Fragment>
            <div>
                <div className='mt-4 d-flex flex-column align-items-center' >
                    <input type='text' placeholder='Enter The Task' onChange={(event) => { setTodo(event.target.value) }} value={todo} name='todo' className='w-50 border rounded border-secondary p-2 ' />
                    <button onClick={handleTodo} className='w-50 mt-4 p-1 rounded '>Add Todo</button>
                </div>
            </div>
            <div className="d-flex flex-column align-items-center mt-4 gap-2">
                {
                    todoList.map((item) => {
                        return (
                            <div key={item.Id} className='bg-dark text-light w-50 rounded p-3 justify-content-between'>
                                <div>
                                    <div>Task : {item.task}</div>
                                    <div>Status : {item.completed ? "completed" : "Pending"} </div>
                                    <div>Date : {item.createdAt} </div>
                                </div>
                                <div className='d-flex justify-content-between gap-5 pt-4'>
                                    <button className='btn btn-outline-primary w-25 '><HiOutlineViewfinderCircle size={19} /> View</button>
                                    <button className='btn btn-outline-primary w-25 '><LiaEditSolid size={23} /> Edit</button>
                                    <button className='btn btn-outline-success w-25'><GrDocumentUpdate size={19} /> Update</button>
                                    <button onClick={()=>handleRemove(item.Id)} className='btn btn-outline-danger w-25'> <RiChatDeleteFill size={20} /> Delete</button>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </Fragment>
    );
}

export default TodoRedux;
