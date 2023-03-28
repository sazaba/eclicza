import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Proyects from '../components/Proyects'
import ClimbingBoxLoader from "react-spinners/ClipLoader";



function Home() {
    const [isLoading, setisLoading] = useState(false)
    useEffect(() => {
        setisLoading(true)
        setTimeout(() => {
            setisLoading(false)
        }, 400)
    }, [])
    return (
        <div>
            {isLoading ? (
                <ClimbingBoxLoader
                    color="#36d7b7"
                    size={25}
                />) : (
                <>
                    <Hero
                        heroClass='Hero'
                        heroImg='https://i.postimg.cc/XJm09M4V/ilya-b4s7eitm-Eqs-unsplash.jpg'
                        title='Your Journey Your Story'
                        paragraph='Choose Your Favorite Product'
                        btn='Choose Your Product'
                    />
                    <Proyects />
                </>
            )}

        </div>
    )
}

export default Home