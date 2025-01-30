// import React from 'react'
import Tilt from 'react-parallax-tilt'
import PropTypes from "prop-types";
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt
      className='xs:w-[250px] w-full'
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      scale={1}
      transitionSpeed={450}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired
}

const AboutComponent = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-center text-secondary mx-auto text-[17px] max-w-5xl leading-[30px]'
      >
        I&apos;m a dedicated and versatile Computer Science graduate with a strong foundation in software development, machine learning, and full-stack web development. Proficient in programming languages like Python, JavaScript, and Java, I have hands-on experience with frameworks such as Flask, Django, and React. I&apos;m a quick learner who enjoys collaborating to create innovative, scalable, and user-friendly solutions that address real-world challenges. With a passion for problem-solving and continuous learning, I am eager to turn ideas into impactful technologies. Let&apos;s work together to bring your ideas to reality!
      </motion.p>

      <div className='mt-20 mx-auto flex flex-wrap items-center justify-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

const About = SectionWrapper(AboutComponent, "about")

export default About