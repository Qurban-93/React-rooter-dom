import React from 'react'
import {useUserContext} from "../../context/userContext"
import "./index.scss"
import { Link } from 'react-router-dom';


function Users() {

const {users} = useUserContext();



  return (

    
    <div>
    <Link to="/">Home</Link>
      {users.map((item) =>(
       <div key={item.id}>
        <h1>
           {item.id} - {item.name} - {item.surname}
          </h1>
          <img src={item.avatar} alt=""></img>
       </div>
      )
     )}
     salam
    </div>

  )
}

export default Users