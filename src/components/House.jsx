import React from 'react'
import { Canvas } from '@react-three/fiber'
import Medieval from './Medieval'
import { OrbitControls, Stage } from '@react-three/drei'

const House = () => {

  return (
    <Canvas>
        <Stage environment="city" intensity={0.6}>       
            <Medieval scale={[2, 2, 2]} />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2}/>
    </Canvas>
  )
}

export default House