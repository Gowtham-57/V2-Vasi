import React, {Component} from 'react';
import Header from './components/header';
import About from './components/about';
import Services from './components/services';
import Portfolio from './components/portfolio';
import Contact from './components/contact';


export default function Abc (){
  return(
    <div style={{backgroundColor:'ivory', fontStyle:'italic'}}>
     <Header/><br/>
     <About/><br/>
     <Services/><br/>
     <Portfolio/><br/>
     <Contact/>
      
    </div>
  );
}