/* eslint-disable @next/next/no-img-element */
import { BiSync } from "react-icons/bi"
import { BsFillBarChartFill } from "react-icons/bs"
import Staggered from "../Staggered"
import { motion } from "framer-motion"
import { item } from "../../utils/motionConfigs"
const SecondPage = () => {
  return (
    <section>
      <Staggered.Parent className='bg-background-secondary py-16'>
        <div className='container mx-auto flex justify-evenly px-20'>
          <Staggered.ChildDiv className='mr-36'>
            <h2 className='text-lg font-medium text-text-light'>ACHIEVE MORE</h2>
            <h1 className='text-4xl font-semibold mt-3'>Purpose of a convoy is to keep your team.</h1>
          </Staggered.ChildDiv>
          <div className='grid grid-cols-2'>
            <Staggered.ChildDiv className='flex gap-5 px-10'>
              <div className='icon flex-shrink-0 p-2 h-12 w-12  grid place-items-center shadow-lg shadow-black/60 rounded-full'>
                <BsFillBarChartFill className='text-accent-icon  flex-grow text-2xl -ml-1 -mt-1' />
              </div>
              <div>
                <h2 className='text-2xl font-semibold  mt-2'>Built for impact</h2>
                <p className='text-xl mt-5'>
                  We identify and nurture a truly diverse team of designers, developers and marketers
                </p>
              </div>
            </Staggered.ChildDiv>
            <Staggered.ChildDiv className='flex gap-5 px-10'>
              <div className='icon flex-shrink-0 p-2 h-12 w-12  grid place-items-center shadow-lg shadow-black/60 rounded-full'>
                <BiSync className='text-accent-icon text-3xl font-bold ' />
              </div>
              <div>
                <h2 className='text-2xl font-semibold mt-2'>Always in sync</h2>
                <p className='text-xl mt-5  '>
                  We work the way you do by adapting to your workflows and rhythm we aim to blend in for a
                  seamless.
                </p>
              </div>
            </Staggered.ChildDiv>
          </div>
        </div>
      </Staggered.Parent>
      <Staggered.Parent margin='-200px' className='container mx-auto mt-32 px-20'>
        <div className='text-center space-y-4'>
          <motion.h1 variants={item} className='text-5xl font-semibold mt-12  leading-tight'>
            <span className='text-accent-purple'>How can we help your </span>
            <br />
            <span className='text-accent-purple'>business?</span>
          </motion.h1>
          <motion.p variants={item} className='text-lg text-text-dark'>
            Build trust and increase your sales and engagement
          </motion.p>
        </div>
        <Staggered.Parent className='flex  justify-between gap-12 mt-20'>
          <Staggered.ChildDiv className='rounded-lg border bg-background-primary border-gray-600 p-10'>
            <div className='flex mx-auto justify-center p-7 w-[90px] h-[90px] shadow-lg shadow-black/50 rounded-full icon'>
              <img src='/Search_Icon.svg' alt='Search Icon' />
            </div>
            <div className='mt-12 text-center px-5'>
              <h4 className='text-2xl '>Find out what you need</h4>
              <p className='mt-4 text-text-dark'>We present you a proposal and discuss nitty- gritty like</p>
            </div>
          </Staggered.ChildDiv>
          <Staggered.ChildDiv className='rounded-lg border border-gray-600 p-10 '>
            <div className='flex mx-auto justify-center p-7 w-[90px] h-[90px] shadow-lg shadow-black/50 rounded-full icon'>
              <img src='/Settings_Icon.svg' alt='Search Icon' />
            </div>
            <div className='mt-12 text-center px-5'>
              <h4 className='text-2xl '>Work out the details</h4>
              <p className='mt-4 text-gray-300'>Communication protocols apart from engagement models</p>
            </div>
          </Staggered.ChildDiv>
          <Staggered.ChildDiv className='rounded-lg border border-gray-600 p-10'>
            <div className='flex mx-auto justify-center p-7   w-[90px] h-[90px] shadow-lg shadow-black/50 rounded-full icon'>
              <img src='/Rocket_Icon.svg' alt='Search Icon' />
            </div>
            <div className='mt-12 text-center px-5'>
              <h4 className='text-2xl '>We get to work fast</h4>
              <p className='mt-4 text-text-dark'>Protocols apart from engage models, pricing billing</p>
            </div>
          </Staggered.ChildDiv>
        </Staggered.Parent>
        <Staggered.ChildDiv className='flex justify-center mt-24'>
          <button className='icon px-6 py-4 shadow-lg shadow-black/50 text-xl text-white  rounded-xl'>
            Become a partner
          </button>
        </Staggered.ChildDiv>
      </Staggered.Parent>
    </section>
  )
}

export default SecondPage
