import React from 'react';
import About from "./component/About"
import Hero from "./component/Hero"
import Footer from "./component/layouts/Footer"
import Navbar from "./component/layouts/Navbar"
import PortfolioCard from "./component/PortfolioCard"
import TestimonialCard from "./component/TestimonialCard"
import SkillsCard from './component/SkillsCard';
import Contact from './component/Contact';



function App() {

  return (
    <div className='font-roboto'>
      <Navbar/>
      <div id='home'>
      <Hero/>
      </div>
      <div id='skills'>
        <SkillsCard/>
      </div>
      <div id='about'>
        <About/>
      </div>
      <div id='portfolio'>
      <PortfolioCard/>
      </div>
      <div id='testimonial'>
        <TestimonialCard/>
      </div>
      <div id='contact'>
      <Contact/>
      </div>
      <Footer/>
      

      
    </div>
  )
}

export default App
