import React from 'react'

function Footer({picture}) {
  picture="Chemin du logo du Footer" // a remplacer par un import
  return (
    <div>Footer
      <div><b>Chemin de l'image : </b>{picture}</div>
      <hr/>
    </div>
  )
}

export default Footer


