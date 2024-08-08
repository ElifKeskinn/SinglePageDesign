import React, { useState } from 'react';
import './App.css';
import graphicDesignImg from './assets/img/graphic_design.png';
import uiUxImg from './assets/img/ui_ux.png';
import appsImg from './assets/img/Apps.png';
import illustrationsImg from './assets/img/Illustrations.png';
import photographyImg from './assets/img/Photography.png';
import motionGraphicsImg from './assets/img/Motion_Graphics.png';
import aboutImg from './assets/img/about.png';
import logoImg from './assets/img/single_page_logo.svg';


function App() {

  return (
    <div className="container">
      <Header />
      <HeroText />
      <SkillsContainer />
      <About />
      <AboutUsCard />
      <Footer />
    </div>
  );

  function Header() {
    return (
      <header>
        <img src={logoImg} alt="Main Logo" />
        <a href="#">Free Consultation</a>
      </header>
    );
  }

  function HeroText() {
    return (
      <div className="hero_text">
        <h1>Design solutions made easy</h1>
        <p>With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.</p>
      </div>
    );
  }

  function SkillsContainer() {
    return (
      <div className="skills_container">
        <div className="div">
          <div className="graphic_design">
            <img src={graphicDesignImg} />
            <h4>Graphic Design</h4>
          </div>
          <div className="services_middle">
            <div className="ui_ux">
              <img src={uiUxImg} />
              <h4>UI/UX</h4>
            </div>
            <div className="apps">
              <img src={appsImg} />
              <h4>Apps</h4>
            </div>
            <div className="Illustrations">
              <img src={illustrationsImg} />
              <h4>Illustrations</h4>
            </div>
          </div>
        </div>
        <div className="div1">
          <div className="photography">
            <img src={photographyImg} />
            <h4>Photography</h4>
          </div>
          <div className="motion_graphics">
            <img src={motionGraphicsImg} />
            <h4>Motion Graphics</h4>
          </div>
        </div>
      </div>
    );
  }

  function About() {
    return (
      <div className="about">
        <div className="about_images">
          <img src={aboutImg} />
        </div>
        <div className="about_text">
          <h3>I’m Amy, and I’d love to work on your next project</h3>
          <p>I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!</p>
          <a href="#">Free Consultation</a>
        </div>
      </div>
    );
  }

  function AboutUsCard() {
    return (
      <div className="about_us_card">
        <div className="about_us_card_text">
          <h3>Book a call with me</h3>
          <p>I’d love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there.</p>
        </div>
        <a href="#">Free Consultation</a>
      </div>
    );
  }

  function Footer() {
    return (
      <footer>
        <img src={logoImg} />
        <a href="#">Free Consultation</a>
      </footer>
    );
  }
}

export default App;
