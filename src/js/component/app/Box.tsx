/**
 * @description Box
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as THREE from 'three'
import {useRef, useState} from 'react'
import * as React from 'react'
import {type ThreeElements, useFrame} from '@react-three/fiber'

export const Box: React.FC<ThreeElements['mesh']> = ({...props}) => {
  const meshRef = useRef<THREE.Mesh>(null)
  const [isClicked, setIsClicked] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useFrame((_, delta) => {
    if (!meshRef?.current) return

    meshRef.current.rotation.y += delta
  })

  return (
    <mesh
      onClick={() => setIsClicked(!isClicked)}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
      ref={meshRef}
      scale={isClicked ? 1.5 : 1}
      {...props}
    >
      <boxGeometry />
      <meshStandardMaterial color={isHovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}
