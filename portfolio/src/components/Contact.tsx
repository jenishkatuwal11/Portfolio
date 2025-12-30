import { motion, useInView } from 'framer-motion'
import React, { useRef, useState, useEffect } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiCheck, FiAlertCircle } from 'react-icons/fi'
import emailjs from '@emailjs/browser'

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_dzxzcqk'
const EMAILJS_TEMPLATE_ID = 'template_l6r1cvk'
const EMAILJS_PUBLIC_KEY = '8zTxCRS11Xu2xDxf3'

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'jenishkatuwal7@gmail.com',
    href: 'mailto:jenishkatuwal7@gmail.com',
    color: 'electric',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+977-9816344823',
    href: 'tel:+9779816344823',
    color: 'neon',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Kathmandu, Nepal',
    href: '#',
    color: 'violet',
  },
]

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/jenishkatuwal11', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/jenishthedev/', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:jenishkatuwal7@gmail.com', label: 'Email' },
]

const Contact = () => {
  const ref = useRef(null)
  const formRef = useRef<HTMLFormElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formRef.current) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )

      console.log('EmailJS Result:', result)

      if (result.status === 200) {
        setSubmitStatus('success')
        setFormState({ name: '', email: '', message: '' })
      } else {
        console.error('EmailJS failed:', result)
        setSubmitStatus('error')
      }
    } catch (error: any) {
      console.error('EmailJS Error Details:', {
        message: error?.text || error?.message,
        status: error?.status,
        error
      })
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 lg:py-40" ref={ref}>
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
            <span className="text-electric font-mono text-sm tracking-[0.2em]">05. CONTACT</span>
            <span className="h-px w-12 bg-ash" />
          </div>
          <h2 className="text-pearl mb-6">Get In Touch</h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            I'm currently looking for new opportunities and my inbox is always open.
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-semibold text-pearl mb-6">Let's work together</h3>
              <p className="text-silver text-lg leading-relaxed">
                I'm always interested in hearing about new projects, creative ideas,
                or opportunities to be part of your vision. Feel free to reach out through
                any of the channels below.
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-5 p-5 sm:p-6 glass rounded-2xl group hover:border-electric/30 transition-all"
                >
                  <div
                    className={`p-4 rounded-xl transition-colors ${item.color === 'electric' ? 'bg-electric/10 text-electric group-hover:bg-electric/20' : ''
                      } ${item.color === 'neon' ? 'bg-neon/10 text-neon group-hover:bg-neon/20' : ''
                      } ${item.color === 'violet' ? 'bg-violet/10 text-violet group-hover:bg-violet/20' : ''
                      }`}
                  >
                    <item.icon size={26} />
                  </div>
                  <div>
                    <p className="text-steel text-sm mb-1">{item.label}</p>
                    <p className="text-pearl font-medium text-lg">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="pt-6 text-center lg:text-left"
            >
              <p className="text-steel text-base mb-5">Or find me on</p>
              <div className="flex gap-4 justify-center lg:justify-start">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="p-4 sm:p-5 glass rounded-2xl text-silver hover:text-electric hover:border-electric/30 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon size={26} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass p-8 sm:p-10 rounded-3xl space-y-6">
              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 bg-neon/10 border border-neon/30 rounded-xl text-neon"
                >
                  <FiCheck size={24} />
                  <span className="font-medium">Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 bg-coral/10 border border-coral/30 rounded-xl text-coral"
                >
                  <FiAlertCircle size={24} />
                  <span className="font-medium">Something went wrong. Please try again or email me directly.</span>
                </motion.div>
              )}

              <div>
                <label htmlFor="name" className="block text-silver text-base mb-3 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={e => setFormState(prev => ({ ...prev, name: e.target.value }))}
                  required
                  className="w-full px-5 py-4 bg-charcoal border border-ash rounded-xl text-pearl placeholder-steel focus:border-electric focus:outline-none transition-colors text-base"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-silver text-base mb-3 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={e => setFormState(prev => ({ ...prev, email: e.target.value }))}
                  required
                  className="w-full px-5 py-4 bg-charcoal border border-ash rounded-xl text-pearl placeholder-steel focus:border-electric focus:outline-none transition-colors text-base"
                  placeholder="john@example.com"
                />
              </div>

              {/* Hidden fields for EmailJS template */}
              <input
                type="hidden"
                name="title"
                value={`Message from ${formState.name || 'Portfolio Visitor'}`}
              />
              <input
                type="hidden"
                name="time"
                value={new Date().toLocaleString()}
              />

              <div>
                <label htmlFor="message" className="block text-silver text-base mb-3 font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={e => setFormState(prev => ({ ...prev, message: e.target.value }))}
                  required
                  rows={5}
                  className="w-full px-5 py-4 bg-charcoal border border-ash rounded-xl text-pearl placeholder-steel focus:border-electric focus:outline-none transition-colors resize-none text-base"
                  placeholder="Hi Jenish, I'd like to talk about..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 sm:py-5 px-6 sm:px-8 bg-linear-to-r from-electric to-neon rounded-xl text-midnight font-semibold text-base sm:text-lg flex items-center justify-center gap-3 sm:gap-4 hover:opacity-90 transition-opacity disabled:opacity-50 shadow-lg shadow-electric/20 mt-2"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 sm:w-6 sm:h-6 border-2 sm:border-3 border-midnight border-t-transparent rounded-full"
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FiSend size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              <p className="text-steel text-sm text-center pt-2">
                Your message will be sent directly to my email inbox.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
