import React from 'react'
import { Canvas } from '@react-three/fiber'
import Medieval from './Medieval'
import { OrbitControls, Stage } from '@react-three/drei'

const House = () => {

  return (
    <Canvas>
        <Stage environment="city" intensity={0.6}>       
            <Medieval scale={[1.4, 1.4, 1.4]} />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2}/>
    </Canvas>
  )
}

export default House