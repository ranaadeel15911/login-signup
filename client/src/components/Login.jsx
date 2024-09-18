import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [input,setInput]= useState({
    email:'',
    password:'',
  })
  const handleSubmit =async (e)=>{
    e.preventDefault()
try {
  const res = await axios.post("http://localhost:8000/api/v1/login",input)
  console.log(res.data)
  localStorage.setItem('token',res.data.token)
  localStorage.setItem('username',res.data.username)
  setInput({
    email:'',
    password:'',
  })
  navigate('/')

} catch (error) {
  console.log(error)
}
  }
console.log(input)

  return (
    <div>
      <form  onSubmit={handleSubmit} >
      email: <input type="text" name='email' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} value={input.email}/>
      <br />
      password: <input type="text" name='password' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} value={input.password}/>
      <br />
      <button type='submit' style={{cursor:'pointer'}}>Login</button>
      </form>
      <br />
  <button onClick={()=>navigate('/signup')} style={{cursor:'pointer'}}>Signup</button>
    </div>
  )
}

export default Login