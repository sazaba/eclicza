import Hero from '../components/Hero'
import Proyects from '../components/Proyects'


function Home() {
    return (
        <div>
            <Hero
                heroClass='Hero'
                heroImg='https://i.postimg.cc/QMQ6VTqL/ilya-b4s7eitm-Eqs-unsplash-1.jpg'
                title='Your Journey Your Story'
                paragraph='Choose Your Favorite Product'
                btn='Choose Your Product'
            />
            <Proyects />

        </div>
    )
}

export default Home