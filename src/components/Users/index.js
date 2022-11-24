import React from 'react'
import {useUserContext} from "../../context/userContext"
import "./index.scss"


function Users() {

const { users } = useUserContext();

  return (

    <div>
      {users.map((item) =>(
       <div key={item.id}>
        <h1>
           {item.id} - {item.name} - {item.surname}
          </h1>
          <img src={item.avatar} alt=""></img>
       </div>
      )
     )}
    </div>

  )
}

export default Users