import React from 'react'
import { motion } from 'framer-motion'

const AnimatedBackground = () => {
  return (
    <div className='fixed inset-0 overflow-hidden z-0 pointer-events-none'>
      {/* Blob 1 */}
      <motion.div 
        animate={{
          x: [0, 30, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className='absolute -top-1/4 -left-1/4 w-64 h-64 md:w-80 md:h-80 
        rounded-full bg-linear-to-r from-neo-primary to-neo-accent opacity-20 filter blur-3xl'></motion.div>
      
      {/* Blob 2 */}
      <motion.div 
        animate={{
          x: [0, -40, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className='absolute top-1/3 right-1/4 w-72 h-72 md:w-64 md:h-64 rounded-full bg-linear-to-r from-neo-secondary to-neo-accent opacity-15 filter blur-3xl'></motion.div>
      
      {/* Blob 3 */}
      <motion.div 
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className='absolute bottom-1/4 left-1/2 w-48 h-48 md:w-64 md:h-64 rounded-full bg-linear-to-r from-neo-primary to-neo-secondary opacity-10 filter blur-3xl'></motion.div>
    </div>
  )
}

export default AnimatedBackground
