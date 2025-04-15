import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
function Topdoctors() {
    // navigate to check doctor details
    const navigate = useNavigate()

    // doctors data from context
    const { doctors } = useContext(AppContext)

    return (
        <section className='flex flex-col items-center gap-4 text-gray-900 my-16 md:mx-10'>
            <h2 className='text-3xl font-medium'>Top Doctors to Book</h2>
            <p className='sm:w-1/3 text-sm text-center'>Simply browse through our extensive list of trusted doctors.</p>

            {/* #### top doctors section ##### */}

            <section className='w-full grid  grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                {doctors.slice(0, 10).map(doctor => (
                    <div onClick={() => navigate(`/appointment/${doctor._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-300 ' key={doctor._id}>
                        <img className='bg-blue-50' src={doctor.image} loading='lazy' />
                        <div className='p-4'>
                            <div className='flex items-center text-center text-sm gap-2  text-green-500'>
                                <p className='w-2 h-2 rounded-full bg-green-500'></p>
                                <p>Available</p>
                                <p>{doctor.degree}</p>
                            </div>
                            <p className='text-lg font-medium text-gray-900'>{doctor.name}</p>
                            <p className='text-gray-600 text-sm'>{doctor.speciality}</p>
                        </div>
                    </div>
                ))}
            </section>
            <button onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} className=' bg-blue-50 text-gray-600 rounded-full px-12 py-3 mt-10'>More</button>

        </section>
    )
}

export default Topdoctors
