import React from 'react'
import { motion } from 'framer-motion'
import { navItems, socialPlatforms } from '../assets/assets'
import { FaChevronUp } from 'react-icons/fa6'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <footer className='relative z-10 pt-20 pb-10 overflow-hidden'>
      {/* Decorative Top Border */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-neo-primary/30 to-transparent'></div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Mini CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mb-20 p-8 md:p-12 rounded-3xl glass dark:glass border border-neo-primary/20 text-center relative group overflow-hidden'
        >
          <div className='absolute inset-0 bg-neo-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
          <h3 className='text-3xl md:text-4xl font-bold mb-6 relative z-10'>
            Ready to start a <span className='gradient-text'>project?</span>
          </h3>
          <motion.a
            href='#contact'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='neo-btn px-8 py-4 rounded-full font-bold inline-block relative z-10'
          >
            Let's Talk Now
          </motion.a>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16'>
          {/* Branding & Bio */}
          <div className='lg:col-span-2 space-y-6'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className='text-3xl font-black tracking-tighter'
            >
              <span className='gradient-text'>PRATEEK</span>
              <span className='gradient-text'>.</span>
              <span className='text-neo-secondary'>SAINI</span>
            </motion.div>
            <p className='text-gray-600 dark:text-gray-400 max-w-sm leading-relaxed'>
              Building digital products that combine beautiful design with functional performance. Focused on user-centric web solutions.
            </p>
            <div className='flex gap-4'>
              {socialPlatforms.map((platform, index) => (
                <motion.a
                  key={index}
                  href={platform.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className='w-11 h-11 rounded-xl glass dark:glass flex items-center justify-center text-neo-primary hover:text-neo-secondary transition-all duration-300 border border-neo-primary/10'
                >
                  <platform.icon className='text-xl' />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="show" className='space-y-6'>
            <h4 className='text-lg font-bold dark:text-white'>Navigation</h4>
            <nav className='flex flex-col gap-3'>
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  variants={itemVariants}
                  className='text-gray-600 dark:text-gray-400 hover:text-neo-primary transition-colors inline-block w-fit'
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Utilities */}
          <div className='space-y-6'>
            <h4 className='text-lg font-bold dark:text-white'>Working Hours</h4>
            <p className='text-gray-600 dark:text-gray-400'>
              Available for freelance projects.<br />
              Mon - Fri: 9am - 6pm IST
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              className='flex items-center gap-2 text-sm font-bold text-neo-primary uppercase tracking-widest cursor-pointer group'
            >
              Go to top
              <div className='w-8 h-8 rounded-full glass flex items-center justify-center group-hover:bg-neo-primary group-hover:text-white transition-all'>
                <FaChevronUp size={12} />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className='pt-8 border-t border-neo-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-500 dark:text-gray-400'>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            © 2024 PRATEEK SAINI. ALL RIGHTS RESERVED.
          </motion.p>
          <div className='flex gap-6 uppercase tracking-widest'>
            <a href='#' className='hover:text-neo-primary transition-colors'>Privacy</a>
            <a href='#' className='hover:text-neo-primary transition-colors'>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
