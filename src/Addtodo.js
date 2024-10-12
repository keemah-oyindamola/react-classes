import React ,{useState} from 'react'

const Addtodo = ({click}) => {
  const [inp, setinp] = useState("")
  const [input, setinput] = useState("")
//   console.log(data);
  return (
    <div>
        <input onChange={(e)=>setinp(e.target.value)} type="text" />
        <input onChange={(e)=>setinput(e.target.value)} type="text" />
        <button onClick={()=>click({inp, input})}>Todo</button>
    </div>
  )
}

export default Addtodo