/**
 * @description Random object
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as THREE from 'three'
import {useEffect, useMemo, useRef} from 'react'
import * as React from 'react'
import {type ThreeElements} from '@react-three/fiber'

const TRIANGLES = 5
const VERTEX_COUNT = TRIANGLES * 3

export const RandomObj: React.FC<ThreeElements['mesh']> = ({...props}) => {
  const meshRef = useRef<THREE.Mesh<THREE.BufferGeometry>>(null)

  const position = useMemo(() => {
    const positionArray = new Float32Array(VERTEX_COUNT * 3)

    for (let i = 0; i < positionArray.length; ++i) {
      positionArray[i] = (Math.random() - 0.5) * 4
    }

    return positionArray
  }, [])

  useEffect(() => {
    if (!meshRef?.current) return
    meshRef.current.geometry.computeVertexNormals()
  }, [position])

  return (
    <mesh ref={meshRef} {...props}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[position, 3]} />
      </bufferGeometry>
      <meshStandardMaterial side={THREE.DoubleSide} color="mediumpurple" />
    </mesh>
  )
}
