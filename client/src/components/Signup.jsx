import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()
  const [input,setInput]= useState({
    email:'',
    password:'',
    username:'',
  })
  const handleSubmit =async (e)=>{
    e.preventDefault()
    if (!window.isEmail(input.email)) {
      alert('Please enter correct email')
    }
try {
  const res = await axios.post("http://localhost:8000/api/v1/signup",input)
  console.log(res.data)
  setInput({
    email:'',
    password:'',
    username:'',
  })
  navigate('/login')
} catch (error) {
  console.log(error)
}
  }
console.log(input)

  return (
    <div>
      <form  onSubmit={handleSubmit} >
      Username: <input type="text" name='username' value={input.username} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
      <br />
      email: <input type="text" name='email' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} value={input.email}/>
      <br />
      password: <input type="text" name='password' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} value={input.password}/>
      <br />
      <button type='submit' style={{cursor:'pointer'}}>Signup</button>
      </form>
      <br />
      Already have account? <button style={{cursor:'pointer'}} onClick={()=>navigate('/login')}>Login</button>
      <br /><br /><br /><br />
      below image got from global variable : <br /><br />
      <img src={window.img} width={100} height={100} alt="" />
    </div>
  )
}

export default Signup