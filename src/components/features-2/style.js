import styled from 'styled-components';


const Feature2Item = styled.div `
height: 25rem;
width: 30%;
position: ${props => props.mid ? 'absolute' : 'relative'};
bottom: ${props => props.mid ? '4rem' : '0'};
right: ${props => props.mid ? '50%' : '0'};
transform: ${props => props.mid ? 'translateX(50%)' : '0'};

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-image: url(${props => props.img});
background-position: center;
background-size: cover;



`

export {Feature2Item}