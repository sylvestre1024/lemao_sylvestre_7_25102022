import React from 'react'
import Card from '../../components/Card'
import './styles.css'

/*
L'objet data correspond à l'interrogation des annonces des logements au format json initialement, 
et requêté via une fonction asynchrone via un hook personnalisé (utilisation de fetch), 
puis 
transmis en paramètre aux propriétés du composant parent dans la 'Route' dans 'app.js' 
puis
retransmis au 1er composant enfant 'ListCard' (ici-même) via le paramètre 'data' (on parle de props chez React, et pas de paramètre)
puis 
on redescend encore cette 'props' à nouveau dans le composant final enfant 'Card'

Un objet Map contient des paires de clé-valeur
 et mémorise l'ordre dans lequel les clés ont été insérées
*/

function ListCard({ data }) {
    //console.log(data)
    return (
        <div className='container_card'>
            <ul className='box_card'>
                {data
                    .map((product, index) => (
                        <Card key={index} product={product} />
                    ))
                }
            </ul>
        </div>
    )
}

export default ListCard