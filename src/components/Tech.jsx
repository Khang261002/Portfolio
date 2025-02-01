import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Canvas } from "@react-three/fiber"
import { Preload, View } from "@react-three/drei"

import { styles } from '../styles'
import { BallView } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { textVariant } from '../utils/motion'


const TechComponent = () => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I am comfortable with</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div ref={ref} id="canvasContainer" className="mt-10">
        {isVisible && (
          <>
            <div className="container flex flex-wrap justify-center items-center w-full gap-10 mx-auto">
              {technologies.map((tech, index) => (
                <div key={index}>
                  <BallView icon={tech.icon} />
                  <p className="text-center text-secondary text-[17px] mx-auto">{tech.name}</p>
                </div>
              ))}
            </div>

            <Canvas
              style={{ position: 'fixed' }}
              className="w-full h-full top-0 bottom-0 right-0 left-0 overflow-hidden"
              dpr={[1, 2]}
              eventSource={document.getElementById("canvasContainer")}
            >
              <View.Port />
              <Preload all />
            </Canvas>
          </>
        )}
      </div>
    </>
  )
}

const Tech = SectionWrapper(TechComponent, 'tech')

export default Tech