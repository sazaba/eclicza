import React from 'react'
import '../components/Proyects.css'
import ProyectData from './ProyectData'

const Proyects = () => {
    return (
        <div className='proyects'>
            <h1>What We Develop</h1>
            <p>We create E commerce, websites and personalized web apps</p>
            <ProyectData
                title='E Commerce'
                paragraph='E commerce, short for electronic commerce, refers to the buying and selling of goods or services over the internet. In e-commerce, transactions can be conducted through various online platforms, such as websites, mobile applications, and social media channels. E-commerce has become increasingly popular in recent years due to its convenience, accessibility, and ability to reach a global audience.'
                img1='https://i.postimg.cc/d1s3Sn7L/emiliano-vittoriosi-jovi7g-RQj-Os-unsplash.jpg'
                img2='https://i.postimg.cc/1XSkKY4j/austin-distel-qgd-JX9mv-MJI-unsplash.jpg'
                classR='first-des'
            />
            <ProyectData
                title='Websites'
                paragraph='A website is a collection of web pages that are hosted on a web server and can be accessed by anyone over the internet using a web browser. A web page is a document that can contain text, images, videos, audio, and other multimedia elements. Websites can be used for various purposes, such as providing information, selling products or services, connecting people, or entertaining users.'
                img1='https://i.postimg.cc/yd7KC4gs/markus-spiske-1-LLh8k2-YFk-unsplash.jpg'
                img2='https://i.postimg.cc/WpfBXJn2/annie-spratt-MCh-SQHx-GZr-Q-unsplash.jpg'
                classR='first-des-reverse'
            />
        </div>
    )
}

export default Proyects