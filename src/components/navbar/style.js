import styled from 'styled-components';
import fonts from '../../contants/Fonts'

const Nav = styled.nav `
background-color: #FFFFFF;
height: 10rem;
box-shadow: 3px 1px 8px #0000000F;


`


const TopNav = styled.div `
background-color: #FFFFFF;
height: 5vh;
display: flex;
align-items: center;
box-shadow: 3px 1px 8px #0000000F;

`

const TopList = styled.ul `
display: flex;
justify-content:space-between;
padding-left:20vw;
list-style: none;
width:55vw;
padding-left: 20vw;
`

const ListItem = styled.li `
font-weight: 300;
color: #000000;
text-transform: uppercase;
letter-spacing: ${props => props.main ? 1.8 : 1.5};
font-size: ${fonts.nav}


`

const MainList = styled.ul `
display:flex;
align-items: center;
margin: 0 5vw 0 5vw;
justify-content:space-between;
list-style: none;
padding: 2rem 0

`

const BottomList = styled.ul `
display:flex;
align-self: center;
width: 50vw;
margin: 0 auto;
padding-bottom: 1rem;
justify-content:space-between;
list-style: none;

`

export  {Nav, TopNav, TopList, ListItem, MainList, BottomList}
