import axios from 'axios'
import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { pendingfetchdata, sucessfulfetchdata, errorfetchdata } from './Redux/Getuser'

const Userrexux = () => {
  const {postusers, isfetching, error} = useSelector(state=>state.getuser)
  console.log(postusers);
  console.log(isfetching);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(pendingfetchdata())
   axios.get("http://localhost:1234/users")
   .then((res)=>{
    dispatch(sucessfulfetchdata(res.data))
    console.log(res.data);
   }).catch((err)=>{
    dispatch(errorfetchdata())
    console.log(err);
   })
  }, [])
  
   

  return (
    <div>
      {isfetching?"loading..." : postusers.map((el)=>(
        <>
          <h1>{el.email}</h1>
          <h1>{el.username}</h1>
        </>
      ))
      }
    </div>
  )
}

export default Userrexux