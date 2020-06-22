import styled from 'styled-components';


const FeatureItem = styled.div `
 position: absolute;
 top: ${props => props.main ? '60%' : '20%'}
 

`

export default FeatureItem;