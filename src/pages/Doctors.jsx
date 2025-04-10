import React from 'react'
import { doctors } from "../assets/assets_frontend/assets"
import { Box, Typography } from '@mui/joy'
function Doctors() {
    return (
        <section className='border flex flex-wrap w-full gap-2 justify-center'>
            {doctors.map(doctor => (
                <div className='border mt-10 p-[4px] rounded-md shadow'>
                    <img className='max-w-[380px] object-cover object-center' key={doctor._id} src={doctor.image} />
                    <Box className='flex justify-between px-[14px] pt-[10px]'>
                        <Typography>{doctor.name}</Typography>
                        <Typography>{doctor.fees}$ / hour</Typography>
                    </Box>
                </div>
            ))}
        </section>
    )
}

export default Doctors
