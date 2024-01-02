import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Contact from './components/navbar/Contact';
import Navbar from './components/navbar/Navbar';
import Welcome from './components/navbar/welcometab';
 import Projects from './components/navbar/Projects';
 import Graph from './components/navbar/graph';
import Footer from './components/footer';

import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  const [theme, setTheme] = useState('light');
  
  return (
    <BrowserRouter>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
      </div>
      <div className="relative z-0">
        <Contact />
        <Welcome/>
        <Projects/>
        <Graph/> 
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
