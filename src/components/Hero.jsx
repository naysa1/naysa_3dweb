import React, { forwardRef } from "react";
import styled from 'styled-components'
import Navbar from './Navbar'
// import House from './House'
import {motion} from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled(motion.h1)`
  font-size: 120px;

  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 74px;
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex: 1;
  }
  
`;

const Img = styled.img`
  width: 500px;
  height: 500px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  padding-bottom: 10%;
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  @keyframes animate {
    to{
      transform: translateY(20px);
    }
  }
`

const Hero = ({ scrollToSection, homeRef, whoRef, worksRef, contactRef }) => {
  return (
    <Section>
      {/* <Navbar scrollToSection={scrollToSection} homeRef={homeRef }whoRef={whoRef} worksRef={worksRef} contactRef={contactRef}/> */}
      <Container>
        <Left>
          <Title
            initial={{ opacity: 0, y: 0}}
            animate={{ opacity: 1, y: 20 }}
            transition= {{ duration: 1}}
          >
            Welcome to my mind.</Title>      
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3,2,1]} />
            <Sphere args={[1, 100, 200]} scale={2.6}>
              <MeshDistortMaterial color="#1a5c92" attatch="material" distort={0.5} speed={2}/>
            </Sphere>
          </Canvas>
          <Img src="./img/jellyfish.png"/>
        </Right>
      </Container>
    </Section>
  )
}

export default Hero