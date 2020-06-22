import React from 'react'
import { NewsLetter, SignUpButton, MenuFooter } from './style';

const Footer = () => {
    return (
        <section style={{ color: '#3f3f3f', letterSpacing: '1.5px', textAlign: 'center', fontWeight: '300' }}>
            <h3 style={{ textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '3px' }}>Sobre a <spam style={{ color: 'black' }}>casa Eurico</spam></h3>
            <p style={{ margin: '0 12vw', lineHeight: '2', fontSize: '.9rem' }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna psum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
sed diam</p>

            <NewsLetter>

                <div style={{width: '20rem'}}>
                  <h4 style={{textTransform: 'uppercase', paddingBottom: '.5rem'}}>Newsletter</h4>
                  <p>Lorem Ipsum Lorem Ipsum has been the industry's standard dummy </p>
                </div>

                <div>
                <input style={{width:'24rem',marginTop: '2rem', marginLeft: '1.5    rem', border:'none',color:'#3f3f3f',borderBottom: '1px solid #3f3f3f'}} type='text' placeholder='Email' />
                </div>
                <div>
                <SignUpButton>cadastrar</SignUpButton>

                </div>
            </NewsLetter>

            <MenuFooter>
                <ul>
                <h3>institucional</h3>

                <li><a href='#'>sobre a casa eurico</a></li>
                <li><a href='#'>news | blog</a></li>
                <li><a href='#'>cadastre-se</a></li>
                <li><a href='#'>showrroom</a></li>

                </ul>

                <ul>
                <h3>ajuda e suporte</h3>

                <li><a href='#'>sobre a casa eurico</a></li>
                <li><a href='#'>news | blog</a></li>
                <li><a href='#'>cadastre-se</a></li>
                <li><a href='#'>showrroom</a></li>

                </ul>

         

                <ul>
                 <h3>atendimento ao cliente</h3>
                <li><a href='#'>fale conosco</a></li>
                <li><a href='#'>seg - sex 09h às 17h</a></li>
                <li><a href='#'>whatsapp: (11) 94037-2794</a></li>
                <li><a href='#'>atendimento@casaeurico.com.br</a></li>

                </ul>

                <ul>
        

                </ul>
            </MenuFooter>
            <div style={{display:'flex', width:'50vw', fontSize:'.8rem', marginLeft: '20rem'}}>
           <p >COPYRIGHT AAA - TODOS OS DIREITOS RESERVADOS  |  E-BUENO Comércio de Calçados e Acessórios - EIRELI
            CNPJ 17.495.410/0001-53   |   Rua Costa Aguiar, n-1221 - Ipiranga - CEP 042040-001 São Paulo - SP</p>
            </div>
        
        </section>
    )
}

export default Footer;