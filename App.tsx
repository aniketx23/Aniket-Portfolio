
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import BackgroundParticles from './components/BackgroundParticles';

const App: React.FC = () => {
  return (
    <div className="relative antialiased">
      <BackgroundParticles />
      <Header />
      <main className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
};

export default App;
