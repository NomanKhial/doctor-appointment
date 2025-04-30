import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
function Profile() {
    return (
        <section>
            <div className='flex flex-col gap-8  py-8 mb-4'>
                <div className='flex gap-2 items-center flex-col sm:flex-row'>
                    <img className='w-70 max-w-[360px] object-cover object-center rounded-lg' src={assets.profile_pic} />
                    <img className='w-70 max-w-[360px] object-cover object-center rounded-lg' src={assets} />
                </div>
                <h3 className=' text-gray-600 text-3xl font-semibold'>Edward Vincent</h3>
            </div>
            <hr />
            {/* text data */}
            <div className='flex flex-col gap-8 justify-between py-4'>
                <div className='flex flex-col gap-3'>
                    <p className=' text-gray-700 font-semibold text-sm'>CONTACT INFORMATION</p>
                    <div className='flex gap-6 items-center'>
                        <p>Email id:</p>
                        <p>Erichardjameswap@gmail.com</p>
                    </div>
                    <div className='flex gap-6 items-center'>
                        <p>Phone:</p>
                        <p>+1  123 456 7890</p>
                    </div>
                    <div className='flex gap-6 items-center'>
                        <p>Address:</p>
                        <p>57th Cross, Richmond <br /> Circle, Church Road, London</p>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <p>BASIC INFORMATION</p>
                    <div className='flex gap-6 items-center'>
                        <p>Gender:</p>
                        <p>Male</p>
                    </div>
                    <div className='flex gap-6 items-center'>
                        <p>Birthday:</p>
                        <p>20/10/2002</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <button className=' border px-10 py-2 border-primary  rounded-full hover:bg-indigo-600 hover:text-white duration-300'>Edit</button>
                        <button className=' border px-5 sm:px-10 py-2 border-primary  rounded-full hover:bg-indigo-600 hover:text-white duration-300'>Save Information</button></div>
                </div>
            </div>
        </section>
    )
}

export default Profile
