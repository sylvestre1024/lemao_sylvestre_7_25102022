import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css'

/* on reçoit le produit, ici le logement, c'est notre motif de répétition
mis en forme avec les appels de classes css via ClassName dans le dom virtuel de React

Le <Link> et le <NavLink> sont les composants fournis par react-router-dom 
pour naviguer dans l'application de React. 

<Link> et <NavLink> ne restitueront que les composants mis à jour correspondant 
au chemin URL de la Route sans rechargement. 
Cela aide les applications à page unique à fonctionner plus rapidement lors du routage.

On passe le paramètre id pour amener l'utilisateur à cliquer vers la page de détail du produit 
(le logement et ses caractéristiques détaillés)
*/
const Card = ({ product }) => {
    return (
        <NavLink to={`Product/${product.id}`}>
            <li className='product-item'>
                <div className='gradient-overlay'>
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