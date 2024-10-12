import React, {useState} from 'react'
import Button from './Button'

const Home = () => {
  const[name, setname] = useState('keemah')
  const[input, setinput] = useState('')
  const[input1, setinput1] = useState('')
  const[list, setlist] = useState([])
  let gender='male'
  let stuffs=[]
  // let name='keemah'
  let students=[
    // {name:'Zazuki', class:'React'},
    // {name:'sei', class:'Java'},
    // {name:'Davi', class:'React'},
    // {name:'Hinari', class:'Javascript'}
  ]
  const change=()=>{
    // setname('sekinah')
    // console.log(name);
   let obj={
      input,
      input1,
    }
    setlist([...list, obj])
    console.log(list);

  }
  const deleteStuff=(i)=>{
    const deleted = [...list]
    deleted.splice(i,1)
    setlist(deleted)
  }
  // const Editstuff=(i)=>{

  // }
  const login = ()=>{
    alert('login sucess')
  }
  const signup = ()=>{
    alert('signup sucess')
  }
  return (
    <div>
      <h1 className={gender=='female' ? "text-secondary" : "text-danger"}>{gender=='female'?name:'toheeb'}</h1>
      <h1>{name}</h1>
      <button onClick={change}>Change</button>
      {students.length==0 ? 'No user available' : (
        students.map((el,i)=>(
          <>
            <div key={i}>
              <h1>{i +1}</h1>
              <h1>{el.name}</h1>
              <h1>{el.class}</h1>
            </div>
          </>
      )
      ))}
      <input onChange={(e)=>setinput(e.target.value)} type="text" />
      <input onChange={(e)=>setinput1(e.target.value)} type="text" />
      {
         list.map((el)=>(
          <>
          <h1>{el.input}</h1>
          <h1>{el.input1}</h1>
          <button onClick={deleteStuff} className='btn btn-success'>Delete</button>
          <button  className='btn btn-danger'>Edit</button>
          
          </>
        ))
      }

      <Button click={login} style='btn btn-dark' content="login"/>
      <Button click={signup} style='btn btn-dark' content="signup"/>
    </div>
  )
}


export default Home;