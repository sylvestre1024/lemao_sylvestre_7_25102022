import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css'

const Card = ({ product }) => {
    return (
        <NavLink to={`Product/${product.id}`}>
            <li className='product-item'>
                <div>
                    <img className='card-cover' src={product.cover} alt={"logement" + product.title} />
                </div>
                <h2 className='title-card'>
                    {product.title}
                </h2>
            </li>
        </NavLink>
    )
}

export default Card