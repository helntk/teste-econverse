import styled from 'styled-components'


const HeroImg = styled.div `
 width: ${props => props.top ? '80vw' : '90vw'};
 position: ${props => props.top ? 'relative' : 'absolute'};
 top: ${props => props.top ? '0' : '5rem'};
 z-index:  ${props => props.top ? '99' : '0'};
height: ${props => props.top ? '80vh' : '60vh'};

 margin: 0 auto;
 left:${props => props.top ? '0' : '50%'};
 transform: translateX(${props => props.top ? '0' : '-50%'});
 img{
    width: 100%;
    height: 100%;
 }

`

const BarContainer = styled.div `
display: flex;
justify-content: space-between;
width: 25rem;
align-items: center;
margin-left: 8rem;

 @media screen and (min-width: 1400px){
    width: 30rem;
 }

`

const HeroButton = styled.button `
width: 12rem;
height: 3rem;
background-color: transparent;
border: 1px solid #ffffff;
color: #ffffff;
cursor: pointer;

text-transform: uppercase;

&:hover{ 
   background-color: white;
   color: black;

}

`


const HeroText = styled.section `
 position: absolute;
 top: 8rem;
 left: 53%;
 z-index: 100;
 display: flex;
 align-items: center;
 flex-direction: column;

`

const HeroParagraph = styled.p `
 font-size: 1rem;
 width: 20rem;
 line-height: 2;
 letter-spacing: 1.5;
 color: #ffffff;  

 @media screen and (min-width: 1400px){
    font-size:1.4rem;
    width: 23rem;
 }

`

const HeroBar = styled.h2 `
 display: flex;
 justify-content: space-between;
 color: #ffffff;
 font-size: 1.2rem;
 font-weight: 300;

 text-transform: uppercase;
 letter-spacing: 1.5;

 @media screen and (min-width: 1400px){
    font-size: 1.4rem;
 }

`

export  {HeroImg, HeroText, HeroParagraph, HeroBar, BarContainer , HeroButton}