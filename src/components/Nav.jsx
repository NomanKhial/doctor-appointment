import React from 'react'
import { assets } from "../assets/assets_frontend/assets.js"
import { NavLink } from 'react-router-dom'
import { Button } from '@mui/joy'
const Nav = () => {
    return (
        <nav className='flex items-center justify-between text-sm py-4 mb-5 border-b  border-b-gray-100'>
            <div>
                <img src={assets.logo} />
            </div>

            {/* navlinks */}
            <ul className='flex gap-3'>
                <NavLink to="/">
                    <li>Home</li>
                    <hr />
                </NavLink>
                <NavLink to="/doctors">
                    <li>All Doctors</li>
                    <hr />
                </NavLink>
                <NavLink to="/about">
                    <li>About</li>
                    <hr />
                </NavLink>
                <NavLink to="/contact">
                    <li>Contact</li>
                    <hr />
                </NavLink>
            </ul>

            {/* login button */}
            <div>
                <Button>Create account</Button>
            </div>
        </nav>
    )
}

export default Nav
