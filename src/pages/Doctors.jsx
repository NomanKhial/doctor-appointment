import React from 'react'
import { useParams } from 'react-router-dom'

function Doctors() {
    const { speciality } = useParams()
    return (
        <div>
            {console.log(speciality)}
        </div>
    )
}

export default Doctors
