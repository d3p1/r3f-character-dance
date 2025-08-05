/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {OrbitControls} from '@react-three/drei'
import {Suspense, useState} from 'react'
import * as THREE from 'three'
import {Canvas} from '@react-three/fiber'
import {Woman} from './app/Woman.tsx'

const ANIMATIONS = ['Play The Guitar', 'Idle', 'Run', 'Dance', 'Pose']

export const App = () => {
  const [animation, setAnimation] = useState(0)

  return (
    <>
      <Canvas
        dpr={[1, 2]}
        gl={{antialias: true, outputColorSpace: THREE.SRGBColorSpace}}
        camera={{position: [-2, 2, 4]}}
        shadows={true}
      >
        <OrbitControls />

        <ambientLight intensity={1.5} />
        <directionalLight
          position={[10, 10, 10]}
          intensity={4.5}
          castShadow={true}
        />

        <mesh rotation-x={-Math.PI / 2} receiveShadow={true}>
          <circleGeometry args={[3]} />
          <meshStandardMaterial color="orange" />
        </mesh>

        <Suspense>
          <Woman animation={animation} />
        </Suspense>
      </Canvas>

      <ul className="fixed bottom-20 right-20 flex flex-col items-center gap-4 w-50">
        {ANIMATIONS.map((animationLabel, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                setAnimation(index)
              }}
              className={`${
                animation === index ? 'bg-primary-500' : 'bg-secondary'
              } text-primary-900 font-black cursor-pointer uppercase text-xs p-4 rounded-2xl w-full text-center hover:bg-primary-500 transition-colors duration-300`}
            >
              {animationLabel}
            </li>
          )
        })}
      </ul>
    </>
  )
}
