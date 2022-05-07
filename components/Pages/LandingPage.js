import React from "react"
import { BsClockHistory, BsStars } from "react-icons/bs"
import Form from "../Form/Form"
const LandingPage = () => {
  return (
    <div className=' flex overflow-x-hidden container mx-auto mt-24  '>
      <div className='w-full'>
        <p className='text-purple-cta text-xl mb-2'>
          <BsStars className='inline mr-3 -mt-2' /> Jump start your growth
        </p>
        <h1 className='text-7xl font-bold leading-tight '>
          We boost the growth for <span className='text-purple-cta'>Startup</span> to Fortune 500 Companies
          <span className='inline-flex text-6xl rounded-full ml-5 p-1 icon shadow-lg shadow-black/50'>
            <BsClockHistory className='inline text-gray-900' />
          </span>
        </h1>
        <p className='text-2xl mt-5  lg:w-2/3'>
          Get the most accurate leads, sales people training and conversions, tools and more — all within the
          same one billing.
        </p>
        <Form />
      </div>
      <div
        style={{
          backgroundImage: `url("/LP_Ball.svg")`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className='w-full h-[40rem] relative '></div>
    </div>
  )
}

export default LandingPage
