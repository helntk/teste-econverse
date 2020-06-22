import React from 'react';
import {AddressContainer, AdressText} from './style';
import adressImg from '../../assets/img/adress.png';
import adressImg1 from '../../assets/img/adress-1.png';

const Address = () =>{
    return(
       <section>
        <div style={{margin:'0 10vw'}}>
         <AddressContainer>
         <img src={adressImg1} style={{height:'85%', width: '15%', margin:'auto 0'}} alt='address image 1' />
         <img src={adressImg} style={{width:'40%'}} alt='address image' />
         <div style={{width:'35%',height:'85%', backgroundColor: '#f2f2f2', margin:'auto 0'}} alt='address image'>
         
         <AdressText>
         <h4>Loja <spam style={{fontWeight:'700'}}>Eurico</spam></h4>
         <p> Av. Jandira, 49 <br></br>
             Moema - São Paulo/SP <br></br>
            (11) 5054-8877 <br></br>
            Estacionamento conveniado
            
        </p>
         </AdressText>

         </div>

         </AddressContainer>

        </div>

       </section>
    )
}



export default Address;