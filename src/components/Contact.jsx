import React from 'react'
import { motion } from 'framer-motion'
import {  MdEmail, MdPhone, MdLocationOn} from 'react-icons/md'
import {socialPlatforms} from '../assets/assets'
const Contact = () => {
const contactInfo = [
    {icon: <MdEmail className='w-6 h-6'/>, title: 'Email', value: 'prateeksaini9258@gmail.com '},
    {icon: <MdPhone className='w-6 h-6'/>, title: 'Phone', value: '+91 9258833113'},
    {icon: <MdLocationOn className='w-6 h-6'/>, title: 'Location', value: 'Jahangirabad, Bulandshahr, India'},
]

  return (
    <div id='contact' className='py-16 md:py-20 relative z-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{duration:0.8}}
        viewport={{ once: true }}
        className='text-center mb-12 md:mb-16'
        >
            <span className='inline-block px-4 py-2 glass dark:glass rounded-full text-neo-secondary font-medium mb-4'>GET IN TOUCH</span>
            <h2  className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6 '>
                <span className='gradient-text'> Let's Work Together</span>
            </h2>
            <p className='text-lg sm:text-xl max-w-3xl mx-auto '> Have a project in mind or want to discuss potential opportunities? 
                Feel free to reach out!</p>
        </motion.div>

        <div className='max-w-4xl mx-auto md:rounded-3xl overflow-hidden glass dark:glass border border-neo-secondary/20'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{duration:0.8}}
            viewport={{ once: true }}
            className='p-6 md:p-8 lg:p-12 bg-linear-to-r from-white/10 to-neo-primary/10 dark:from-neo-dark dark:to-neo-primary/10'
            >
                <h3 className='text-2xl md:text-3xl font-bold mb-8'>Contact Information</h3>
                <div className='space-y-6 md:space-y-8'>
                    {contactInfo.map((info, index) => (
                        <motion.div
                        key={index}
                        className='flex items-start gap-5 group'
                        whileHover={{ scale: 1.05 }}
                        >
                            <div className='shrink-0 w-12 h-12 rounded-xl glass flex items-center justify-center text-neo-primary group-hover:text-neo-secondary transition-colors duration-300'>
                                {info.icon}
                            </div>
                            <div>
                                <h4 className='text-xs font-bold text-neo-secondary/70 uppercase tracking-widest mb-1'>{info.title}</h4>
                                <p className='text-lg font-medium text-gray-800 dark:text-gray-200'>{info.value}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className='mt-12'> 
                    <h4 className='text-lg font-bold text-gray-800 dark:text-gray-200'> Follow Me </h4>
                    <div className='flex items-center gap-4 mt-4'>
                        {socialPlatforms.map((platform) => (
                        <motion.a
                        whileHover={{ scale: 1.2 }}
                         key={platform}
                            href='#'
                            className='w-8 h-8 md:w-10 md:h-10 rounded-full glass dark:glass flex items-center justify-center hover:bg-neo-primary/10 transition-colors duration-300 '
                        >
                           <platform.icon/>
                        </motion.a>
                        ))}
                    </div>
                </div>
            </motion.div>
                        <motion.div className='p-6 md:p-8 lg:p-12'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{duration:0.8}}
                        viewport={{ once: true }}
                        >
                         <form action=""  className='space-y-4 md:space-y-6'>
                            {["name", "email","subject"].map((field) => (
                                <div
                                key={field}>
                                <label htmlFor={field} className='block text-sm font-medium mb-2'>
                                    {field.charAt(0).toUpperCase() + field.slice(1)}
                                </label>
                                <input
                                    type={field === "email" ? "email" : "text"}
                                    id={field}
                                    name={field}
                                    className='w-full px-4 py-3 rounded border border-neo-primary/50 bg-transparent text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-neo-primary transition-all duration-300'
                                    placeholder={`Enter your ${field}`}
                                />
                                </div>
                            ))}

                            <div>
                                <label htmlFor="message" className='block text-sm font-medium mb-2'>
                                    Message
                                </label>
                                <textarea name='message' id='message' className='w-full px-4 py-3 rounded border border-neo-primary/50 bg-transparent text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-neo-primary transition-all duration-300' rows="4" placeholder='Enter your message....'>
                                </textarea>
                                <motion.button 
                                type='submit'
                                className='neo-btn w-full px-6 py-3 md:py-4 rounded-full font-bold '
                                whileHover={{ scale: 1.05 }}
                                
                                >
                                    Send Message
                                </motion.button>
                            </div>
                            
                            </form>   
                        </motion.div>
        </div>

        </div>
        </div>
      
    </div>
  )
}

export default Contact
