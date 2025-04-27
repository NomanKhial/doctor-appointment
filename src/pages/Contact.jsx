import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

function Contact() {
    return (
        <section className='flex flex-col justify-center'>
            <h2 className='text-center text-2xl pt-10 text-gray-500'>CONTACT <span className=' text-gray-900 font-bold'>Us</span></h2>
            <div className='my-10 flex flex-col sm:flex-row items-center gap-10  p-1 pb-4 justify-center sm:py-10 sm:px-10'>
                <img className=' w-full max-w-[360px] object-cover object-center' src={assets.contact_image} />
                <div className='flex flex-col gap-6  px-10'>
                    <h3 className='font-semibold text-lg text-gray-600'>Our OFFICE</h3>
                    <div>
                        <p className=' text-gray-500'>54709 Willms Station </p>
                        <p className=' text-gray-500'>Suite 350, Washington, USA</p>
                    </div>
                    <div>
                        <p className=' text-gray-500'>Tel: (092) 487498</p>
                        <p className=' text-gray-500'>Email: nomankhail@gmail.com</p>
                    </div>
                    <div className='flex flex-col gap-2 items-start'>
                        <h3 className='font-semibold text-sm text-gray-500'>Careers at PRESCRIPTO</h3>
                        <p className=' text-gray-500'>Learn more about our teams and job openings.</p>
                        <button className='border px-6 py-3 hover:bg-primary hover:text-white transition-all duration-300 rounded-lg'>Explore Jobs</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
