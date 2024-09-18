import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const About = () => {
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

</div>
<br /><br /><br /><br /><br /><br /><br /><br /><br />
    <div>About</div>
<br /><br /><br /><br /><br /><br /><br /><br /><br />
<button onClick={handleLogout} style={{cursor:'pointer'}}>Log out</button>
    </>
  )
}
export default About