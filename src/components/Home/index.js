import React from 'react'
import {Link} from 'react-router-dom'
import '../Home/index.scss'



function Home() {

    
  return (
  <>
    <Link className='btn' to="/users">Users</Link>
    <Link className='btn' to="/about">Create User</Link>
  </>
  )
}

export default Home