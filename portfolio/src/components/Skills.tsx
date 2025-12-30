import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiMysql,
  SiDocker, SiGithub, SiRedux, SiSocketdotio, SiPython,
  SiHtml5, SiCss3
} from 'react-icons/si'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
      { name: 'Redux', icon: SiRedux, color: '#764ABC' },
      { name: 'Socket.IO', icon: SiSocketdotio, color: '#ffffff' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
    ],
  },
]

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="relative py-24 sm:py-32 lg:py-40 bg-charcoal/30" ref={ref}>
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
            <span className="text-electric font-mono text-sm tracking-[0.2em]">02. SKILLS</span>
            <span className="h-px w-12 bg-ash" />
          </div>
          <h2 className="text-pearl mb-6">My Tech Stack</h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Technologies I've been working with recently
          </p>
        </motion.div>

        {/* Skill categories */}
        <div className="space-y-16 lg:space-y-20">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-pearl mb-8 flex items-center justify-center gap-4">
                <span className="w-4 h-4 rounded-full bg-gradient-to-r from-electric to-neon" />
                {category.title}
                <span className="w-4 h-4 rounded-full bg-gradient-to-r from-neon to-electric" />
              </h3>
              
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: catIndex * 0.2 + index * 0.05 }}
                    whileHover={{ y: -8, scale: 1.05 }}
                    className="group relative"
                  >
                    <div className="glass p-5 sm:p-6 rounded-2xl flex flex-col items-center gap-4 hover:border-electric/30 transition-all min-w-[100px] sm:min-w-[120px]">
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.4 }}
                      >
                        <skill.icon 
                          size={40} 
                          style={{ color: skill.color }}
                          className="transition-transform"
                        />
                      </motion.div>
                      <span className="text-silver text-sm font-medium text-center">
                        {skill.name}
                      </span>
                    </div>
                    
                    {/* Glow effect on hover */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl"
                      style={{ backgroundColor: `${skill.color}20` }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 lg:mt-20 text-center glass p-6 sm:p-8 rounded-2xl max-w-3xl mx-auto"
        >
          <p className="text-steel text-base sm:text-lg">
            <span className="text-pearl font-medium">Also experienced with:</span>{' '}
            <span className="text-silver">
              JWT, OAuth 2.0, bcrypt, Mongoose, MUI, daisyUI, Java, C#, Oracle Database, Render, Netlify, Kubernetes
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
