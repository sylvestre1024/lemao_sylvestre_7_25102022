import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

    body {
        background-color: $colors.backgroundLight;
        margin: 0;
    }
`

function GlobalStyle() {
    /*
     * useContext est un hook qui permet de se “brancher” 
     * depuis un composant enfant qui a été wrappé par un Provider, 
     * et donc d’accéder simplement au state partagé.
     */
  return <StyledGlobalStyle />
}

export default GlobalStyle