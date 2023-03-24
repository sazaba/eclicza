import React from 'react'
import '../components/Hero.css'
const Hero = ({ heroImg, title, paragraph, btn, heroClass, btnClass }) => {

    return (
        <div className={heroClass}>
            <img className='HeroImg' src={heroImg} alt='' />
            <div className='HeroText'>
                <h1>{title}</h1>
                <p>{paragraph}</p>
                <button className={btnClass}>{btn}</button>
            </div>
        </div>
    )
}

export default Hero