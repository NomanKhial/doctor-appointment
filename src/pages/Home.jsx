import React from 'react'
import Hero from '../components/Hero'
import SpecialityMenu from '../components/SpecialityMenu'
import Topdoctors from '../components/Topdoctors'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

function Home() {
    return (
        <div className='text-3xl'>
            <Hero />
            <SpecialityMenu />
            <Topdoctors />
            <Banner />
            <Footer />
        </div>
    )
}

export default Home
