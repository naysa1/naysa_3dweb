import React from 'react'
import styled from 'styled-components'


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


const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          {/* 3d model */}
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