import styled from 'styled-components';


const Gender = styled.a `
font-weight: 300;

color: ${props => props.selected ? '#c00018' : '#5f5f5f'};
font-size: 1rem;
padding-bottom: ${props=> props.selected ? '.5rem' : 'none'};
text-transform: uppercase;
margin-left: ${props=> props.selected ? '.5rem' : 'none'};
position: relative;
z-index : 1;
 
&:before{
content : "";
position: absolute;
left    : 30%;
bottom  : 0;
height  : 1px;
width   : 40%; 
border-bottom: ${props=> props.selected ? '1px solid #c00018' : 'none'};

}

`

const ShopItems = styled.div `
display: flex;
justify-content: space-between;
margin: 2rem 5vw;

`
const ShopDescription = styled.p `
 font-size: .9rem;
 margin:4rem 0 2rem 0;
 text-transform: uppercase;
 font-weight: 300;
 text-align: center;
 color: #5f5f5f;
 letter-spacing: 1px;
`

const ShopButton = styled.button `

    width: 70%;
    height: 2.5rem;
    margin-top:2rem;
    background-color: transparent;
    border: 1px solid black;
    color: black;
    cursor: pointer;
    
    text-transform: uppercase;


   &:hover{
 
       background-color: black;
       color: white;
    
    
   }
`
const Preco = styled.p `

 font-size: .9rem;
 font-weight: 500;
 text-align: center;
 color: black;
 letter-spacing: 1px;

 span{
    font-size: .8rem;
    font-weight: 300;
    color: #5f5f5f

 }
`


export {Gender, ShopItems, ShopDescription, ShopButton, Preco}