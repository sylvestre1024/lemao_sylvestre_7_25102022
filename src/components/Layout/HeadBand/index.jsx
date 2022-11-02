import styled from 'styled-components'
import colors from '../../../utils/style/colors'


function HeadBand({text="", picture}) {
  return (
    <div>HeadBand
      <div>
        <div><b>Chemin de l'image : </b>{picture}</div>
        <div><b>Texte de l'image : </b>{text}</div>
        <hr/>
      </div>
    </div>
  )
}

export default HeadBand