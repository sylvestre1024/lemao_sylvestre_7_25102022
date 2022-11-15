import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Errors from '../Errors'
import Carousel from '../../components/Carousel'
import Avatar from '../../components/Avatar'
import { ReactComponent as Stars } from '../../images/star_Grey.svg'
import Tag from '../../components/Tag'
import Collapse from '../../components/Collapse'
import './styles.css'

/* #useState
useState est un Hook
Nous l’appelons au sein d’une fonction composant pour y ajouter un état local. 
React va préserver cet état d’un affichage à l’autre. 
useState retourne une paire : la valeur de l’état actuel et une fonction qui vous permet de la mettre à jour. 
Vous pouvez appeler cette fonction depuis un gestionnaire d’événements, par exemple. 
Elle est similaire à this.setState dans une classe, à ceci près qu’elle ne fusionne pas l’ancien état et le nouveau.
*/

/* #useEffect
Vous avez surement déjà réalisé un chargement de données distantes, 
des abonnements ou des modifications manuelles sur le DOM depuis un composant React. 
Nous appelons ces opérations « effets de bord » (ou effets pour faire court) 
parce qu’elles peuvent affecter d’autres composants et ne peuvent être réalisées pendant l’affichage.
Le Hook d’effet, useEffect, permet aux fonctions composants de gérer des effets de bord. 
Il joue le même rôle que componentDidMount, componentDidUpdate, et componentWillUnmount 
dans les classes React, mais au travers d’une API unique. 
*/

/*#key 
La propriété de React 'key' vous donne la possibilité de contrôler les instances de composants. 
Chaque fois que React rend vos composants, il appelle vos fonctions pour récupérer les nouveaux éléments React 
qu'il utilise pour mettre à jour le DOM. Si vous renvoyez les mêmes types d'éléments, 
il conserve ces composants/noeuds DOM, même si tous les accessoires ont changé.
*/

// le 'data' correspond au json de l'ensemble des donnnées des logements, il est transmis plus haut par app.js via 
function Product({ data }) {
    // définition et valeur(s) par défaut(s)
    const [logement, setLogement] = useState({ tags: [], equipments: [], pictures: [], rating: '', host: { 'name': '', 'picture': '' } })
    const { id } = useParams()
    //console.log('id provenant du paramètre url :' + id)
    //console.log(data)
    //console.log(logement)

    /* 
    * mise à jour de l'état afin de préciser l'id logement actuel
    * si 'id' présent dans le data (le json des données externe)
    * on utilise le setter (setLogement) du logement pour le mettre à jour
    */
    useEffect(() => {
        data.map((house) => {
                if (house.id === id) { // 
                //console.log('house.id : '+ id);
                setLogement(house)
            }
            return null
        })
    }, [id])
    //console.log('Id actuel : '+ id);
    
    // Page 404 via le composant 'Errors' dans le cas où l'id est non valide ou non présent
    if (!logement.id) {
        return < Errors />
        //console.log(logement.id)
        //console.log('id non trouvé déclenche une erreur 404')
    }
   
    return (
          <main className='logement'>   
            <div className='carousel-logement'>
                <Carousel img={logement.pictures} />
            </div>
            <section className='section-global'>

                <div className='container-presentation'>
                    <div className='container-header'>
                        <h2 className='title'>{logement.title}</h2>
                        <h3 className='location'>{logement.location}</h3>

                        <div className="container-tag">
                            {/*la propriétés 'tags' de l'objet 'logement' va mapper 'tag', qui sera incorporé 
                            au composant 'Tag' via les propriétés 'content' et 'key' */}
                            {logement.tags.map((tag) => <Tag content={tag} key={tag} />)}
                        </div>
                    </div>

                    <div className='container-subheader'>
                        <div>
                            <Avatar name={logement.host.name} picture={logement.host.picture} />
                        </div>

                        <div>
                            {
                            /* La liaison réelle du composant Stars vient de : import { ReactComponent as Stars } from '../images/star_Grey.svg'*/
                            /* Génération du nombre d'étoile selon le 'rating' issue du Json externe avec la fonction map */
                            /* La classe 'star' permet de passer l'étoile dans son colori, autrement elle est grise par défaut */
                            }
                            {[1, 2, 3, 4, 5].map(star =>
                                <Stars key={star} className={star <= logement.rating ? "star" : null} />
                            )}
                        </div>
                    </div>
                </div>          
                  <div className='collapse-container'>
                    <Collapse
                        title="Description"
                        content={logement.description}
                    />
                    <Collapse
                        title="Equipements"
                        content={
                            <ul>
                                {/* la propriétés 'equipments' est de type tableau (array), on boucle dessus pour écrire des entrées de liste <li>*/}
                                {logement.equipments.map((equipment) =>
                                <li key={equipment}>{equipment}</li>)}
                            </ul>
                        }
                    />
                  </div>
            </section>
          </main>
    )
}

export default Product