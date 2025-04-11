import React, { useState } from 'react'
import { assets } from "../assets/assets_frontend/assets.js"
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Button } from '@mui/joy'
const Nav = () => {

    // function to navigate to register page
    const navigate = useNavigate()
    function createAccount() {
        navigate("/account")
    }

    // state for conditionally rendering of Profile and Create Account Button
    const [menu, SetMenu] = useState(false)

    // state for checking if the user is login
    const [token, setToken] = useState(true)

    return (
        <nav className='flex items-center justify-between text-sm py-4 mb-5 border-b  '>
            <div>
                <img src={assets.logo} />
            </div>

            {/* navlinks */}
            <ul className='flex gap-3 font-medium'>
                <NavLink to="/">
                    <li className='py-1'>Home</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to="/doctors">
                    <li className='py-1'>All Doctors</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to="/about">
                    <li className='py-1'>About</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to="/contact">
                    <li className='py-1'>Contact</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
            </ul>

            {/* login button */}
            <div>
                {
                    token
                        ?
                        <div className='flex items-center gap-2 cursor-pointer group relative'>
                            <img src={assets.profile_pic} loading='lazy' className=' w-8 rounded-full' />
                            <img src={assets.dropdown_icon} loading='lazy' className='w-2.5' />

                            {/* dropdown menu */}

                            <div className='absolute top-0 left-0 pt-14 text-base font-medium text-gray-700 hidden group-hover:block'>
                                <ul className='min-w-48 bg-stone-100 flex flex-col gap-4 p-4 rounded-md'>
                                    <Link className='hover:text-black' to='/profile'>Profile</Link>
                                    <Link className='hover:text-black' to='/appointment'>Appointments</Link>
                                    <Link className='hover:text-black' to='/about'>Logout</Link>
                                </ul>
                            </div>


                        </div>
                        :
                        <Button onClick={createAccount} className=' bg-primary rounded-md'>Create account</Button>
                }
            </div>
        </nav>
    )
}

export default Nav
