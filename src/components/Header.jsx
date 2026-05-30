import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navItems } from '../assets/assets'
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi'
import { toggleTheme } from '../utils/theme'

const Header = () => {
  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleTheme = () => {
    toggleTheme();
    setIsDark(!isDark);
  };
  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className='fixed w-full z-50 shadow-xl backdrop-blur-md 
                   bg-white/60 dark:bg-black/60 
                   border-b border-white/20'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
          <div className='flex justify-between items-center'>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.05 }}
              className='text-2xl font-bold gradient-text cursor-pointer'
            >
              Prateek Saini
            </motion.span>
            <div className='hidden lg:flex items-center space-x-10'>
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className='relative group hover:text-neo-secondary'
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  whileHover={{ y: -3 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button 
                whileHover={{ scale: 1.06, boxShadow: "0 0 20px rgba(110, 68, 255, 0.5)" }}
                className='px-6 py-2 rounded-full border dark:border-gray-300 font-semibold cursor-pointer'
              >
                Resume
              </motion.button>
            </div>

            <div className='flex items-center space-x-4'>
              <motion.button 
                onClick={handleToggleTheme}
                whileTap={{ scale: 0.8, rotate: 180 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className='w-10 h-10 rounded-full glass dark:glass flex 
                items-center justify-center'
              >
                {isDark ? 
                  (<FiSun className='w-6 h-6 text-yellow-300' />) :
                  (<FiMoon className='w-6 h-6 text-neo-dark' />) 
                }
              </motion.button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className='lg:hidden p-2 rounded-full glass dark:glass focus:outline-none'
              >
                {mobileMenuOpen ? <FiX className='w-6 h-6' /> : <FiMenu className='w-6 h-6' />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='fixed top-20 left-4 right-4 bg-white/90 dark:bg-black/90 backdrop-blur-lg z-40 lg:hidden rounded-2xl shadow-2xl border border-white/20'
          >
            <div className='flex flex-col items-center py-8 space-y-6'>
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className='text-xl font-medium hover:text-neo-secondary transition-colors'
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button 
                className='neo-btn px-10 py-4 rounded-full cursor-pointer font-bold'
                whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(110, 68, 255, 0.7)" }}
              >
                Download Resume
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}


export default Header