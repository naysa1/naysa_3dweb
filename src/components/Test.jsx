import { Canvas } from '@react-three/fiber'
import { OrbitControls, RenderTexture, Text } from '@react-three/drei'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
`
const Test = () => {
  return (
    <Container>
        <Canvas>
          <OrbitControls enableZoom={false} autoRotate/>
          <ambientLight intensity={1}/>
          <directionalLight position={[3,2,1]}/>
          <mesh>
            <dodecahedronGeometry/>
            <meshStandardMaterial>
              <RenderTexture attatch='map'>
                <color attatch="background" args={['pink']}/>
                <Text fontsize={2} color="#555">NAYSA</Text>
              </RenderTexture>
            </meshStandardMaterial>
          </mesh>
        </Canvas>
    </Container>
  )
}

export default Test