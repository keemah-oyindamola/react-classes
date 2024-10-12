import React,{useState} from 'react'

const Another = ({allinput}) => {
    console.log(allinput);
  return (
    <div>
        {
            allinput.map((el)=>(
                <>
                    <h1>{el.input}</h1>
                    <h1>{el.inp}</h1>
                </>
            ))
        }
    </div>
  )
}

export default Another