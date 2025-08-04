/**
 * @description Camera controls
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import {extend, useFrame, useThree} from '@react-three/fiber'

extend({OrbitControls})

export const CameraControls = () => {
  const {camera, gl} = useThree()

  useFrame((state) => {
    const {camera, clock} = state
    const angle = clock.getElapsedTime()
    const rad = 4

    camera.position.x = Math.cos(angle) * rad
    camera.position.z = Math.sin(angle) * rad
    camera.lookAt(0, 0, 0)
  })

  return <orbitControls args={[camera, gl.domElement]} />
}
