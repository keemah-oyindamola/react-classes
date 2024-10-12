import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Increment, Decrement } from './Redux/Countslice'

const Counter = () => {
    const dispatch = useDispatch()
    const {value, istrue} = useSelector(state=> state.Countslice)
    console.log(value);
    console.log(istrue);
  return (
    <div>
        <h1>{value}</h1>
        <button onClick={()=>dispatch(Increment())}>Add</button>
        <button onClick={()=>dispatch(Decrement())}>Remove</button>
    </div>
  )
}

export default Counter