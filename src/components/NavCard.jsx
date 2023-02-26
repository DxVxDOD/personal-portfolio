import React from 'react';
import '../App.css';
import Projects from './Projects';
import Contact from './Contact';
import Home from './Home';
import AboutMe from './AboutMe';

function NavCard() {
  return (
    <div className=" flex flex-col top-16 left-20 absolute animate-navButtons gap-2">
      <Home />
      <Projects />
      <Contact />
      <AboutMe />
    </div>
  );
}

export default NavCard;
