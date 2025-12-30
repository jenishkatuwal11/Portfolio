import { motion } from 'framer-motion'
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

// Your profile image
const profileImage = '/profile.jpg'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-12"
    >
      <div className="section-container w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 mb-8 justify-center lg:justify-start"
            >
              <span className="h-px w-8 sm:w-12 bg-linear-to-r from-electric to-neon" />
              <span className="text-electric font-mono text-sm sm:text-base tracking-[0.2em] uppercase">
                Hello, I'm
              </span>
              <span className="h-px w-8 sm:w-12 bg-linear-to-r from-neon to-electric lg:hidden" />
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <span className="block text-pearl">Jenish</span>
              <span className="block gradient-text">Katuwal</span>
            </motion.h1>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 mb-8 justify-center lg:justify-start"
            >
              <span className="text-xl sm:text-2xl md:text-3xl text-steel font-light tracking-wide">
                Full Stack Developer
              </span>
              <span className="text-neon cursor-blink font-mono text-2xl">|</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-silver text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
            >
              I build exceptional digital experiences with modern web technologies.
              Passionate about creating performant, accessible, and beautiful applications
              that make a difference.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 sm:gap-5 mb-12 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-7 sm:px-10 py-3.5 sm:py-4 bg-linear-to-r from-electric to-neon rounded-full overflow-hidden shadow-lg shadow-electric/20"
              >
                <span className="relative z-10 text-midnight font-semibold text-base sm:text-lg flex items-center gap-2">
                  View My Work
                </span>
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-neon to-electric"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-7 sm:px-10 py-3.5 sm:py-4 border-2 border-electric/50 rounded-full text-electric font-semibold text-base sm:text-lg hover:bg-electric/10 hover:border-electric transition-all flex items-center gap-2"
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-6 justify-center lg:justify-start"
            >
              <span className="text-steel text-sm font-mono tracking-wide">Find me on</span>
              <div className="flex gap-3">
                {[
                  { icon: FiGithub, href: 'https://github.com/jenishkatuwal11', label: 'GitHub' },
                  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/jenishthedev/', label: 'LinkedIn' },
                  { icon: FiMail, href: 'mailto:jenishkatuwal7@gmail.com', label: 'Email' },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="p-3 sm:p-4 rounded-xl bg-charcoal/80 text-silver hover:text-electric hover:bg-slate border border-ash/50 hover:border-electric/30 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon size={22} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Decorative rings */}
              <motion.div
                className="absolute -inset-6 rounded-full border border-electric/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute -inset-12 rounded-full border border-neon/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />

              {/* Glowing background */}
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-electric/30 to-neon/30 blur-3xl scale-110" />

              {/* Image container */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-charcoal shadow-2xl shadow-electric/20"
              >
                <img
                  src={profileImage}
                  alt="Jenish Katuwal"
                  className="w-full h-full object-cover object-top"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-midnight/40 via-transparent to-transparent" />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: 'spring', stiffness: 200 }}
                className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 glass px-5 py-3 rounded-full shadow-lg"
              >
                <span className="text-neon font-mono text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2 h-2 bg-neon rounded-full animate-pulse" />
                  Open to Work
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5 },
          y: { duration: 2, repeat: Infinity }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-steel hover:text-electric transition-colors"
      >
        <span className="text-xs font-mono tracking-[0.3em] uppercase">Scroll</span>
        <FiArrowDown size={20} />
      </motion.a>
    </section>
  )
}

export default Hero
