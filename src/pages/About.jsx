import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

function About() {
    return (
        <section>
            <div>
                <h3 className='text-center text-3xl pt-10 text-gray-500'>About <span className='text-gray-700 font-medium'>Us</span></h3>
                <div className=' my-10 flex flex-col md:flex-row gap-12'>
                    <img className='w-full max-w-[360px] object-cover object-center' src={assets.about_image} />
                    <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
                        <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
                        <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
                        <div>
                            <h3 className='mb-4 font-bold text-xl'>Our Vision</h3>
                            <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.

                                Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.

                                Our Vision

                                Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* why choose us section */}
            <div>
                <p className='text-xl my-4'>Why <span className=' text-gray-700 font-semibold'>Choose Us</span></p>
                <div className='flex flex-col sm:flex-row items-center mb-20'>
                    <div className='border px-10 sm:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer'>
                        <h3>Efficiency:</h3>
                        <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
                    </div>
                    <div className='border px-10 sm:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer'>
                        <h3>Convenience:</h3>
                        <p>Access to a network of trusted healthcare professionals in your area.</p>
                    </div>
                    <div className='border px-10 sm:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer'>
                        <h3>Personalization:</h3>
                        <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
