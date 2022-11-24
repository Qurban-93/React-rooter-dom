import React from 'react'
import {usersService} from "../Api/Services/users"

const UserContext = React.createContext({});

function UserContextProvider({children}) {
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

  return (
    <UserContext.Provider value={[{users,setUsers,newUser,setNewUser}]}>
        {children}
    </UserContext.Provider>
  )
}

const useUserContext = () =>{
    return React.useContext(UserContext);

}

export {useUserContext , UserContextProvider};