import React from 'react'
import { assets } from "../assets/assets_frontend/assets"
function Slider() {
    return (
        <div className='w-full h-[80vh]'>
            <img className='w-full h-full object-cover object-top' src={assets.about_image} />
        </div>
    )
}

export default Slider
