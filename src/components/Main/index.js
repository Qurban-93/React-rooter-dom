import React from 'react'
import {usersService} from '../../Api/Services/users'
import "./index.css"


function Main() {
const [users , setUsers] = React.useState([]);
const [newUser , setNewUser] = React.useState({
  name:'',
  surname:'',
  avatar:'',
  id:'',
})


React.useEffect(()=>{
    usersService.getAllUsers().then(({data})=>{setUsers(data)})
  },[])

const showUser = () =>{
  usersService.getAllUsers().then(({data})=>{setUsers(data)})
}

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
    <>
        <div id='second'>
      <input onChange={handleChangeInputValue} placeholder='Enter your name' name='name'></input>
      <input onChange={handleChangeInputValue} placeholder='Enter your surname' name='surname'></input>
      <input onChange={handleChangeInputValue} placeholder='Enter your image url' name='avatar'></input>
      <input onChange={handleChangeInputValue} placeholder='Enter id for change User' name='id'></input>
      <button onClick={pushAddBtn}>Create Add</button>
      <button onClick={editUserBtn}>Change User</button>
    </div>
    <div id='first'>
      <button onClick={showUser}>Show</button>
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
    </>
  )
}

export default Main