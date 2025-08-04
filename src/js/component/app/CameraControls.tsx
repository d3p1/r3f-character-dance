/**
 * @description Camera controls
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import {extend, useThree} from '@react-three/fiber'

extend({OrbitControls})

export const CameraControls = () => {
  const {camera, gl} = useThree()

  return <orbitControls args={[camera, gl.domElement]} />
}
