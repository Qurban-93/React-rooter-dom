import React from 'react'
import { useUserContext } from '../../context/userContext'
import{usersService} from "../../Api/Services/users"

function About() {

  const { setUsers,newUser,setNewUser } = useUserContext();

  const editUserBtn = () =>{
    usersService.editUser(newUser.id,newUser)
    usersService.getAllUsers().then(({data})=>{setUsers(data)})
  }
  
  
  const handleChangeInputValue = (e)=>{
    const{name , value} = e.target;
    setNewUser({...newUser,[name]:value})
  }
  
  const pushAddBtn = () =>{
    usersService.addNewUser(newUser)
    usersService.getAllUsers().then(({data})=>{setUsers(data)})
  }

  return (
    <div id='second'>
      <input onChange={handleChangeInputValue} placeholder='Enter your name' name='name'></input>
      <input onChange={handleChangeInputValue} placeholder='Enter your surname' name='surname'></input>
      <input onChange={handleChangeInputValue} placeholder='Enter your image url' name='avatar'></input>
      <input onChange={handleChangeInputValue} placeholder='Enter id for change User' name='id'></input>
      <button onClick={pushAddBtn}>Create Add</button>
      <button onClick={editUserBtn}>Change User</button>
    </div>
  )
}

export default About