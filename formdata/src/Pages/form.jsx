import React, { useContext } from 'react';
import { fromContext } from '../Provider/AllProvider';
// import axios, {} from "axios"

const Form = () => {

    const { formData, setFormData } = useContext(fromContext)


    const handleFormData = (event) => {
        const { name, value } = event.target
        setFormData({...formData, [name]: value})
    }

    const handleForm = async (event) =>{
        event.preventDefault()

        // const response = await axios.post("url",formData)
    } 

    return (
        <div className='d-flex justify-content-center align-items-center' onSubmit={handleForm} style={{ height: "100vh" }}>
            <form className='d-flex flex-column gap-3 w-100 justify-content-center align-items-center '>
                <input type="text" name='usernamr' onChange={handleFormData} value={formData.username} placeholder='Enter User Name' className='form form-control w-25 rounded-0' />
                <input type="password" name="password" onChange={handleFormData} value={formData.password} className='form form-control w-25 rounded-0' />
                <button className='btn btn-outline-success w-25 rounded-0'>Sign In</button>
            </form>
        </div>
    );
}

export default Form;
