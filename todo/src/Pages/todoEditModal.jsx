import React from 'react';

const TodoEditModal = ({editTask, setEditTask, setEditbleTask,handleUpdate}) => {
        return (
            <div className='bg-dark w-100 bg-opacity-50 position-fixed top-0 start-0 d-flex justify-content-center align-items-center py-5 ' style={{height:"100vh"}}>
                <div className='align-content-center d-flex flex-column gap-3 w-25 ' >
                    <input className='form-control' type="text" placeholder='Edit Task' onChange={(e)=>setEditTask(e.target.value)} value={editTask} />
                    <button className='btn btn-success' onClick={handleUpdate}>Update</button>
                    <button className='btn btn-danger' onClick={()=>setEditbleTask(null)}>Close</button>
                </div>
            </div>
        );
}

export default TodoEditModal;
