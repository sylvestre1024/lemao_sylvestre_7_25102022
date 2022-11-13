import React from 'react'
import { NavLink } from "react-router-dom";
import './styles.css'

function Navigate() {
  return (
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
  )
}

export default Navigate