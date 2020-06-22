import React from 'react';
import Navbar from './components/navbar'
import GlobalStyle from './elements/Global';
import Hero from './components/hero'
import Features from './components/features';
import Sales from './components/sales';
import Features2 from './components/features-2';
import Address from './components/adress';
import Follow from './components/follow';
import Footer from './components/footer';

const App = ( ) =>{

  return (
    <>
    <GlobalStyle />

    <Navbar />
    <Hero />
    <Features />
    <Sales />
    <Features2 />
    <Address />
    <Follow  /> 
    <Footer />

    </>
  )
}
export default App;
