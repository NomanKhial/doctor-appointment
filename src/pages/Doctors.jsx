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
    }, [speciality])
    return (

        <section>
            <p>Browse through the doctors specialist.</p>
            <div>
                {/* side menu */}
                <div>
                    <p>General physician</p>
                    <p>Gynecologist</p>
                    <p>Dermatologist</p>
                    <p>Pediatricians</p>
                    <p>Neurologist</p>
                    <p>Gastroenterologist</p>
                </div>

                {/* doctors grid */}
                <div>
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
