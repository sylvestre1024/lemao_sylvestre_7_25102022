import Navigate from '../Navigate'
import styled from 'styled-components'
import colors from '../../../utils/style/colors'

function Header({picture}) {
  picture="Chemin du logo du Header" // a remplacer par un import
  return (
    <div>Header
      <div><b>Chemin de l'image : </b>{picture}</div>
      <hr/>
      <Navigate />
      <hr/>
    </div>
  )
}

export default Header