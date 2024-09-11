import Hero from "./components/Hero"
import Who from "./components/Who"
import Works from "./components/Works"
import Contact from "./components/Contact"
import styled from "styled-components"
import React, { useRef } from 'react';
import Navbar from './components/Navbar'



const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/background.png");
  &::-webkit-scrollbar{
    display: none;
  } 
`; 


function App() {
  const homeRef = useRef(null);
  const whoRef = useRef(null);
  const worksRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container>
      <div>
        <Navbar scrollToSection={scrollToSection} homeRef={homeRef} whoRef={whoRef} worksRef={worksRef} contactRef={contactRef}/>
        <div ref={homeRef}>
          <Hero />
        </div>
        <div ref={whoRef}>
          <Who />
        </div>
        <div ref={worksRef}>
          <Works />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
    </Container>
  )
}

export default App
