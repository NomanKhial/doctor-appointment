import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

function Footer() {
    return (
        <footer className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mb-4 mt-40 text-sm border-b pb-6'>
                {/* left */}
                <section>
                    <img className='mb-7' src={assets.logo} />
                    <p className='text-sm text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </section>
                {/* center */}
                <section>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                    </ul>
                </section>
                {/* right */}
                <section>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+92-xxxx-xxx-xxx-x</li>
                        <li>nomankhialb@gmail.com</li>
                    </ul>
                </section>
            </div>
            {/* copyright section */}
            <section className='py-5 text-sm text-center'>{`Copyright © ${new Date().getFullYear()} NomanKhial - All Right Reserved.`}</section>
        </footer>
    )
}

export default Footer
