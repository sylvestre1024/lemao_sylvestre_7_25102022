import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import HeadBand from '../../components/Layout/HeadBand'
import Collapse from '../../components/Layout/Collapse'

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
      <HeadBand />
      <div>&#10097;Page About</div>
      <div>
          {aboutData.map((section) => (
              <Collapse 
                  key={section.id}
                  label={section.label}
                  description={section.description}
              />
          ))}
      </div>
    </div>
  )
}

export default About