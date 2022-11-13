import React from 'react'
import Navigate from '../../components/Navigate'
import LogoRed from '../../images/LogoRed.svg'
import './styles.css'

function Header() {
    return (
        <div className='Header'>
            <img src={LogoRed} alt='logo' className='logo' />
            <Navigate />
        </div>
    )
}

export default Header