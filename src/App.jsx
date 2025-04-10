import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from "./pages/Doctors"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import Appointment from './pages/Appointment'
import Nav from './components/Nav'
import Contact from './pages/Contact'

function App() {
  return (
    <div className='mx-4 sm:mx-[10%]'>

      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors:speciality' element={<Doctors />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/appointment:docId' element={<Appointment />} />
      </Routes>
    </div>
  )
}

export default App
