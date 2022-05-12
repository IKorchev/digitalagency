import React from "react"
import { BsClockHistory, BsStars } from "react-icons/bs"
import Form from "../Form/Form"
import Staggered from "../Staggered"
import { motion } from "framer-motion"
import { item } from "../../utils/motionConfigs"
import CompaniesList from "../CompaniesList"
import { images } from "../../utils/images"

const LandingPage = () => {
  return (
    <div>
      <Staggered.Parent className='flex flex-row-reverse overflow-hidden container mx-auto mt-24  '>
        <Staggered.ChildDiv
          style={{
            backgroundImage: `url("/LP_Ball.svg")`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className='w-full h-[40rem]  relative'
        />
        <div className='w-full overflow-hidden'>
          <motion.p variants={item} className='text-purple-cta text-xl mb-2'>
            <BsStars className='inline mr-3 -mt-2' /> Jump start your growth
          </motion.p>
          <motion.h1 variants={item} className='text-7xl font-bold leading-tight '>
            We boost the growth for <span className='text-purple-cta'>Startup</span> to Fortune 500 Companies
            <span className='inline-flex text-6xl rounded-full ml-5 p-1 icon shadow-lg shadow-black/50'>
              <BsClockHistory className='inline text-gray-900' />
            </span>
          </motion.h1>
          <motion.p variants={item} className='text-2xl mt-5  lg:w-2/3'>
            Get the most accurate leads, sales people training and conversions, tools and more — all within
            the same one billing.
          </motion.p>
          <Staggered.ChildDiv>
            <Form />
          </Staggered.ChildDiv>
        </div>
      </Staggered.Parent>
      <CompaniesList images={images} />
    </div>
  )
}

export default LandingPage
