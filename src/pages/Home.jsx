import React from 'react'
import Hero from '../components/Hero'
import SpecialityMenu from '../components/SpecialityMenu'
import Topdoctors from '../components/Topdoctors'

function Home() {
    return (
        <div className='text-3xl'>
            <Hero />
            <SpecialityMenu />
            <Topdoctors />
        </div>
    )
}

export default Home
