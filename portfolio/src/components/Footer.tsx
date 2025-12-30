import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-12 sm:py-16 border-t border-ash">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <a href="#home" className="text-3xl font-bold font-mono gradient-text">
              JK<span className="text-pearl">.</span>
            </a>
            <p className="text-steel text-base mt-3">
              Building digital experiences that matter.
            </p>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-4"
          >
            {[
              { icon: FiGithub, href: 'https://github.com/jenishkatuwal11', label: 'GitHub' },
              { icon: FiLinkedin, href: 'https://www.linkedin.com/in/jenishthedev/', label: 'LinkedIn' },
              { icon: FiMail, href: 'mailto:jenishkatuwal7@gmail.com', label: 'Email' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                className="p-4 rounded-xl bg-charcoal text-silver hover:text-electric hover:bg-slate transition-all border border-ash/50"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll to top */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="p-3 sm:p-4 rounded-xl border-2 border-electric text-electric hover:bg-electric/10 transition-colors flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <FiArrowUp size={22} />
          </motion.button>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 pt-8 border-t border-ash text-center"
        >
          <p className="text-steel text-base flex items-center justify-center gap-2 flex-wrap">
            Designed & Built with{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FiHeart className="text-coral" size={16} />
            </motion.span>{' '}
            by{' '}
            <span className="text-electric font-medium">Jenish Katuwal</span>
          </p>
          <p className="text-steel/50 text-sm mt-3">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
