import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

function AppointmentsBook() {
    const navigate = useNavigate()
    const { doctors } = useContext(AppContext)
    return (
        <div className='flex flex-col gap-4 cursor-pointer mb-4 items-start'>
            {doctors.slice(0, 4).map((doc) => (
                <div onClick={() => navigate(`/appointment/${doc._id}`)} key={doc._id} className=' bg-indigo-200 p-5 rounded-lg '>
                    <img className='w-full max-w-[360px] object-cover object-center rounded-lg' src={doc.image} alt={doc.name} />
                    <h3 className='text-gray-600 text-2xl font-semibold'>{doc.name}</h3>
                    <p className='text-gray-500'>{doc.speciality}</p>
                    <p className='text-gray-500'>{doc.experience}</p>
                </div>
            ))}
        </div>
    )
}

export default AppointmentsBook
