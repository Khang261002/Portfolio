/* eslint-disable react/no-unknown-property */
import PropTypes from "prop-types"
import { Suspense } from "react"
import {
  Decal,
  Float, /* Float is to randomize the rotation and position of the ball */
  OrbitControls,
  PerspectiveCamera,
  useTexture,
  View
} from "@react-three/drei";

import CanvasLoader from "../Loader"

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])

  return (
    <Float speed={2} rotationIntensity={1}>
      <mesh castShadow receiveShadow scale={1.75}>
        <icosahedronGeometry args={[1, 20]} />
        <meshStandardMaterial
          color='#ffffff'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 2 * Math.PI]}
          scale={1.25}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  )
}

Ball.propTypes = {
  imgUrl: PropTypes.string.isRequired
}

const Environment = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[20, 30, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="blue" />
      <directionalLight position={[0, 10, 5]} />
    </>
  )
}

const BallView = ({ icon }) => {
  return (
    <View className="view relative w-28 h-28 m-0 items-center mx-auto">
      <Suspense fallback={<CanvasLoader />}>
        <Environment />

        <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
        <Ball imgUrl={icon} />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Suspense>
    </View>
  )
}

BallView.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired
}

export default BallView