import { Button } from '@mui/joy';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Account() {
    const [state, setState] = useState('sign up');
    const [userCredentials, setCredential] = useState({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = userCredentials

    // Form handler
    const formHandler = async (event) => {
        event.preventDefault()
        console.log(name)
    }


    return (
        <form onClick={formHandler} className='flex-col min-h-[80vh] flex items-center'>
            <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
                <p className=' text-2xl font-semibold'>{state == "sign up" ? 'Create Account' : 'Login'}</p>
                <p>Please {state == "sign up" ? 'sign up' : 'login'} to book appointment</p>
                {/* form body field */}
                {state === 'sign up' && <div className='w-full'>
                    <p>Full Name</p>
                    <input className='border outline-none cursor-help border-zinc-300 w-full rounded mt-1 p-2' placeholder='Enter Your Full Name' value={userCredentials.name} type='text' required
                        onChange={(e) => setCredential({ ...userCredentials, name: e.target.value })} />
                </div>}
                <div className='w-full'> <p>Email</p>
                    <input className='border outline-none cursor-help border-zinc-300 w-full rounded mt-1 p-2' placeholder='Enter Your Email' value={userCredentials.email} type='email' required
                        onChange={(e) => setCredential({ ...userCredentials, email: e.target.value })} /></div>
                <div className='w-full'><p>Password</p>
                    <input className='border outline-none cursor-help border-zinc-300 w-full rounded mt-1 p-2' placeholder='Enter Your Password' value={userCredentials.password} type='password' required
                        onChange={(e) => setCredential({ ...userCredentials, password: e.target.value })} /></div>
                <Button type='submit' className=' w-full'>{state == "sign up" ? 'Create Account' : 'Login'}</Button>
                <p>
                    {
                        state == 'sign up' ?
                            <p>Already have an account <span className='text-primary underline cursor-pointer' onClick={() => setState('login')}>Login</span></p> :
                            <p>Create an new account <span className='text-primary underline cursor-pointer' onClick={() => setState('sign up')}>Click here</span></p>
                    }
                </p>
            </div>

        </form>
    )
}

export default Account
