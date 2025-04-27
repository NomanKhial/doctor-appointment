import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

function Doctors() {
    const navigate = useNavigate()
    const { speciality } = useParams()

    // import doctors array
    const { doctors } = useContext(AppContext)

    // state for filtring
    const [filterDoctors, setFilter] = useState([])


    //filtering logic
    const filterDoc = () => {
        if (speciality) {
            setFilter(doctors.filter(doc => doc.speciality === speciality))
        } else {
            setFilter(doctors)
        }
    }

    // apply filter on state updates
    useEffect(() => {
        filterDoc()
    }, [speciality, doctors])
    return (

        <section>
            <p className='text-gray-600'>Browse through the doctors specialist.</p>
            <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
                {/* side menu */}
                <div className='flex flex-col gap-4 text-sm text-gray-600'>
                    <p onClick={() => speciality === "General physician" ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>General physician</p>
                    <p onClick={() => speciality === "Gynecologist" ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Gynecologist</p>
                    <p onClick={() => speciality === "Dermatologist" ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Dermatologist</p>
                    <p onClick={() => speciality === "Pediatricians" ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Pediatricians</p>
                    <p onClick={() => speciality === "Neurologist" ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Neurologist</p>
                    <p onClick={() => speciality === "Gastroenterologist" ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Gastroenterologist</p>
                </div>

                {/* doctors grid */}
                <div className=' w-full grid grid-cols-auto gap-4 gap-y-6'>
                    {
                        filterDoctors.map(doctor => (
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
                        ))
                    }
                </div>
            </div>
        </section>

    )
}

export default Doctors
