import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import Dashboard from '../pages/Dashboard'
import AddBlog from '../components/DashboardPage/AddBlog'

function MainRoute() :JSX.Element {
  return (
    <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/dashboard/addBlog' element={<AddBlog/>}/>
    </Routes>
  )
}

export default MainRoute