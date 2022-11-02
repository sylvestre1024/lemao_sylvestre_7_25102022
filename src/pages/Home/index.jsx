import styled from 'styled-components'
import HeadBand from '../../components/Layout/HeadBand'
import colors from '../../utils/style/colors'
import { StyledLink } from '../../utils/style/Atoms'

function Home({text="", picture}) {
  return (
    <div>
      <HeadBand 
        text="Chez vous, partout et ailleurs"         // a remplacer par un import
        picture="Chemin de l'image de la page Home"  // a remplacer par un import
      />
      <div>&#10097;Page Home</div>
      <hr/>
    </div>
  )
}

export default Home