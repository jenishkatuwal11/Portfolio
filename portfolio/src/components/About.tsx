import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCode, FiServer, FiDatabase, FiLayers } from 'react-icons/fi'

const highlights = [
  {
    icon: FiCode,
    title: 'Frontend',
    description: 'React, Next.js, Tailwind CSS',
    color: 'electric',
  },
  {
    icon: FiServer,
    title: 'Backend',
    description: 'Node.js, Express, REST APIs',
    color: 'neon',
  },
  {
    icon: FiDatabase,
    title: 'Database',
    description: 'MongoDB, PostgreSQL, MySQL',
    color: 'violet',
  },
  {
    icon: FiLayers,
    title: 'DevOps',
    description: 'Docker, GitHub, Kubernetes',
    color: 'amber',
  },
]

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-24 sm:py-32 lg:py-40" ref={ref}>
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-12 bg-ash" />
            <span className="text-electric font-mono text-sm tracking-[0.2em]">01. ABOUT</span>
            <span className="h-px w-12 bg-ash" />
          </div>
          <h2 className="text-pearl mb-6">Get To Know Me</h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            A passionate developer who loves turning ideas into reality
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-silver text-lg leading-relaxed">
              I'm a passionate <span className="text-electric font-medium">Full Stack Developer</span> currently 
              pursuing my B.Sc. in Computing at London Metropolitan University, Kathmandu. 
              I specialize in building modern web applications that are both functional and beautiful.
            </p>
            <p className="text-silver text-lg leading-relaxed">
              My journey in web development started with a curiosity about how things work on the internet.
              Today, I create <span className="text-neon font-medium">full-featured applications</span> using the MERN 
              stack, focusing on clean code, best practices, and exceptional user experiences.
            </p>
            <p className="text-silver text-lg leading-relaxed">
              I understand how different parts of a system work together — from 
              <span className="text-electric"> building responsive interfaces</span> to 
              <span className="text-neon"> implementing server-side logic</span> and 
              <span className="text-violet"> managing databases</span>. I'm always eager to learn 
              new technologies and take on challenging projects.
            </p>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 pt-8"
            >
              {[
                { value: '4+', label: 'Projects' },
                { value: '1+', label: 'Years Exp.' },
                { value: '10+', label: 'Technologies' },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center p-4 sm:p-6 glass rounded-2xl">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                    className="block text-3xl sm:text-4xl font-bold gradient-text mb-2"
                  >
                    {stat.value}
                  </motion.span>
                  <span className="text-steel text-sm sm:text-base">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4 sm:gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group p-6 sm:p-8 glass rounded-2xl hover:border-electric/30 transition-all cursor-default"
              >
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-5 transition-colors
                    ${item.color === 'electric' ? 'bg-electric/10 text-electric group-hover:bg-electric/20' : ''}
                    ${item.color === 'neon' ? 'bg-neon/10 text-neon group-hover:bg-neon/20' : ''}
                    ${item.color === 'violet' ? 'bg-violet/10 text-violet group-hover:bg-violet/20' : ''}
                    ${item.color === 'amber' ? 'bg-amber/10 text-amber group-hover:bg-amber/20' : ''}
                  `}
                >
                  <item.icon size={28} />
                </div>
                <h3 className="text-pearl font-semibold text-lg sm:text-xl mb-3">{item.title}</h3>
                <p className="text-steel text-sm sm:text-base">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
