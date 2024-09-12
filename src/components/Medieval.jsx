/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 medieval.gltf --transform 
Files: medieval.gltf [10.89MB] > C:\Users\Naysa Chopra\Downloads\winter_medieval_fantasy_tavern\medieval-transformed.glb [411.6KB] (96%)
Author: Rixael (https://sketchfab.com/rixael)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/winter-medieval-fantasy-tavern-256412b58c9b4d6a93d6b4c593901654
Title: Winter Medieval Fantasy Tavern
*/

import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/medieval-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="RootNode" position={[141.142, 8.179, 116.793]} rotation={[0, -1.226, 0]}>
          <group name="Fireflies" position={[-213.266, 283.376, 961.155]} rotation={[-Math.PI / 2, 0, 0]} scale={2.804}>
            <mesh name="1" geometry={nodes['1'].geometry} material={materials.PaletteMaterial001} morphTargetDictionary={nodes['1'].morphTargetDictionary} morphTargetInfluences={nodes['1'].morphTargetInfluences} />
            <mesh name="0" geometry={nodes['0'].geometry} material={materials.PaletteMaterial001} morphTargetDictionary={nodes['0'].morphTargetDictionary} morphTargetInfluences={nodes['0'].morphTargetInfluences} />
          </group>
        </group>
        <mesh name="Barrel_bottom003_Wood1_0" geometry={nodes.Barrel_bottom003_Wood1_0.geometry} material={materials.PaletteMaterial001} position={[633.539, 87.46, 268.24]} rotation={[-Math.PI / 2, 0, -1.226]} scale={[49.471, 49.471, 67.575]} />
        <mesh name="Plane082_Untitled_drawing_0" geometry={nodes.Plane082_Untitled_drawing_0.geometry} material={materials.Untitled_drawing} position={[1391.562, 160.358, 16.844]} rotation={[-0.008, 0.359, -1.466]} scale={[30.76, 120.815, 104.551]} />
        <mesh name="flower_small_flower_small_0" geometry={nodes.flower_small_flower_small_0.geometry} material={materials.flower_small} position={[642.112, 24.975, 1186.183]} rotation={[-0.241, 0.291, -0.071]} scale={34.368} />
        <mesh name="Flags001_Flag_blue_0" geometry={nodes.Flags001_Flag_blue_0.geometry} material={materials.PaletteMaterial002} position={[658.134, 588.29, 662.102]} rotation={[-0.083, -0.066, -0.907]} scale={[513.441, 3.347, 92.668]} />
      </group>
    </group>
  )
}

useGLTF.preload('/medieval-transformed.glb')
