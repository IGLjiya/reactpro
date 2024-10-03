import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { v4 as createId } from 'uuid'
import { TiDeleteOutline, TiEdit } from "react-icons/ti";
import { AiOutlineCheckCircle, AiOutlineEdit } from "react-icons/ai";
import TodoEditModal from './todoEditModal';

const Todolist = () => {

    const [todoList, setTodoList] = useState([])

    const [todo, setTodo] = useState("")

    const [editbleTask, setEditbleTask] = useState(null)
    const [editTask, setEditTask] = useState("")



    const handleTodo = () => {
        if (!todo) {
            toast.error('Task Required')
        }
        const exist = todoList.findIndex((element) => element.task.toLowerCase() == todo.toLowerCase())
        if (exist > -1) {
            return toast.error("Task already exist")
        }
        if (todo.length < 5) {
            return toast.error("Minimun 5 Character")
        }
        const taskObject = {
            ID: createId(),
            task: todo,
            completed: false,
            createdAt: new Date().toLocaleString("en-IN"),
            updatedAt: new Date().toLocaleString("en-IN")
        }
        setTodoList([taskObject, ...todoList])
        setTodo("")
        return toast.success("Task Added")
    }
    const handleRemove = (removeId) => {
        const res = todoList.filter((todo) => todo.ID != removeId)
        setTodoList(res)
        toast.error("Task Removed")
    }

    const handleStatusUpdate = (taskId) => {
        const res = todoList.map(todo => {
            if (todo.ID == taskId) {
                return { ...todo, completed: !todo.completed, updatedAt: new Date().toLocaleString("en-IN") }
            }
            return todo
        })
        setTodoList(res)
        toast.success("Task Updated")
    }

    const handleEdit = (todo) => {
        setEditbleTask(todo)
        setEditTask(todo.task)
    }

    const handleUpdate = () => {
        if (!editTask) {
            toast.error('Task Required')
        }
        const exist = todoList.find((element) => element.task.toLowerCase() == editTask.toLowerCase())
        if (exist && exist.ID != editbleTask.ID) {
            return toast.error("Task already exist")
        }
        if (editTask.length < 5) {
            return toast.error("Minimun 5 Character")
        }
        const res = todoList.map(todo => {
            if (todo.ID == editbleTask.ID) {
                return { ...todo, task: editTask, updatedAt: new Date().toLocaleString("en-IN") }
            }
            return todo
        })
        setEditTask(res)
        setEditTask("")
        setEditbleTask(null)
    }
    return (
        <div>
            <div>
                {editbleTask &&
                    <TodoEditModal
                        setEditTask={setEditTask}
                        setEditbleTask={setEditbleTask}
                        editTask={editTask}
                        handleUpdate={handleUpdate}
                    />}
            </div>
            <div className='mt-4 d-flex flex-column align-items-center' >
                <input type='text' placeholder='Enter The Task' name='todo' value={todo} onChange={(event) => setTodo(event.target.value)} className='w-50 border rounded border-secondary p-2 ' />
                <button onClick={handleTodo} className='w-50 mt-4 p-1 rounded '>Add Todo</button>
            </div>
            <div className="d-flex flex-column align-items-center mt-4 gap-2">
                <h3>Pending Task ({todoList.filter(t => !t.completed).length})</h3>
                {
                    todoList.filter(todo => !todo.completed).map((todo) => {
                        return (
                            <div key={todo.ID} className="bg-dark text-light d-flex w-50 rounded p-3 justify-content-between">
                                <div>
                                    <div>ID : {todo.ID}</div>
                                    <div>Task : {todo.task}</div>
                                    <div>Status: {todo.completed ? "Completed" : "Pending"}</div>
                                    <div>Updated : {todo.updatedAt}</div>
                                </div>
                                <div className='d-flex flex-column gap-3 justify-content-between'>
                                    <TiDeleteOutline size={20} cursor={"pointer"} onClick={() => handleRemove(todo.ID)} />
                                    <AiOutlineEdit size={20} cursor={"pointer"} onClick={() => handleEdit(todo)} />
                                    <AiOutlineCheckCircle size={20} cursor={"pointer"} onClick={() => handleStatusUpdate(todo.ID)} />
                                </div>
                            </div>
                        )
                    }
                    )}
                <h3>Completed Task - ({todoList.filter(t => t.completed).length})</h3>
                {
                    todoList.filter(todo => todo.completed).map((todo) => {
                        return (
                            <div key={todo.ID} className="bg-dark text-light d-flex w-50 rounded p-3 justify-content-between">
                                <div>
                                    <div>ID : {todo.ID}</div>
                                    <div>Task : {todo.task}</div>
                                    <div>Status: {todo.completed ? "Completed" : "Pending"}</div>
                                    <div>Updated : {todo.updatedAt}</div>
                                </div>
                                <div className='d-flex flex-column gap-3 justify-content-between'>
                                    <TiDeleteOutline size={20} cursor={"pointer"} onClick={() => handleRemove(todo.ID)} />
                                    <AiOutlineCheckCircle size={20} cursor={"pointer"} onClick={() => handleStatusUpdate(todo.ID)} />
                                </div>
                            </div>
                        )
                    }
                    )}

            </div>
        </div>
    );
}

export default Todolist;
