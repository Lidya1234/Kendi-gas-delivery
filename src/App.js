import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Mission from './components/Mission';
import Features from './components/Features';
import WhatWeDo from './components/WhatWeDo';
import Advertise from './components/Advertise';
import Invest from './components/Invest';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Goals from './components/Goals';

function App() {
  return (
    <div className="App" id="page-top">
    
<Nav />
     <Header />  
<Mission />
    <Features /> 
     <WhatWeDo />
     <Advertise />
     <Goals />
      <Invest />
      <Footer />
  <Modal />
        
 
       
       
     

    </div>
  );
}

export default App;
