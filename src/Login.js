import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';



const Login = () => {
    const [loginusers, setloginusers] = useState([])
    let navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:1234/users')
            .then((res) => {
                console.log(res.data);
                setloginusers(res.data)
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (value) => {
            const existinguser = loginusers.find(existed => existed.email == value.email && existed.password == value.password)
            console.log(existinguser);
            console.log(existinguser.id);
            let id = existinguser.id
            if (existinguser) {
                // alert("user successfully logged in")
                toast.success("user successfully logged in")
                // console.log(el.id);
                // let id = el.id
                navigate(`/mydashbd/${id}`)
                // navigate("/mydashbd")
                // toast.error("user already exist")
            } else {
                // alert("not  successful user doesn't exist")
                toast.error("user doesn't exist")
                navigate = "login"
            }
           
        }
    })
    console.log(formik.errors);
    // console.log(formik.touched);

    return (
        <div>
            <form className='w-50 mx-auto px-4 py-3 shadow' onSubmit={formik.handleSubmit} action="">
                {/* <div className='form-group'>
                    <label htmlFor="">Username</label>
                    <input onBlur={formik.handleBlur} onChange={formik.handleChange} name='username' className='form-control' type="text" />
                    <p className='text-danger'>{formik.touched.username && formik.errors.username ? formik.errors.username : ""}</p>
                </div> */}
                <div className='form-group'>
                    <label htmlFor="">Email</label>
                    <input onBlur={formik.handleBlur} onChange={formik.handleChange} name='email' className='form-control' type="text" />
                    {/* <p className='text-danger'>{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</p> */}
                </div>
                <div className='form-group'>
                    <label htmlFor="">Password</label>
                    <input onBlur={formik.handleBlur} onChange={formik.handleChange} name='password' className='form-control' type="text" />
                    {/* <p className='text-danger'>{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</p> */}
                </div>
                <div className='mt-3'>
                    <button type='submit' className='btn btn-dark'>Register</button>
                    <ToastContainer />
                </div>
            </form>
        </div>
    )
}

export default Login