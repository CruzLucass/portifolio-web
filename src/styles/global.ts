import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
}

*, input, button{
    font-family: 'Roboto', sans-serif
}

body{
    background: ${props => props.theme.colors.background};
    font-size: 14px;
    color: ${props => props.theme.colors.text};
}
`