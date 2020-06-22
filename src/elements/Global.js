import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle `
 *{
    margin: 0;
    padding: 0;
 }
 body{
    font-family: 'Lato', sans-serif;
 }

 a{
    color: #000000;
    text-decoration: none
 }

 @media screen and (min-width: 1400px){
    html{
       font-size: 100%;
    }
 }

 


`

export default GlobalStyle