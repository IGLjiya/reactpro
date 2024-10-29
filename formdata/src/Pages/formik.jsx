import React from 'react';
import { useFormik } from "formik"
import * as yup from 'yup'

const Formik = () => {

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            confirmPassword:""
        },
        onSubmit: ({ username, password, confirmPassword }) => {
            console.log(username, password,confirmPassword);
        },
        // validate: ({ username, password }) => {
        //     if (username == "" && password == "") {
        //         return {
        //             username: "Username is Reqiured",
        //             password: "Password is reqiured "
        //         }
        //     }
        //     if (username == "") {
        //         return { username: "Username Reqiured" }
        //     }
        //     if (password == "") {
        //         return { password: "Password is Reqiured" }
        //     }
        // }
        validationSchema: yup.object().shape({
            username: yup.string()
                .required("User Name Reuired")
                .min(4,"Minimum 4 Character")
                .max(12,"Maximum 12 Character"),
            password: yup.string()
                .required("Password is required")
                .min(8,"Minimum 8 character")
                .max(16,"MAximum 16 character"),
            confirmPassword: yup.string()
                .required("confirm Password is required")
                .oneOf([yup.ref("password")],"Password does'nt match")
            
        })

    })

    return (
        <div className=' d-flex justify-content-center align-items-center' onSubmit={formik.handleSubmit} style={{ height: "100vh" }}>
            <div className='border p-5 w-75'>
                <form className=' d-flex flex-column gap-3  text-start  '>
                    <input type="text" name='username' onChange={formik.handleChange} value={formik.values.username} placeholder='Enter User Name' className='form form-control rounded-0' />
                    <span>{formik.errors.username}</span>
                    <input type="password" name="password" onChange={formik.handleChange} value={formik.values.password} className='form form-control  rounded-0' />
                    <span>{formik.errors.password}</span>
                    <input type="password" name="confirmPassword" onChange={formik.handleChange} value={formik.values.confirmPassword} className='form form-control  rounded-0' />
                    <span>{formik.errors.confirmPassword}</span>
                    <button type='submit' className='btn btn-outline-success  rounded-0'>Sign In</button>
                </form>
            </div>
        </div>
    );
}

export default Formik;
