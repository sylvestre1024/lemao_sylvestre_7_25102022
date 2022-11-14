import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Errors from '../Errors'
import Carousel from '../../components/Carousel'
import Avatar from '../../components/Avatar'
import { ReactComponent as Stars } from '../../images/star_Grey.svg'
import Tag from '../../components/Tag'
import Collapse from '../../components/Collapse'
import './styles.css'

function Product({ data }) {
    const [logement, setLogement] = useState({ tags: [], equipments: [], pictures: [], rating: '', host: { 'name': '', 'picture': '' } })
    const { id } = useParams()
    //console.log('id provenant du paramètre url :' + id)
    //console.log(data)
    
    useEffect(() => {
      data.map((house) => {
            if (house.id === id) {
              setLogement(house)
            }
            return null
        })
    }, [id])

    // Page 404 cas id est non valide
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
                            {logement.tags.map((tag) => <Tag content={tag} key={tag} />)}
                        </div>
                    </div>

                    <div className='container-subheader'>
                        <div>
                            <Avatar name={logement.host.name} picture={logement.host.picture} />
                        </div>

                        <div>
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