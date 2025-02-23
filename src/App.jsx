import React from 'react';
// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

let App = ()=>{
  console.log('thanks for using StepItUp!')
  return(
    <>
      <Header/>
      <Hero/>
      <Footer/>
    </>
  )
}

export default App;