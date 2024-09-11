import React from 'react';
import { Canvas} from '@react-three/fiber';
import Cat from './Cat'
import { MeshDistortMaterial, Sphere, Stage, OrbitControls  } from '@react-three/drei'


const ImCat = () => {
   
  return (
    <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[3,2,1]} />
        <Sphere 
        args={[1, 300, 200]} 
        scale={2} >
            <MeshDistortMaterial color="#1a5c92" attatch="material" distort={0.5} speed={2}/>
        </Sphere>
        <Stage environment="city" intensity={0.6}>       
            <Cat scale={[2,2,2]} />
        </Stage>
        <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

export default ImCat


