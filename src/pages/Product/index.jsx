import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

import Header from '../../components/Header'
import Errors from '../Errors'
import Carousel from '../../components/Carousel'

import Collapse from '../../components/Collapse'
import './styles.css'

function Product({ data }) {
    const [logement, setLogement] = useState({ tags: [], equipments: [], pictures: [], rating: '', host: { 'name': '', 'picture': '' } })
    const { id } = useParams()
    console.log('id provenant du paramètre url :' + id)
    
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
      //return < Error />
      console.log('id non trouvé déclenche une erreur 404')
    } else {
      console.log('Yes, id trouvé en correspondance au paramètre URL !')
    }

    return (
          <main className='logement'>
            <Header />
            <div className='carousel-logement'>
                <Carousel img={logement.pictures} />
            </div>
            {/*}
            <section className='section-global'>
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
            */}
          </main>
    )
}

export default Product