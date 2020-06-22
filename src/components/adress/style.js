import styled from 'styled-components';



const AddressContainer =  styled.div `
display: flex;
width:100%;
height: 30rem;

`
const AdressText = styled.div`

 padding: 5rem 0 0 5rem;
 letter-spacing: 1.2px;

 p{
     line-height: 2;
     font-weight: 300;
     font-size: .9rem;
     padding-top: 2rem;
 }

 h4{
    text-transform: uppercase;
    font-size: 1.3rem;
    font-weight: 400;
    position: relative;

    &:before{
     content : "";
     position: absolute;
     left    : 30%;
     top  : 2rem;
     height  : 1px;
    width   : 15%;
   border-bottom: 1px solid #c00018;

}

 }

 
`

export {AddressContainer, AdressText}