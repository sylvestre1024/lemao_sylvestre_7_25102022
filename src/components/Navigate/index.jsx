import { NavLink } from "react-router-dom";
import styled from 'styled-components'
import colors from '../../../utils/style/colors'

function Navigate() {
  return (
    <div><b>Navigation : </b>
      <NavLink to="/">
        Home
      </NavLink><b>./.</b>
      <NavLink to="/about">
        About
      </NavLink>
    </div>
  )
}

export default Navigate