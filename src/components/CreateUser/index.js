import React from 'react'
import { useUserContext } from '../../context/userContext'
import{usersService} from "../../Api/Services/users"
import { Link } from 'react-router-dom';
import "./index.scss"

function CreateUser() {

  const { setUsers,newUser,setNewUser } = useUserContext();

  const editUserBtn = () =>{
    usersService.editUser(newUser.id,newUser)
  }
  
  
  const handleChangeInputValue = (e)=>{
    const{name , value} = e.target;
    setNewUser({...newUser,[name]:value})
  }
  
  const pushAddBtn = () =>{
    usersService.addNewUser(newUser)
  }

  React.useEffect(()=>{
    usersService.getAllUsers().then(({data})=>{setUsers(data)})
  },[pushAddBtn , editUserBtn])

  return (
    <div id='second'>
      <Link to="/">Go Home</Link>
      <input onChange={handleChangeInputValue} placeholder='Enter your name' name='name'></input>
      <input onChange={handleChangeInputValue} placeholder='Enter your surname' name='surname'></input>
      <input onChange={handleChangeInputValue} placeholder='Enter your image url' name='avatar'></input>
      <button onClick={pushAddBtn}>Create Add</button>
      <input onChange={handleChangeInputValue} placeholder='Enter id for change User' name='id'></input>
      <button onClick={editUserBtn}>Change User</button>
    </div>
  )
}

export default CreateUser