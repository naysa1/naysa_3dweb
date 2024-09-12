import React, { useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import emailjs from '@emailjs/browser';
import House from './House';
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
` 
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
` 
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  animation: scrolls linear;
  animation-timeline: view();
  animation-range: entry 0;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }

  @keyframes scrolls {
    from {
      opacity: 0;
      scale: 0.5;
    } to {
      opacity: 1;
      scale: 1;
    }
  }
` 
const Title = styled.h1`
  font-weight: 200;
` 
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  
  @media only screen and (max-width: 768px) {
    width: 300px;
  }
` 
const Input = styled.input`
  padding: 20px;
  background-color: white;
  border: none;
  border-radius: 5px;
` 
const TextArea = styled.textarea`
  padding: 20px;
  border-radius: 5px;
  background-color: white;
  border: none;
` 
const Button = styled.button`
  background-color: lightblue;
  border: none;
  font-weight: bold;
  cursor: pointer;
  padding: 20px;
  border-radius: 5px;
` 
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid lightblue;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;

const Right = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
` 
const Tel = styled.iframe`
  width: 300px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`

const Contact = () => {
  const ref = useRef();

  const [success,setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm('service_tcs89vl', 'template_eap4aja', ref.current, {
        publicKey: 'rNaI7uugEW_PDa-4w',
      })
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          setSuccess(false);
        },
      );
  }

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input placeholder="Name" name="name" required/>
            <Input placeholder="Email" name="email" type="email" required/>
            <TextArea placeholder="Write your message" name="message" rows={10}/>
            <Button type="submit" disabled={loading}>Send</Button>
            {loading && <Spinner />}
            {success === true && "Your message has been sent! We will get back to you soon!"}
            {success === false && "Something went wrong. Please try again!"}
          </Form>
        </Left>
        <Right>
          <House />
        </Right>
      </Container>
    </Section>
  )
}

export default Contact