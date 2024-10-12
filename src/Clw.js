import axios from 'axios'
import React, { useState,useEffect} from 'react'

const Clw = () => {
    const [input1, setinput1] = useState('')
    const [input2, setinput2] = useState('')
    // const [allinput, setallinput] = useState([] && JSON.parse(localStorage.getItem("localstorage")))
    // useEffect(() => {
    // localStorage.setItem("localstorage", JSON.stringify(allinput))
          
    // }, [allinput])
    

    const change = ()=>{    
        axios.post("http://localhost:1234/post", {title:input1, content:input2})
        .then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
   
    }
  return (
    <div>
        <input onChange={(e)=>setinput1(e.target.value)} type="text" />
        <input onChange={(e)=>setinput2(e.target.value)} type="text" />
        <button onClick={change}>change</button>
    </div>
  )
}

export default Clw;