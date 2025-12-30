import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiGithub, FiLinkedin } from 'react-icons/fi'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.slice(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'py-6'
          }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl sm:text-3xl font-bold font-mono gradient-text">JK</span>
            <span className="text-pearl text-2xl sm:text-3xl font-bold">.</span>
            <motion.span
              className="absolute -bottom-1 left-0 h-0.5 bg-linear-to-r from-electric to-neon"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative text-sm font-medium tracking-wide transition-colors ${activeSection === link.href.slice(1)
                  ? 'text-electric'
                  : 'text-silver hover:text-pearl'
                  }`}
              >
                <span className="text-electric font-mono text-xs mr-1.5">0{index + 1}.</span>
                {link.name}
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-electric"
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Social Links & Resume */}
          <div className="hidden lg:flex items-center gap-5">
            <motion.a
              href="https://github.com/jenishkatuwal11"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: '#00d4ff' }}
              className="text-silver transition-colors p-2"
            >
              <FiGithub size={22} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/jenishthedev/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: '#00d4ff' }}
              className="text-silver transition-colors p-2"
            >
              <FiLinkedin size={22} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border-2 border-electric text-electric text-sm font-medium hover:bg-electric/10 transition-colors flex items-center gap-2"
            >
              Let's Talk
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-pearl p-2.5 rounded-lg hover:bg-charcoal/50 transition-colors flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-midnight/98 backdrop-blur-xl">
              <div className="flex flex-col items-center justify-center h-full gap-10">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl sm:text-3xl font-medium text-pearl hover:text-electric transition-colors"
                  >
                    <span className="text-electric font-mono text-base sm:text-lg mr-3">0{index + 1}.</span>
                    {link.name}
                  </motion.a>
                ))}
                <div className="flex gap-8 mt-8">
                  <a href="https://github.com/jenishkatuwal11" target="_blank" rel="noopener noreferrer" className="text-silver hover:text-electric p-2">
                    <FiGithub size={32} />
                  </a>
                  <a href="https://www.linkedin.com/in/jenishthedev/" target="_blank" rel="noopener noreferrer" className="text-silver hover:text-electric p-2">
                    <FiLinkedin size={32} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
