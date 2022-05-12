import React from "react"
import { motion } from "framer-motion"
import { container, item } from "../utils/motionConfigs"

const Parent = ({ children, ...props }) => {
  return (
    <motion.div
      viewport={{ once: true, margin: props.margin || "-150px" }}
      variants={container}
      initial='hidden'
      whileInView='show'
      {...props}>
      {children}
    </motion.div>
  )
}

const ChildDiv = ({ children, ...props }) => {
  return (
    <motion.div variants={item} {...props}>
      {children}
    </motion.div>
  )
}

let Staggered = {}
Staggered.Parent = Parent
Staggered.ChildDiv = ChildDiv
Object.freeze(Staggered)
export default Staggered
