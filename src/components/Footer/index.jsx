import React from 'react'
import LogoWhite from '../../images/LogoWhite.svg'
import './styles.css'

// ==============================================================

function Footer() {
    return (
        <div className='footer'>
            <img src={LogoWhite} alt='logo' className='LOGO' />
            <p className='Text_footer'>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer