import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Privateroute = () => {
    const auth = localStorage.getItem('token')
    return auth && auth !== null && auth !== undefined ? <Outlet/> : <Navigate to={'/login'}/>
}

export default Privateroute