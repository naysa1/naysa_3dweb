import { Canvas } from '@react-three/fiber'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 100vh;
    width: 100%;
`
const Test = () => {
  return (
    <Container>
        <Canvas>

        </Canvas>
    </Container>
  )
}

export default Test