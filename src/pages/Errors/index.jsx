import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function Errors() {
    return (
        <div className='container_errors'>
            <p className='errors_number'>404</p>
            <h1 className='errors_text'>Oups! La page que vous demandez n'existe pas.</h1>
            <Link to="/">
                <p className='text_return'>Retourner sur la page d’accueil</p>
            </Link>
        </div>
    )
}

export default Errors