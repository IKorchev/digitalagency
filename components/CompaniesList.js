import React from "react"
import Staggered from "./Staggered"
import { motion } from "framer-motion"
import { item as itemVariants } from "../utils/motionConfigs"

const CompaniesList = ({ images }) => {
  return (
    <Staggered.Parent className='w-full container mx-auto -mt-12 py-12 flex justify-between items-center '>
      <motion.span variants={itemVariants} className='border-t border-text-primary pt-3 '>
        Proud partner at Hubspot & Segment
      </motion.span>
      <div className='flex gap-32'>
        {images.map((item, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <motion.img
            variants={itemVariants}
            key={item}
            alt={item}
            src={`/${item}_Icon.svg`}
            className='h-7'
          />
        ))}
      </div>
    </Staggered.Parent>
  )
}

export default CompaniesList
