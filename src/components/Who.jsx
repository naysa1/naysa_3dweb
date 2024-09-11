import styled from 'styled-components'
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import ImCat from './ImCat';




const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const Left = styled.div`
  flex: 1;
 
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;  

  animation: scrolls linear;
  animation-timeline: view();
  animation-range: entry 0;

  @keyframes scrolls {
    from {
      opacity: 0;
      scale: 0.5;
    } to {
      opacity: 1;
      scale: 1;
    }
  }
`;

const Title = styled.h1`
  font-size: 74px;
`;

const WhatIDo = styled.div`
  display: flex;
  align-items: center;
`;

const Subtitle = styled.h2`
  color: lightblue;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const Button = styled.button`
  width: 200px;;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-weight: 500px;
  color: black;
  background-color: lightblue;
  cursor: pointer;
  font-weight: 500;
`;

const Fireflies = () => {
  const ref = useRef();


  useFrame(({ clock }) => {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;


      const time = clock.getElapsedTime();
      ref.current.children.forEach((child, index) => {
          const scale = 0.5 + Math.sin(time * 5 + index) * 0.5;
          child.scale.set(scale, scale, scale);
      });
  });

  const numFireflies = 50;
  const particles = [];

  for (let i = 0; i < numFireflies; i++) {
      particles.push(
          <mesh
              key={i}
              position={[
                  Math.random() * 8 - 5,
                  Math.random() * 8 - 5,
                  Math.random() * 8 - 5,
              ]}
          >
              <sphereGeometry args={[0.2, 16, 16]} />
              <meshBasicMaterial 
                color="#4e82ac"
               />
          </mesh>
      );
  }

  return <group ref={ref}>{particles}</group>;
};

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          {/* <Canvas>
            <Fireflies position={[0, 0, -1]}/>
          </Canvas> */}
          <ImCat position={[0, 0, 0]} />
        </Left>
        <Right>
          <Title>Hi! I am Naysa!</Title>
          <WhatIDo>
            <Subtitle>What I do:</Subtitle>
          </WhatIDo>
          <Desc>I am a rising senior at UCSC studying Technology Information Management and am passionate about networking systems, front-end development, art, basketball, and using video games to bridge cultures globally. </Desc>
          <Button>Check out my Linkedin</Button>
        </Right>
      </Container>
    </Section>
  )
}

export default Who