import React from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import BackgroundAbout from '../../images/BackgroundAbout.webp'
import './styles.css'

const aboutData =[
    {
        id: 1,
        label: "Fiabilité",
        description: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    },
    {
        id: 2,
        label: "Respect",
        description: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
        id: 3,
        label: "Service",
        description: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    {
        id: 4,
        label: "Sécurité",
        description: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    },
]

function About() {
  return (
    <div>
      <Header />
      <div className='global-about'>
        <img src={BackgroundAbout} alt='bannière paysage' className='banner-img' />
        <main>
          <div className='container-about'>
            {aboutData.map((section) => (
                <Collapse 
                    key={section.id}
                    title={section.label}
                    content={section.description}
                    size='large'
                />
            ))}
          </div>
        </main>
        </div>
      </div>
  )
}

export default About

/*
function About() {
  return (
    <div className='global-about'>
      <img src={BackgroundAbout} alt='bannière paysage' className='banner-img' />
      <main>
        <div className='container-about'>
          <Collapse
            title="Fiabilité"
            content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
            size='large'
          />
          <Collapse
            title="Respect"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            size='large'
          />
          <Collapse
            title="Service"
            content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
            size='large'
          />
          <Collapse
            title="Responsabilité"
            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            size='large'
          />
        </div>
      </main>
    </div>
  )
}
*/