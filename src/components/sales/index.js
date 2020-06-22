import React from 'react';
import {HeaderSales} from '../../elements/Header'
import {Gender, ShopItems, ShopDescription, ShopButton, Preco} from './style';
import sapato1 from '../../assets/img/sapato-1.png';
import sapato2 from '../../assets/img/sapato-2.png';
import sapato3 from '../../assets/img/sapato-3.png';
import sapato4 from '../../assets/img/sapato-4.png';

const Sales = ()=>{
    return(
        <section>

        <HeaderSales>Mais vendidos</HeaderSales>
        <div style={{display: 'flex', justifyContent: 'center', marginTop:'2rem'}}>
        <Gender href='#'>Masculino</Gender>
        <Gender  href='#' selected>Feminino</Gender>
       
    
        </div>
        <ShopItems >
          <div style={{display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <img src={sapato1} alt='sapato 1' />
          <ShopDescription>oxford c/ salto chocolate <br></br>lorem ipsum</ShopDescription>
          <Preco>R$ 199,99 <br></br>4x <span>de</span> R$49,99</Preco>
          <ShopButton>comprar</ShopButton>

           </div>

           <div style={{display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <img src={sapato3} alt='sapato 3' />
          <ShopDescription>oxford c/ salto chocolate <br></br>lorem ipsum</ShopDescription>
          <Preco>R$ 199,99 <br></br>4x <span>de</span> R$49,99</Preco>

          <ShopButton>comprar</ShopButton>

            
            </div>  

          <div style={{display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <img src={sapato2} alt='sapato 2' />
          <ShopDescription>oxford c/ salto chocolate <br></br>lorem ipsum</ShopDescription>
          <Preco>R$ 199,99 <br></br>4x <span>de</span> R$49,99</Preco>

          <ShopButton>comprar</ShopButton>

          </div>

           <div style={{display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <img src={sapato4} alt='sapato 4' />
            <ShopDescription>oxford c/ salto chocolate <br></br>lorem ipsum</ShopDescription>
            <Preco>R$ 199,99 <br></br>4x <span>de</span> R$49,99</Preco>

            <ShopButton>comprar</ShopButton>
        </div>


        </ShopItems>
        </section>
    )
}


export default Sales;