import React from 'react'
import { Link } from 'react-router-dom'
import { specialityData } from "../assets/assets_frontend/assets.js"
function SpecialityMenu() {
    return (
        <section id='speciality' className='flex flex-col items-center gap-4 py-16 text-gray-800'>
            <h1 className='text-3xl font-medium'>Find by Speciality</h1>
            <p className=' sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>

            {/*############### Speciality menu ############## */}

            <ul className='flex sm:justify-center gap-4 overflow-scroll pt-5'>
                {specialityData.map((item, id) => (
                    <Link onClick={() => scrollTo(0, 0)} className='flex flex-col items-center text-xs flex-shrink-0 cursor-pointer hover:translate-y-[-10px] transition-all duration-300 ' key={id} to={`speciality/${item.speciality}`}>
                        <img className='w-16 sm:w-24 mb-2' src={item.image} />
                        <p>{item.speciality}</p>
                    </Link>
                ))}
            </ul>
        </section>
    )
}

export default SpecialityMenu
