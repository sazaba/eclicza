import React from 'react'
import '../components/ProyectData.css'

const ProyectData = ({ title, paragraph, img1, img2, classR }) => {
    return (
        <div className={classR}>
            <div className='des-text'>
                <h2>{title}</h2>
                <p>{paragraph}</p>
            </div>
            <div className='image'>
                <img src={img1} alt='' />
                <img src={img2} alt='' />
            </div>

        </div>
    )
}

export default ProyectData