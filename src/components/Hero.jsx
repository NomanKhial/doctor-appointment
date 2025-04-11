import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

function Hero() {
    return (
        // header / hero section
        <section className='flex flex-col lg:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
            {/* -------left side -------- */}
            <section className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
                <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight'>Book Appointment<br /> With Trusted Doctors </p>

                <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                    <img className='w-28 cursor-pointer' src={assets.group_profiles} loading='lazy' />
                    <p className='hidden sm:block'>Simply browse through our extensive list of trusted doctors, <br /> Schedule appointment Now!</p>
                </div>

                <a to="/appointment" className=''>Book Appointment <img src={assets.arrow_icon} /></a>
            </section>


            {/* -------Right side -------- */}
            <section className='md:w-1/2 relative'>
                <img className='w-full absolute bottom-0 h-auto rounded-lg' src={assets.header_img} loading='lazy' />
            </section>

        </section>
    )
}

export default Hero
