import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'

function MainRoute() :JSX.Element {
  return (
    <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
    </Routes>
  )
}

export default MainRoute