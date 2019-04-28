import styled, { createGlobalStyle, css } from 'styled-components'
import FontAwesomeTTF from "./fonts/FontAwesome.ttf"
import FontAwesomeWOFF from "./fonts/fontawesome-webfont.woff"
import FontAwesomeWOFF2 from "./fonts/fontawesome-webfont.woff2"

const Global = createGlobalStyle`
    @font-face {
        font-family: 'FontAwesome';
        src: url("${FontAwesomeWOFF2}") format("woff2"),
        url("${FontAwesomeWOFF}") format("woff"),
        url("${FontAwesomeTTF}") format("truetype");
    }
`
const FontIcon = css`
    font-family: FontAwesome;
    font-size: 18px;
    color: #1C2CA4;
`
export { Global, FontIcon }