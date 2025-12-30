import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiBriefcase, FiBookOpen, FiAward } from 'react-icons/fi'

const experience = {
  work: [
    {
      title: 'Frontend Development Intern',
      company: 'Blue Fox Technology Solutions',
      duration: 'Sep 2024 – Nov 2024',
      description: [
        'Developed responsive React components using Tailwind CSS',
        'Integrated APIs and optimized UI performance',
        'Collaborated in agile sprints and peer code reviews',
      ],
    },
  ],
  education: [
    {
      title: 'B.Sc. (Hons) Computing',
      company: 'London Metropolitan University',
      location: 'Kamalpokhari, Kathmandu',
      duration: '2022 – 2025',
      description: [
        'Comprehensive curriculum in software development',
        'Focus on web technologies and database systems',
        'Practical project-based learning approach',
      ],
    },
  ],
  certifications: [
    { name: 'React Internship Completion', issuer: 'Blue Fox Technology' },
    { name: 'Full Stack Web Development Bootcamp', issuer: 'Online Certification' },
    { name: 'Google Crash Course on Python', issuer: 'Google' },
    { name: 'LinkedIn Java Certification', issuer: 'LinkedIn' },
  ],
}

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="relative py-24 sm:py-32 lg:py-40 bg-charcoal/30" ref={ref}>
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
            <span className="text-electric font-mono text-sm tracking-[0.2em]">04. JOURNEY</span>
            <span className="h-px w-12 bg-ash" />
          </div>
          <h2 className="text-pearl mb-6">Experience & Education</h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-10 justify-center lg:justify-start">
              <div className="p-4 rounded-2xl bg-electric/10 text-electric">
                <FiBriefcase size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-pearl">Work Experience</h3>
            </div>

            <div className="relative pl-8 border-l-2 border-ash">
              {experience.work.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="relative mb-8 last:mb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-electric border-4 border-charcoal" />
                  
                  <div className="glass p-6 sm:p-8 rounded-2xl">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                      <h4 className="text-lg sm:text-xl font-semibold text-pearl">{item.title}</h4>
                      <span className="text-electric text-sm font-mono">{item.duration}</span>
                    </div>
                    <p className="text-neon text-base mb-5">{item.company}</p>
                    <ul className="space-y-3">
                      {item.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-3 text-silver text-base">
                          <span className="text-electric mt-1.5 text-lg">▹</span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-4 mb-10 justify-center lg:justify-start">
              <div className="p-4 rounded-2xl bg-neon/10 text-neon">
                <FiBookOpen size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-pearl">Education</h3>
            </div>

            <div className="relative pl-8 border-l-2 border-ash">
              {experience.education.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="relative mb-8 last:mb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-neon border-4 border-charcoal" />
                  
                  <div className="glass p-6 sm:p-8 rounded-2xl">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                      <h4 className="text-lg sm:text-xl font-semibold text-pearl">{item.title}</h4>
                      <span className="text-neon text-sm font-mono">{item.duration}</span>
                    </div>
                    <p className="text-electric text-base mb-1">{item.company}</p>
                    <p className="text-steel text-sm mb-5">{item.location}</p>
                    <ul className="space-y-3">
                      {item.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-3 text-silver text-base">
                          <span className="text-neon mt-1.5 text-lg">▹</span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-20 lg:mt-24 max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-10 justify-center">
            <div className="p-4 rounded-2xl bg-violet/10 text-violet">
              <FiAward size={28} />
            </div>
            <h3 className="text-2xl font-semibold text-pearl">Certifications</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {experience.certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass p-6 rounded-2xl group hover:border-violet/30 transition-all text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-violet/10 flex items-center justify-center mb-5 mx-auto group-hover:bg-violet/20 transition-colors">
                  <FiAward className="text-violet" size={24} />
                </div>
                <h4 className="text-pearl text-base font-medium mb-2 leading-snug">{cert.name}</h4>
                <p className="text-steel text-sm">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
