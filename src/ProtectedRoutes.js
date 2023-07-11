import React from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Login from "./components/Login"

const ProtectedRoutes = () => {
    
    const isAuth = useSelector((state) => state.userSlice.isAuth)

    console.log("isAuth: " , isAuth)
    return (
        isAuth ? <Outlet /> : <Login />
        )
}

export default ProtectedRoutes
