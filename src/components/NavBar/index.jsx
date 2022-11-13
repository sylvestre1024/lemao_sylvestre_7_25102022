import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoRed from '../images/LogoRed.svg'
import './styles.css'

function NavBar() {
    return (
        <div className='Header'>
            <img src={LogoRed} alt='logo' className='logo' />
            <nav>
                <ul className='menu'>
                    <NavLink to="/">
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="About">
                        <li>A Propos</li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar