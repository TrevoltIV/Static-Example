import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home'
import Contact from './pages/contact'
import About from './pages/about'
import Careers from './pages/careers'
import './styles/main.css'
import './styles/home.css'
import './styles/contact.css'
import './styles/about.css'
import './styles/careers.css'

function App() {
  return (
    <div className="static-example">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="home" element={ <Home/> }/>
          <Route path="about" element={ <About/> }/>
          <Route path="contact" element={ <Contact/> }/>
          <Route path="careers" element={ <Careers/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;