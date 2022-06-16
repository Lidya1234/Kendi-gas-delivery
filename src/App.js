import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Mission from './components/Mission';
import Features from './components/Features';
import WhatWeDo from './components/WhatWeDo';
import Advertise from './components/Advertise';
import GetApp from './components/GetApp';
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {
  return (
    <div className="App" id="page-top">
    
<Nav />
     <Header />  
<Mission />
    <Features /> 
     <WhatWeDo />
     <Advertise />
      <GetApp />
      <Footer />
  <Modal />
        
 
       
       
     

    </div>
  );
}

export default App;
