/* eslint-disable react/no-unknown-property */
import { motion } from 'framer-motion'
import { styles } from '../styles'
// import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { textVariant } from '../utils/motion'

const TechComponent = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I am comfortable with</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10 mx-auto">
        {technologies.map((tech, index) => (
          <p key={index} className="w-[112px] text-center text-secondary text-[17px] mx-auto">{tech.name}</p>
        ))}
      </div>
    </>
  )
}

const Tech = SectionWrapper(TechComponent, 'tech')

export default Tech