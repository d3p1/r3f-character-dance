/**
 * @description Global declarations
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import {type ThreeElement} from '@react-three/fiber'

declare module '@react-three/fiber' {
  interface ThreeElements {
    orbitControls: ThreeElement<typeof OrbitControls>
  }
}
