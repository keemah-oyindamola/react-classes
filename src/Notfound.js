import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
    const navigate = useNavigate()

    const goback = ()=>{
        navigate("/")
    }
  return (
    <div>
        <h1 className='text-center'>You are on the wrong page</h1>
        <button onClick={goback} className='btn btn-danger'>Go to home</button>
    </div>
  )
}

export default Notfound