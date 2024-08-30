import Hero from "./components/Hero"
import Who from "./components/Who"
import Works from "./components/Works"
import Contact from "./components/Contact"
import styled from "styled-components"

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  &::-webkit-scrollbar{
    display: none;
  } 
`; 

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit:cover;
  z-index: -1;
`

function App() {
  return (
    <Container>
      <BackgroundVideo autoPlay loop muted>
        <source src="public/vid/vid1.mp4" type="video/mp4" />
        Your browser does not support the video tag
      </BackgroundVideo>
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
    </Container>
  )
}

export default App
