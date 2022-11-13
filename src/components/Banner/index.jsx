import React from 'react'
import './styles.css'
import Background from '../../images/Banner.webp'

function Banner() {
    return (
        <div className='banner'>
            <img src={Background} alt='bannière de paysage' className='background-banner' />
            <h1 className='title-banner'>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner