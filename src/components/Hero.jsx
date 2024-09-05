import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import House from './House'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 120px;
`;

// const WhatIDo = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const Subtitle = styled.h2`
//   color: lightblue;
// `;

// const Desc = styled.p`
//   font-size: 24px;
//   color: lightgray;
// `;

// const Button = styled.button`
//   width: 100px;
//   border: none;
//   border-radius: 5px;
//   padding: 10px;
//   font-weight: 500px;
//   color: black;
//   background-color: lightblue;
//   cursor: pointer;
// `;

const Right = styled.div`
  flex: 3;
  position: relative;
  
`;
// const Iframe = styled.iframe`
//   border: none;
//   width: 800px;
//   height: 600px;
//   object-fit: contain;
//   position: absolute;
//   top:0;
//   bottom: 0;
//   right: 0;
//   left: 0;
//   margin: auto;
//   animation: animate 2s infinite ease alternate;

//   @keyframes animate {
//     to{
//       transform: translateX(30px);
//     }
//   }
// `;
const Hero = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>Welcome to my mind.</Title>
          {/* <WhatIDo>
            <Subtitle>What I do:</Subtitle>
          </WhatIDo>
          <Desc>I am a rising senior at UCSC studying Technology Information Management and am passionate about gaming, networking systems, front-end development, art, basketball, and using video games to bridge cultures globally.</Desc>
          <Button>Learn More</Button> */}
        </Left>
        <Right>
          {/* 3d model */}
          {/* <Iframe src="https://giphy.com/embed/xUW6eryj4aG1kOFxXs" /> */}
          <House/>
        </Right>
      </Container>
    </Section>
  )
}

export default Hero