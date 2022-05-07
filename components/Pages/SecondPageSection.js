/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion"
import { BiSync } from "react-icons/bi"
import { BsFillBarChartFill } from "react-icons/bs"
import AnimatedDiv from "../AnimatedDiv"

const SecondPage = () => {
  return (
    <section>
      <div className='bg-background-secondary py-16'>
        <div className=' container mx-auto flex justify-evenly px-20'>
          <AnimatedDiv className='mr-36'>
            <h2 className='text-lg font-medium text-text-light'>ACHIEVE MORE</h2>
            <h1 className='text-4xl font-semibold mt-3'>Purpose of a convoy is to keep your team.</h1>
          </AnimatedDiv>
          <div className='grid grid-cols-2'>
            <AnimatedDiv delay={0.1} className='flex gap-5 px-10'>
              <div className='icon flex-shrink-0 p-2 h-12 w-12  grid place-items-center shadow-lg shadow-black/60 rounded-full'>
                <BsFillBarChartFill className='text-accent-icon  flex-grow text-2xl -ml-1 -mt-1' />
              </div>
              <div>
                <h2 className='text-2xl font-semibold  mt-2'>Built for impact</h2>
                <p className='text-xl mt-5'>
                  We identify and nurture a truly diverse team of designers, developers and marketers
                </p>
              </div>
            </AnimatedDiv>
            <AnimatedDiv delay={0.2} className='flex gap-5 px-10'>
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
            </AnimatedDiv>
          </div>
        </div>
      </div>
      <div className='container mx-auto px-20 py-24'>
        <AnimatedDiv className='text-center space-y-4'>
          <h1 className='text-5xl font-semibold mt-12  leading-tight'>
            <span className='text-accent-purple'>How can we help your </span>
            <br />
            <span className='text-accent-purple'>business?</span>
          </h1>
          <p className='text-lg text-text-dark'>Build trust and increase your sales and engagement</p>
        </AnimatedDiv>
        <div className='flex  justify-between gap-12 mt-20'>
          <AnimatedDiv className='rounded-lg border bg-background-primary border-gray-600 p-10'>
            <div className='flex mx-auto justify-center p-7 w-[90px] h-[90px] shadow-lg shadow-black/50 rounded-full icon'>
              <img src='/Search_Icon.svg' alt='Search Icon' />
            </div>
            <div className='mt-12 text-center px-5'>
              <h4 className='text-2xl '>Find out what you need</h4>
              <p className='mt-4 text-text-dark'>We present you a proposal and discuss nitty- gritty like</p>
            </div>
          </AnimatedDiv>

          <AnimatedDiv delay={0.1} className='rounded-lg border border-gray-600 p-10 '>
            <div className='flex mx-auto justify-center p-7 w-[90px] h-[90px] shadow-lg shadow-black/50 rounded-full icon'>
              <img src='/Settings_Icon.svg' alt='Search Icon' />
            </div>
            <div className='mt-12 text-center px-5'>
              <h4 className='text-2xl '>Work out the details</h4>
              <p className='mt-4 text-gray-300'>Communication protocols apart from engagement models</p>
            </div>
          </AnimatedDiv>
          <AnimatedDiv delay={0.2} className='rounded-lg border border-gray-600 p-10'>
            <div className='flex mx-auto justify-center p-7   w-[90px] h-[90px] shadow-lg shadow-black/50 rounded-full icon'>
              <img src='/Rocket_Icon.svg' alt='Search Icon' />
            </div>
            <div className='mt-12 text-center px-5'>
              <h4 className='text-2xl '>We get to work fast</h4>
              <p className='mt-4 text-text-dark'>Protocols apart from engage models, pricing billing</p>
            </div>
          </AnimatedDiv>
        </div>
        <div className='flex justify-center mt-24'>
          <button className='icon px-6 py-4 shadow-lg shadow-black/50 text-xl text-white  rounded-xl'>
            Become a partner
          </button>
        </div>
      </div>
    </section>
  )
}

export default SecondPage
