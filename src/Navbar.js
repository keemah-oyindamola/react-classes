import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <div className='d-flex justify-content-between align-items-center '>
            <h1 className='fs-1'>React Class</h1>
            <div className='p-4'>
                <Link to='/'>Home</Link>
                <a href="">Home</a>
                <a href="">dashboard</a>
                <a href="">login</a>
                <a href="">contact us</a>
            </div>
            <button>Register</button>
        </div>
    </div>
  )
}

export default Navbar