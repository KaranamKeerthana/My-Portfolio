import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";

import Resume_home from './components/resume_home';
import About from './components/about';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/" component={Resume_home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact}/>
      </BrowserRouter>
     
      
    
    </div>
  );
}

export default App;
