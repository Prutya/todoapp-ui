import { injectGlobal } from 'styled-components'
import { colors } from './colors'

// TODO: Is there any other way to style #root?
injectGlobal`
  * {
    box-sizing: border-box
    margin: 0
    padding: 0
  }

  body {
    font-family: sans-serif
    font-weight: 200
    color: ${colors.text}
  }

  #root {
    width: 100vw;
    height: 100vh;
    background-color: ${colors.sub1}
  }
`
