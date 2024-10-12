import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Mydashbd = () => {
    const [userinfo, setuserinfo] = useState([])
    const {id} = useParams()
    console.log(id);
    useEffect(() => {
        axios.get(`http://localhost:1234/users/${id}`)
            .then((res) => {
                console.log(res.data);
                setuserinfo(res.data)
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div>
            <h1>Welcome {userinfo.username}</h1>
            {/* {userinfo.map((el,i) => (
                <>
                    <p>{i}</p>
                    <h1>Welcome {el.username}</h1>

                </>
            ))

            } */}
        </div>
    )
}

export default Mydashbd