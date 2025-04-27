import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets_frontend/assets'

function Appointment() {
    // get doctor id from params
    const { docId } = useParams()

    // state for storing doctor details
    const [docInfo, setDocInfo] = useState(null)

    //doctors data
    const { doctors, currencySymbol } = useContext(AppContext)

    const fetchDocData = async () => {
        const docData = doctors.find(doc => doc._id === docId)
        setDocInfo(docData)
    }

    // call function on state changes
    useEffect(() => { fetchDocData() }, [docId, doctors])
    return docInfo && (
        <section>

            {/* doctor details */}
            <div className=' flex flex-col sm:flex-row gap-4 '>
                <div>
                    <img className='bg-indigo-100 w-full sm:max-w-72 rounded-lg' src={docInfo.image} />
                </div>
                {/* textual data */}
                <div className='flex-1 border border-gray-400 p-8 rounded-lg py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
                    <p className='flex items-center gap-2 text-gray-900 text-2xl font-medium'>
                        <h3>{docInfo.name}</h3>
                        <img className='w-5' src={assets.verified_icon} />
                    </p>
                    <div className=' flex items-center gap-2 text-gray-600 mt-1 text-sm'>
                        <p>{docInfo.degree} - {docInfo.speciality}</p>
                        <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
                    </div>

                    {/* about data */}

                    <div>
                        <p className='flex items-center gap-1 my-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} /></p>
                        <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
                    </div>

                    {/* appointment */}
                    <p className='text-gray-500 mt-4 font-medium'>Appointment fee: <span>{currencySymbol}{docInfo.fees}</span></p>
                </div>
            </div>

        </section>
    )
}

export default Appointment
