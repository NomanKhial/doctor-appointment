import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

function RelatedDoc({ speciality, docId }) {
    const navigate = useNavigate()
    const { doctors } = useContext(AppContext)
    const [relDoc, setRelDoc] = useState([])

    // state update
    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorData = doctors.filter(doc => doc.speciality === speciality && doc._id != docId)
            setRelDoc(doctorData)
        }
    }, [speciality, docId, doctors])

    return (
        <div className='mt-5'>
            <h2 className='mb-4 text-gray-900 font-bold text-2xl'>Related Doctors</h2>
            <div className='w-full grid grid-cols-auto gap-x-2 '>
                {relDoc.map(doctor => (
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
            </div>
        </div>

    )
}

export default RelatedDoc
