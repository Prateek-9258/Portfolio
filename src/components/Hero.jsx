import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa6'
import { FaCommentDots } from 'react-icons/fa'
import { socialPlatforms } from '../assets/assets'
import { assets } from '../assets/assets'
import Lottie from 'react-lottie-player';
import lottieJson from '../assets/lottie.json'
const Hero = () => {
  return (
    <section id='home' className='min-h-screen relative z-10 flex items-center pt-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center '>

                <div className='order-2 lg:order-1 text-center lg:text-left'>
                    <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className=' inline-block px-4 py-2 glass dark:glass rounded-full 
                    text-neo-secondary font-medium mb-4'
                    >
                        Hey, I'm Prateek
                    </motion.span>
                    <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6'
                    >
                        <span className='gradient-text'> Full Stack Web </span>
                        <span className='block'> Developer</span>
                    </motion.h1>

                    <motion.p
                    initial={{ opacity: 0, }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className='text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 mb-8'
                    >
                        I am a Full Stack Developer specializing in building robust, user-centric web applications from the ground up. 
                    </motion.p>

                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                        <motion.a
                        whileHover={{ scale: 1.06 }}
                        whileTap={{scale:0.95}}
                        href='#work'
                        className='neo-btn px-8 py-4 rounded-full font-bold  flex items-center cursor-pointer '
                        >
                            View My Work 
                            <FaArrowRight className='ml-2'/>
                        </motion.a>
                        <motion.a
                        whileHover={{ scale: 1.06 }}
                        whileTap={{scale:0.95}}
                        href='#contact'
                        className='px-8 py-4 rounded-full font-bold border-2 border-neo-primary flex items-center hover:bg-neo-primary/20 cursor-pointer'
                        >
                            Get In Touch
                            <FaCommentDots className='ml-2' />
                        </motion.a>
                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1}}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className='mt-12 flex justify-center lg:justify-start space-x-6'
                    >
                       {socialPlatforms.map((platform, index) => (
                        <motion.a
                        whileHover={{scale:1.2}}
                        key={index}
                        href={platform.href} 
                        className='w-8 h-8 md:w-10 md:h-10 rounded-full glass dark:glass flex items-center justify-center '
                        >
                            <platform.icon/>
                        </motion.a>
                       ))}
                    </motion.div>

                </div>
                <div className='order-1 lg:order-2 flex justify-center relative'>
                    <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className=' relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96'
                    >
                        <motion.div
                        initial={{ y: 0 }}
                        animate={{ y:[0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        
                        className='absolute inset-0 rounded-3xl overflow-hidden'
                        >
                            <img src={assets.profileImg} alt="Hero Image" className='w-full h-full object-cover rounded-full ' />
                        </motion.div>
                        <motion.div  
                        className='absolute -bottom-6 -right-6 w-40 h-40 rounded-2xl glass dark:glass border border-neo-primary/20 overflow-hidden  p-4 '
                        >
                            <p className='font-bold text-lg text-neo-accent  '> Fresher</p>
                            <Lottie animationData={lottieJson} play loop/>
                        </motion.div>
                    </motion.div>

                </div>

            </div>
    
        </div>
      
    </section>
  )
}

export default Hero
