import styled from 'styled-components';


const NewsLetter = styled.div `
display: flex;
justify-content: space-between;
align-items: center;
margin: 8rem 10vw 5rem 10vw;
font-size: .9rem;

`
const SignUpButton = styled.button `


    width: 10rem;
    height: 2.5rem;
    margin-top:2rem;
    background-color: transparent;
    border: 1px solid #3f3f3f;
    color: #3f3f3f;
    cursor: pointer;
    
    text-transform: uppercase;


    &:hover{
 
       background-color: black;
       color: white;
    
    
   }


`

const MenuFooter = styled.div `
display: flex;
justify-content: center;
margin: 5rem 10vw;


ul{

    width:33%;
    list-style: none;
    height: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    text-transform: uppercase;
    h3{
        color: black;
        font-size: .9rem;
        font-weight: 400;
        margin-bottom: .7rem;
    }

    li{
     font-size: .9rem;
     a{
         color: #3f3f3f;
     }
    }
}

`

export {NewsLetter, SignUpButton, MenuFooter}