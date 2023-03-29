import Hero from '../components/Hero'
import Proyects from '../components/Proyects'


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
            <Proyects />

        </div>
    )
}

export default Home