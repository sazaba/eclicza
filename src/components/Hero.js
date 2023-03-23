import React from 'react'
import codigo from '../images/codigo.jpg'
import '../components/Hero.css'
const Hero = () => {
    return (
        <div className='Hero'>
            <img className='HeroImg' src={codigo} alt='' />

            <div className='HeroText'>
                <h1>Your Journey Your Story</h1>
                <p>Choose Your Favorite Product</p>
                <button>Choose Your Product</button>
            </div>
        </div>
    )
}

export default Hero