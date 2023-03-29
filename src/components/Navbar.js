import React, { useState } from 'react'
import '../components/Navbar.css'
import logo from '../images/logo.png'
import RoofingIcon from '@mui/icons-material/Roofing';
import InfoIcon from '@mui/icons-material/Info';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [clicked, setclicked] = useState(true)
    const clickOn = () => {
        setclicked(false)
    }
    const clickOff = () => {
        setclicked(true)
    }
    return (
        <div className='navbar'>
            <img className='navbarLogo' loading='lazy' src={logo} alt='' />
            <div className='hamburguer'>
                {clicked ? <MenuIcon onClick={clickOn} /> : <CloseIcon onClick={clickOff} />}
            </div>
            <div className={clicked ? 'navbarItems active' : 'navbarItems'}>
                <Link onClick={() => setclicked(true)} className='link' to='/'>
                    <div className='navbarItem'>
                        <RoofingIcon />
                        <span>Home</span>
                    </div>
                </Link>
                <Link onClick={() => setclicked(true)} className='link' to='/about'>
                    <div className='navbarItem'>
                        <InfoIcon />
                        <span>About</span>
                    </div>
                </Link>
                <Link onClick={() => setclicked(true)} className='link' to='/services' >
                    <div className='navbarItem'>
                        <Diversity3Icon />
                        <span>Services</span>
                    </div>
                </Link>
                <Link onClick={() => setclicked(true)} className='link' to='/contact '>
                    <div className='navbarItem'>
                        <AlternateEmailIcon />
                        <span>contact</span>
                    </div>
                </Link>

            </div>

        </div >
    )
}

export default Navbar