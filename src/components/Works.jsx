import React,  { useState } from 'react'
import styled from 'styled-components'

const data = [
  "Scratch Game",
  "P2P Project",
  "Task Manager",
  "TCP Router",
  "DBMS"
];

const description = [
  "A game developed using Scratch with the art and music being custom made by myself. Art however has been created through inspiration!",
  "A collaborative project focusing on peer-to-peer lending platform. Includes sprint analysis frameworks.",
  "A python mini-project that creates a task manager in terminal, a GUI is on the way.",
  "Software-defined router that manages network traffic using subnet-specific records with Python.",
  "Dental clinic database management system to handle records via PostgreSQL. Python functions implemented for queries and stored procedures."
];

const links = [
  "https://scratch.mit.edu/projects/867324036",
  "public/downloads/PROJECT1.pdf",
  "public/downloads/task_manager.py",
  "public/downloads/PGSQL_Project",
  "public/downloads/TCP_Router_Project"
]

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
` 
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1400px;
` 
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
` 
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap:20px;
` 
const ListItem = styled.li`
  font-size: 80px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px lightblue;
  position: relative;

  &::after {
    content: "${(props)=>props.text}";
    position: absolute;
    top:0;
    left:0;
    color: lightblue;
    overflow: hidden;
    width: 0px;
    white-space: nowrap;
  }

  &:hover {
    &::after {
      animation: moveText 0.5s linear both;
      @keyframes moveText {
        to{
          width: 100%;
        }
      }
    }
  }
` 

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Description = styled.div`
  padding: 5px;
  margin-bottom: 2px;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: transparent;
  color: white;
  border: 1px solid white; 
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
` 
const Works = () => {

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedIndex(index === selectedIndex ? null : index);
  };

  return (
    <Section>
      <Container>
        <Left>
          <List>         
            {data.map((item, index) => (
              <div key={index}>
                <ListItem onClick={() => handleClick(index)} text={item}>
                  {item}
                </ListItem>
                {selectedIndex === index && (
                  <DescriptionContainer>
                    <Description>{description[index]}</Description>
                    <Button 
                      href={links[index]} 
                      target={links[index].includes('/downloads/') ? "_self" : "_blank"} 
                      rel={links[index].includes('/downloads/') ? "" : "noopener noreferrer"} 
                      download={!!links[index].includes('/downloads/')}
                    >
                      {links[index].includes('/downloads/') ? "Download" : "View Project"}
                    </Button>
                  </DescriptionContainer>
                )}
              </div>
            ))}
          </List>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  )
}

export default Works