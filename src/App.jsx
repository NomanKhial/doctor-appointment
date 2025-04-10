import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from "./pages/Doctors"
import Profile from "./pages/Profile"

function App() {
  return (
    <div className='mx-4 sm:mx-[10%]'>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
