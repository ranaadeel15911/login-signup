import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const [name,setName]= useState('adeel')
const handleAuth = async() => {
try {
  const res = await axios.post("http://localhost:8000/api/v1/check",name,
  {
    headers:{
      "Authorization" : `Bearer ${localStorage.getItem("token")}`
    }
  }
  )
  console.log(res)
  if(res.data){
    console.log(res.data)
    alert('Yes you are authenticated')
    // localStorage.setItem("user",JSON.stringify(res.data.data))
    // navigate('/dashboard')
  }
  else{
    console.log(res.data.message)
  }
} catch (error) {
  if (error) {
    alert('Not Authenticated User')
  }
  // console.log(error)
}
  
}
const navigate = useNavigate()
const handleLogout = ()=>{
  localStorage.removeItem("token")
  localStorage.removeItem("username")
navigate('/login')
}
  return (
    <>
<div style={{display:'flex',gap:3}}>
    <Link to={'/'}>Home</Link>
    <Link to={'/about'}>About</Link>
    <Link to={''}></Link>

</div>

    <br /><br /><br /><br /><br /><br /><br /><br /><br />
    <div >Home</div>
    <br /><br /><br /><br />
<button onClick={handleAuth} style={{cursor:'pointer'}}>Check Auhtentication</button>
<br /><br /><br />
<button onClick={handleLogout} style={{cursor:'pointer'}}>Log out</button>
    </>
  )
}

export default Home