import React, {useState} from 'react'
import Addtodo from './Addtodo'
import Another from './Another'

const Discard = () => {
    const [allinput, setallinput] = useState([])

    const addtodo = (inp) => {
        // console.log(inp);
        setallinput([...allinput, inp])
        console.log(allinput);
    }
  return (
    <div>
        <Addtodo  click={addtodo}/>
        <Another allinput={allinput}/>
    </div>
  )
}

export default Discard