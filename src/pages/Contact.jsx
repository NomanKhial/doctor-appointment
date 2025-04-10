import { Button } from '@mui/joy'
import React from 'react'

function Contact() {
    return (
        <section className="mx-auto w-1/2">
            <div className='margin-auto max-w-[600px] border-[2px] text-xl text-center min-h-[400px] rounded-md'>
                <h2 className='text-center mt-5 text-3xl mb-10 border-b pb-4'>Get In Touch</h2>
                <form className='flex flex-col gap-3 items-center'>
                    <input placeholder='Your Name*' required className='pl-2 border w-[60%] outline-none' type='name' />
                    <input placeholder='Subject*' required className='pl-2 border w-[60%] outline-none' type='name' />
                    <input placeholder='Email*' required className='pl-2 border w-[60%] outline-none' type='email' />
                    <textarea placeholder='Message*' required className='pl-2 border w-[60%] outline-none' type='name' />
                    <Button>Throw Message</Button>
                </form>
            </div>
        </section>
    )
}

export default Contact
