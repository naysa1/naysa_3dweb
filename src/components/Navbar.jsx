import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: transparent;

  @media only screen and (max-width: 768px) {
    width: 80%;
  }
`
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`
const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    @media only screen and (max-width: 768px) {
        padding: 15px;
    }
`
const Logo = styled.img`
    height: 90px;
    @media only screen and (max-width: 768px) {
        display: none;
  }
`
const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
`
const ListItem = styled.li`
    cursor: pointer;
`

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`
const Button = styled.button`
    width: 100px;
    padding: 10px;
    background-color: lightblue;
    color: black;
    border: none;
    border-radius: 5px;
    cursor: pointer;

`



const Navbar = ({ scrollToSection, homeRef, whoRef, worksRef, contactRef }) => {
    const handleLinkedInClick = () => {
        window.open("./downloads/Naysa_Resume.pdf", "_blank");
      };
  return (
    <Section>
        <Container>
            <Links>
            <Logo src="./img/logo.png" />
            <List>
                <ListItem onClick={() => scrollToSection(homeRef)}>Home</ListItem>
                <ListItem onClick={() => scrollToSection(whoRef)}>About</ListItem>
                <ListItem onClick={() => scrollToSection(worksRef)}>Works</ListItem>
                <ListItem onClick={() => scrollToSection(contactRef)}>Contact</ListItem>
            </List>
            </Links>
            <Icons>
                <Button onClick={handleLinkedInClick}>My Resume</Button>
            </Icons>
        </Container>
    </Section>
  )
}

export default Navbar