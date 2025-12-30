import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-midnight"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-electric/30"
          style={{ width: 120, height: 120 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-neon border-r-neon"
          style={{ width: 120, height: 120 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Center content */}
        <motion.div
          className="flex h-[120px] w-[120px] items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <motion.span
            className="text-3xl font-bold gradient-text font-mono"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            JK
          </motion.span>
        </motion.div>
      </div>
      
      {/* Loading text */}
      <motion.div
        className="absolute bottom-1/3 flex items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <span className="text-steel font-mono text-sm tracking-widest">LOADING</span>
        <motion.span
          className="flex gap-1"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <span className="text-electric">.</span>
          <span className="text-neon">.</span>
          <span className="text-violet">.</span>
        </motion.span>
      </motion.div>
    </motion.div>
  )
}

export default Loader



