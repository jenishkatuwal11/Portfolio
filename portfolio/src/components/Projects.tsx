import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiExternalLink, FiGithub, FiFolder, FiArrowRight } from 'react-icons/fi'

const projects = [
  {
    title: 'Grill & Bakes',
    subtitle: 'Full Stack Restaurant Web App',
    description: 'A full-featured restaurant management system using MERN stack with real-time admin updates via Socket.IO. Achieved 5% reduction in order processing time and 20% reliability improvement through comprehensive test coverage.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Redux', 'Socket.IO'],
    link: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop',
    color: 'from-electric/80 to-violet/80',
    accent: 'electric',
  },
  {
    title: 'Real Estate Nepal',
    subtitle: 'Property Listing Platform',
    description: 'A dynamic real estate listing platform with advanced search, filters, and user authentication. Increased search efficiency by 28% and deployed via Render with 99% uptime.',
    tags: ['React.js', 'Tailwind CSS', 'REST API', 'Render'],
    link: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop',
    color: 'from-neon/80 to-electric/80',
    accent: 'neon',
  },
  {
    title: 'Gemini AI Chatbot',
    subtitle: 'AI-Powered Chat Platform',
    description: 'A secure, scalable AI chatbot integrating Google Gemini 2.0 API with robust JWT and OAuth 2.0 authentication. Manages 100+ user accounts with 80% faster login speed.',
    tags: ['React.js', 'Node.js', 'Gemini API', 'OAuth 2.0'],
    link: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
    color: 'from-violet/80 to-coral/80',
    accent: 'violet',
  },
  {
    title: 'Contact Manager API',
    subtitle: 'RESTful Backend Service',
    description: 'A secure, efficient REST API with bcrypt encryption and JWT authentication. Handles 10 requests per second with less than 5ms latency.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
    link: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop',
    color: 'from-amber/80 to-coral/80',
    accent: 'amber',
  },
]

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeProject, setActiveProject] = useState(0)

  return (
    <section id="projects" className="relative py-24 sm:py-32 lg:py-40" ref={ref}>
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-12 bg-ash" />
            <span className="text-electric font-mono text-sm tracking-[0.2em]">03. PORTFOLIO</span>
            <span className="h-px w-12 bg-ash" />
          </div>
          <h2 className="text-pearl mb-6">Featured Projects</h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            A selection of projects that showcase my skills in full-stack development
          </p>
        </motion.div>

        {/* Main Featured Project Display */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-0">
            {/* Project Tabs */}
            <div className="lg:col-span-2 flex lg:flex-col gap-3 sm:gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 lg:pr-8">
              {projects.map((project, index) => (
                <motion.button
                  key={project.title}
                  onClick={() => setActiveProject(index)}
                  whileHover={{ x: 8 }}
                  className={`relative shrink-0 text-left p-4 sm:p-5 lg:p-6 rounded-2xl transition-all duration-300 ${activeProject === index
                    ? 'glass border-l-4 border-electric bg-electric/5'
                    : 'hover:bg-charcoal/50 border-l-4 border-transparent'
                    }`}
                >
                  <span className={`font-mono text-xs mb-2 block ${activeProject === index ? 'text-electric' : 'text-steel'
                    }`}>
                    0{index + 1}
                  </span>
                  <h4 className={`font-semibold text-lg mb-1 transition-colors ${activeProject === index ? 'text-pearl' : 'text-silver'
                    }`}>
                    {project.title}
                  </h4>
                  <p className="text-steel text-sm hidden sm:block">{project.subtitle}</p>

                  {activeProject === index && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-electric hidden lg:block"
                    >
                      <FiArrowRight size={20} />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>

            {/* Active Project Display */}
            <div className="lg:col-span-3">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="relative group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-3xl mb-8">
                  <img
                    src={projects[activeProject].image}
                    alt={projects[activeProject].title}
                    className="w-full h-[300px] sm:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-linear-to-tr ${projects[activeProject].color} mix-blend-multiply opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />

                  {/* Project Links Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <motion.a
                      href={projects[activeProject].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-5 bg-midnight/90 backdrop-blur-sm rounded-full text-pearl hover:text-electric transition-colors border border-pearl/20"
                    >
                      <FiGithub size={26} />
                    </motion.a>
                    <motion.a
                      href={projects[activeProject].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-5 bg-midnight/90 backdrop-blur-sm rounded-full text-pearl hover:text-electric transition-colors border border-pearl/20"
                    >
                      <FiExternalLink size={26} />
                    </motion.a>
                  </div>

                  {/* Project Number Badge */}
                  <div className="absolute top-6 left-6 px-4 py-2 bg-midnight/80 backdrop-blur-sm rounded-full">
                    <span className="font-mono text-sm text-electric">Project 0{activeProject + 1}</span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-5">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-pearl mb-2">
                      {projects[activeProject].title}
                    </h3>
                    <p className={`font-medium ${projects[activeProject].accent === 'electric' ? 'text-electric' :
                      projects[activeProject].accent === 'neon' ? 'text-neon' :
                        projects[activeProject].accent === 'violet' ? 'text-violet' : 'text-amber'
                      }`}>
                      {projects[activeProject].subtitle}
                    </p>
                  </div>

                  <p className="text-silver text-lg leading-relaxed">
                    {projects[activeProject].description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    {projects[activeProject].tags.map(tag => (
                      <span
                        key={tag}
                        className="px-4 py-2 text-sm font-mono text-silver bg-charcoal/80 rounded-lg border border-ash/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-5">
                    <motion.a
                      href={projects[activeProject].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-2.5 sm:gap-3 px-5 sm:px-6 py-2.5 sm:py-3 glass rounded-xl text-silver hover:text-electric hover:border-electric/30 transition-all text-sm sm:text-base"
                    >
                      <FiGithub size={18} className="sm:w-5 sm:h-5" />
                      <span className="font-medium">View Code</span>
                    </motion.a>
                    <motion.a
                      href={projects[activeProject].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center gap-2.5 sm:gap-3 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium transition-all text-sm sm:text-base ${projects[activeProject].accent === 'electric' ? 'bg-electric/10 text-electric hover:bg-electric/20' :
                        projects[activeProject].accent === 'neon' ? 'bg-neon/10 text-neon hover:bg-neon/20' :
                          projects[activeProject].accent === 'violet' ? 'bg-violet/10 text-violet hover:bg-violet/20' :
                            'bg-amber/10 text-amber hover:bg-amber/20'
                        }`}
                    >
                      <FiExternalLink size={18} className="sm:w-5 sm:h-5" />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Project Grid Overview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="h-px w-8 bg-ash" />
            <h3 className="text-xl font-semibold text-pearl">Quick Overview</h3>
            <span className="h-px w-8 bg-ash" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => setActiveProject(index)}
                className={`relative cursor-pointer p-6 rounded-2xl transition-all duration-300 overflow-hidden group ${activeProject === index
                  ? 'glass border-electric/30'
                  : 'glass hover:border-ash'
                  }`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-5">
                    <div className={`p-3 rounded-xl transition-colors ${project.accent === 'electric' ? 'bg-electric/10 text-electric' :
                      project.accent === 'neon' ? 'bg-neon/10 text-neon' :
                        project.accent === 'violet' ? 'bg-violet/10 text-violet' :
                          'bg-amber/10 text-amber'
                      }`}>
                      <FiFolder size={24} />
                    </div>
                    <span className="font-mono text-xs text-steel">0{index + 1}</span>
                  </div>

                  <h4 className={`font-semibold text-lg mb-2 transition-colors ${activeProject === index ? 'text-electric' : 'text-pearl group-hover:text-electric'
                    }`}>
                    {project.title}
                  </h4>
                  <p className="text-steel text-sm line-clamp-2">{project.subtitle}</p>

                  {/* Hover indicator */}
                  <div className={`mt-4 flex items-center gap-2 text-sm transition-all ${activeProject === index ? 'text-electric' : 'text-steel group-hover:text-electric'
                    }`}>
                    <span>View details</span>
                    <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Active indicator */}
                {activeProject === index && (
                  <motion.div
                    layoutId="activeProject"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-electric to-neon"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
