import React from 'react'
import Hero from '../components/Hero'



function Home() {
    return (
        <div>
            <Hero
                heroClass='Hero'
                heroImg='https://i.postimg.cc/XJm09M4V/ilya-b4s7eitm-Eqs-unsplash.jpg'
                title='Your Journey Your Story'
                paragraph='Choose Your Favorite Product'
                btn='Choose Your Product'
            />
        </div>
    )
}

export default Home