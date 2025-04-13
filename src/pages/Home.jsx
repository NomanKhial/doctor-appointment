import React from 'react'
import Hero from '../components/Hero'
import SpecialityMenu from '../components/SpecialityMenu'
import Topdoctors from '../components/Topdoctors'
import Banner from '../components/Banner'

function Home() {
    return (
        <div className='text-3xl'>
            <Hero />
            <SpecialityMenu />
            <Topdoctors />
            <Banner />
        </div>
    )
}

export default Home
