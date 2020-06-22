import React from 'react';
import hero from '../../assets/img/hero.png'
import {HeroImg, HeroText, HeroParagraph, HeroBar, BarContainer, HeroButton} from './style';
import {Header} from '../../elements/Header'
const Hero = () => {

    return (
        <div style={{position: 'relative'}}>
            <HeroImg top>  
                <img  src={hero} alt='hero component' />

            </HeroImg>

            <HeroImg>
                <img src={hero} alt='hero component bottom' />

            </HeroImg>

            <HeroText>
                <BarContainer>
               <HeroBar>
                    New collection
                </HeroBar>
                <div style={{width: '10em', height: '1px', backgroundColor: '#ffffff'}}></div>
                <HeroBar>
                    2020
                </HeroBar>
           </BarContainer>
                <Header>Summer</Header>
                <HeroParagraph>
                Lorem Ipsum é inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens.
                </HeroParagraph>
 
                 <div style={{display: 'flex', marginTop: '2rem', marginRight: '2rem'}}>
                 
                 <HeroButton style={{marginRight: '1rem'}} >feminino</HeroButton>
                 <HeroButton>masculino</HeroButton>
                 </div>
                 

            </HeroText>
        </div>
    )
}

export default Hero