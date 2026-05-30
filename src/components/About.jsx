import React from 'react'
import { motion } from 'framer-motion'
import Lottie from 'react-lottie-player'
import lottieJson from '../assets/lottie.json'
import { FiDownload } from 'react-icons/fi'
const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  return (
    <div id='about' className='py-16 md:py-20 relative z-10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div 
        variants={containerVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.2 }}
        className='flex flex-col lg:flex-row gap-12 items-center'>

        <motion.div className='w-full lg:w-1/2 flex justify-center' variants={imageVariants}>
          <div className=' holographic relative rounded-2xl md:rounded-3xl overflow-hidden p-6 md:p-8 glass dark:glass border border-neo-primary/20 w-full max-w-md'>
            <div className='relative aspect-square w-full'>
                <Lottie
                className='bg-transparent'
                loop 
                animationData={lottieJson}
                play
                style={{ width: '100%', height: '100%' }}
                />
            </div>
          </div>   
        </motion.div>

        <motion.div className='w-full lg:w-1/2 text-center lg:text-left' variants={textVariants}>
            <span className='inline-block px-4 py-2 glass dark:glass rounded-full text-neo-secondary font-medium mb-4'> MY JOURNEY </span>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6'> <span  className='gradient-text'>About Me</span></h2>
            <p className='text-lg md:text-xl mb-4 md:mb-6 max-w-2xl mx-auto lg:mx-0'> I am a passionate developer with a love for creating innovative solutions. With a background in computer science and a keen interest in emerging technologies, 
                I strive to push the boundaries of what's possible in the digital world.
                </p>
            <p className='text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0'>  My expertise lies in full-stack development, where I bridge the gap between frontend and backend to deliver seamless user experiences.
                 I enjoy tackling complex problems and turning ideas into reality through clean, efficient code.
            </p>
            <div className='flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start'>
              <motion.a
              href='#contact'
              className='neo-btn px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base'
              whileHover={{ scale: 1.05 }}
              >
                Let's Collaborate
              </motion.a>
              <motion.a
              href='#'
              className='px-6 md:px-8 py-3 md:py-4 rounded-full font-bold border-2 border-neo-primary hover:bg-neo-primary/10 transition-colors duration-300 text-sm md:text-base flex items-center '
              >
                <FiDownload className='mr-2' />
                Download CV
              </motion.a>

            </div>
        </motion.div>

        </motion.div>

      </div>
    </div>
  )
}

export default About
