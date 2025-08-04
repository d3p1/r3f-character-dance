/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as THREE from 'three'
import {Canvas} from '@react-three/fiber'
import {Box} from './app/Box.tsx'
import {CameraControls} from './app/CameraControls.tsx'
import {RandomObj} from './app/RandomObj.tsx'

export const App = () => {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{antialias: true, outputColorSpace: THREE.SRGBColorSpace}}
      camera={{position: [5, 4, 4]}}
    >
      <CameraControls />
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 10]} intensity={4.5} />
      <Box position-x={3} />
      <RandomObj position={[0, 0, 0]} />
      <Box position-x={-3} />
    </Canvas>
  )
}
