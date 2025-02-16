import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const ContactComponent = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const canvasRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing after first load
        }
      },
      { threshold: 0.3 } // Trigger when 30% is visible
    );

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({...form, [name]: value })

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      'service_mn3qg6u',
      'template_frt91ss',
      {
        from_name: form.name,
        to_name: 'Khang',
        from_email: form.email,
        to_email: 'huynhbaokhangduong@gmail.com',
        message: form.message
      },
      '2OuPUN0DQ1JfVciGA'
    )
    .then(() => {
      setLoading(false)
      alert('Thank you so much! I will get back to you as soon as possible.')
      
      setForm({ name: '', email: '', message: '' })
    }, (error) => {
      setLoading(false)

      console.log(error)

      alert('Something when wrong.')
    })
  }

  return (
    <div ref={canvasRef} className='xl:flex-row w-full flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 text-left rounded-2xl'
      >
        <p className={`${styles.sectionSubText} !text-left`}>Get in touch</p>
        <h2 className={`${styles.sectionHeadText} !text-left`}>Contact.</h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='What&apos;s your name?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='What&apos;s your email?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What do you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] md:w-[550px] sm:w-[450px] sm:h-[450px] h-[260px] w-[260px] mx-auto'
      >
        {isVisible && <EarthCanvas />}
      </motion.div>
    </div>
  )
}

const Contact = SectionWrapper(ContactComponent, 'contact')

export default Contact