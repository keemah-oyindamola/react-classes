import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const Oneproduct = () => {
    const {id} = useParams()
    console.log(id);
    const [oneproduct, setoneproduct] = useState({})

    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${id}`)
        .then((res)=>{
            console.log(res.data);
            setoneproduct(res.data)
        }).catch((error)=>{
            console.log(error);
        })
    }, [])
  return (
    <div>
        <h1>{oneproduct.title}</h1>
        <h1>{oneproduct.description}</h1>
        {
            oneproduct?.images?.map((el)=>(
                <>
                    <img src={el} alt="" />
                </>
            ))
        }
    </div>
  )
}

export default Oneproduct