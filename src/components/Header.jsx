import React, { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { MdConnectWithoutContact } from 'react-icons/md'
import { HiMenu, HiX } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navLinks = [
    { name: 'Anasayfa', href: '/' },
    { name: 'Tarifelerimiz', href: '/tarifeler' },
    { name: 'Altyapı Sorgulama', href: 'https://www.turktelekom.com.tr/altyapi-sorgulama' },
    { name: 'İnternet Hız Testi', href: '/hiz-testi' },
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'Referanslarımız', href: '/referanslar' },
  ];

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <motion.header 
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className="z-50 bg-white shadow-md transition-all duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <motion.img 
            src="/logo.png" 
            alt="logo" 
            className="w-32 md:w-44 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
          
          <div className="hidden md:flex items-center gap-6">
            <motion.a 
              href="https://wa.me/your-number" 
              className="flex items-center gap-2 text-lg font-semibold hover:text-red-500 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <FaWhatsapp className="text-red-500" />
              </motion.div>
              <span>Whatsapp Destek</span>
            </motion.a>
            <motion.a 
              href="tel:your-number" 
              className="flex items-center gap-2 text-lg font-semibold hover:text-red-500 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <MdConnectWithoutContact className="text-red-500" />
              </motion.div>
              <span>İletişim</span>
            </motion.a>
          </div>

          <motion.button 
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-red-500 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {(isMenuOpen || window.innerWidth >= 768) && (
          <motion.nav 
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={navVariants}
            className="bg-[#005ca8] transition-all duration-300"
          >
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center py-4 space-y-4 md:space-y-0 md:space-x-6">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    variants={navItemVariants}
                    className="font-semibold text-white hover:text-red-200 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header