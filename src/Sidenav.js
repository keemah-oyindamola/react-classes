import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
  return (
    <div>
        <div  style={{height:'100vh', width:'25'}} className='w-25 bg-primary h-100'>
            <Link className='text-white p-3'>Profile</Link>
            <Link className='text-white p-3'>Change password</Link>
            <Link className='text-white p-3'>Log out</Link>
        </div>
    </div>
  )
}

export default Sidenav