import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser';

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
` 
const Title = styled.h1`
  font-weight: 200;
` 
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
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
const Right = styled.div`
  flex: 1;
` 

const Contact = () => {
  const ref = useRef();

  const [success,setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_tcs89vl', 'template_eap4aja', ref.current, {
        publicKey: 'rNaI7uugEW_PDa-4w',
      })
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true)
        },
        (error) => {
          console.log(error.text);
          setSuccess(false)
        },
      );
  }

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input placeholder="Name" name="name"/>
            <Input placeholder="Email" name="email"/>
            <TextArea placeholder="Write your message" name="message" rows={10}/>
            <Button type="submit">Send</Button>
            {success && "Your message has been sent! We will get back to you soon!"}
          </Form>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  )
}

export default Contact