import React, {useState, useEffect} from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Login from './Login'


const Formik = () => {
    const [users, setusers] = useState([])
    let navigate = useNavigate()
    useEffect(() => {
      axios.get("http://localhost:1234/users")
      .then((res)=>{
        console.log(res.data);
        setusers(res.data)
      }).catch((error)=>{
        console.log(error);
      })
    }, [])
    
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: ""
        },
        validationSchema: yup.object({
            username: yup.string().min(4, "username is too short").required("username is required"),
            email: yup.string().email("must be a valid email").required("email is required"),
            password: yup.string().min(5, "password is too short").matches("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])").required("password is required")
        }),
        onSubmit: (value) => {
            const existinguser = users.find(exist=> exist.email == value.email && exist.password == value.password)
            if (existinguser) {
                alert("user already exist")
                toast.error("user already exist")
            }else{
                console.log(value);
                axios.post("http://localhost:1234/users", value)
                .then((res)=>{
                    console.log(res.data);
                    alert("signup successful")
                    navigate('/login')
                    toast.success("signup successful")
                }).catch((err)=>{
                    // console.log(err);
                    toast.error(err?.response?.data?.message)
                })
            }

        }
    })
    console.log(formik.errors);
    console.log(formik.touched);

    return (
        <div>
            <form className='w-50 mx-auto px-4 py-3 shadow' onSubmit={formik.handleSubmit} action="">
                <div className='form-group'>
                    <label htmlFor="">Username</label>
                    <input onBlur={formik.handleBlur} onChange={formik.handleChange} name='username' className='form-control' type="text" />
                    <p className='text-danger'>{formik.touched.username && formik.errors.username ? formik.errors.username : ""}</p>
                </div>
                <div className='form-group'>
                    <label htmlFor="">Email</label>
                    <input onBlur={formik.handleBlur} onChange={formik.handleChange} name='email' className='form-control' type="text" />
                    <p className='text-danger'>{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</p>
                </div>
                <div className='form-group'>
                    <label htmlFor="">Password</label>
                    <input onBlur={formik.handleBlur} onChange={formik.handleChange} name='password' className='form-control' type="text" />
                    <p className='text-danger'>{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</p>
                </div>
                <div className='mt-3'>
                    <button type='submit' className='btn btn-dark'>Register</button>
                    <ToastContainer />
                </div>
            </form>
        </div>
    )
}

export default Formik