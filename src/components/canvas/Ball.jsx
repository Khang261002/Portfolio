/* eslint-disable react/no-unknown-property */
import PropTypes from "prop-types"
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import {
  Decal,
  // Float, /* Float is to randomize the rotation and position of the ball */
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader"

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])

  return (
    // <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
    <>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 10, 5]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 4]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 2 * Math.PI]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </>
    // </Float>
  )
}

Ball.propTypes = {
  imgUrl: PropTypes.string.isRequired
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enablePan={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

BallCanvas.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired
}

export default BallCanvas