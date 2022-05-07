import React from "react"
import { motion } from "framer-motion"


const AnimatedDiv = ({ delay, children, ...props }) => {
  return (
    <motion.div
      {...props}
      initial={{ opacity: 0, y: 100 }}
      viewport={{ margin: "-300px", once: true }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 77,
        damping: 14,
        duration: 0.5,
        delay,
      }}>
      {children}
    </motion.div>
  )
}

export default AnimatedDiv
