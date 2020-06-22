import React from 'react';
import {Nav, TopNav, TopList, ListItem, MainList, BottomList} from './style.js'
import logo from '../../assets/img/logo.jpg';
import search from '../../assets/img/search-icon.jpg';
import profile from '../../assets/img/profile-icon.jpg';
import store from '../../assets/img/store-icon.jpg';

const Navbar = () =>{
    return(
    <header>
        <TopNav>
        <TopList>
            <ListItem>
                <a href='#'>PRIMEIRA TROCA GRÁTIS</a>
           </ListItem>

            <ListItem>
                <a href='#'>
                Frete grátis em Compras acima de X reais
                </a>
            </ListItem>

            <ListItem>
                <a href='#'>
                TROCA NA LOJA

                </a>
             </ListItem>

        </TopList>
        </TopNav>

        <Nav>
           <MainList>
               <div style={{width:'9rem',display: 'flex',alignItems:'center', justifyContent: 'space-between', }}>
               <ListItem main style={{fontWeight: 700}}>
                   <a href='#' style={{color: '#C00018'}}>
                     a eurico
                   </a>
                   </ListItem>
               <ListItem main>
               <a href='#'>
                     lojas
                   </a>
               </ListItem>
               </div>

               <div>
               <img src={logo} alt='logo da eurico' />
                   
               </div>

               <div style={{display: 'flex',alignItems:'center', justifyContent: 'space-between',fontWeight:'300', width: '15rem'}}>
               <ListItem style={{display:'flex',marginRight:'1.1rem'}}>
               <input style={{border:'none',color:'#000000',borderBottom: '1px solid black'}} type='text' placeholder='Buscar' />
              <a href='#'>
              <img src={search} alt='pesquisar' />

              </a>

               </ListItem>
               <ListItem style={{marginRight:'.5rem'}}>
               <a href='#'>
               <img src={profile} alt='entrar no perfil' />

                   </a>

               </ListItem>
               <ListItem >
                <a href='#'>
                <img src={store} alt='loja eurico' />


                </a>


               </ListItem>

               </div>
            

           </MainList>

            <BottomList>
                    <ListItem>
                    <a href='#'>novidades</a>
                    </ListItem>
                    <ListItem>
                    <a href='#'>feminino</a>
                    </ListItem>
                    <ListItem>
                    <a href='#'>masculino </a>
                    </ListItem>
                    <ListItem>
                    <a href='#'>acessórios</a></ListItem>
                    <ListItem>
                    <a href='#'>outlet</a>
                    </ListItem>


            </BottomList>
        </Nav>
    </header>
    )
}

export default Navbar