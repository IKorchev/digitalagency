/* eslint-disable @next/next/no-img-element */
import Ball from "../public/LP_Ball.svg"
import Link from "next/link"
import { BsFillBarChartFill, BsClockHistory, BsStars, BsCheck } from "react-icons/bs"
import { BiSync } from "react-icons/bi"
import Form from "../components/Form/Form"
import Navbar from "../components/Navbar"
import CompaniesList from "../components/CompaniesList"
import { useState } from "react"

const images = ["Slack", "Amazon", "Woo", "Undies", "Sitepoint"]

export default function Home() {
  const [value, setValue] = useState(4)
  return (
    <div
      style={{
        backgroundImage: `url("/LP_Blob.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 0",
      }}
      className='bg-background-primary'>
      <Navbar />
      <div className=' flex overflow-x-hidden container mx-auto mt-24  '>
        {/* Navbar */}
        {/* Landing Page */}
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
            Get the most accurate leads, sales people training and conversions, tools and more — all within
            the same one billing.
          </p>
          <Form />
        </div>
        <div
          style={{
            backgroundImage: `url(${Ball.src})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className='w-full h-[40rem] relative '></div>
      </div>
      <CompaniesList images={images} />
      <div className='bg-background-secondary py-16'>
        <div className=' container mx-auto flex justify-evenly px-20'>
          <div className='mr-36'>
            <h2 className='text-lg font-medium text-text-light'>ACHIEVE MORE</h2>
            <h1 className='text-4xl font-semibold mt-3'>Purpose of a convoy is to keep your team.</h1>
          </div>
          <div className='grid grid-cols-2'>
            <div className='flex gap-5 px-10'>
              <div className='icon flex-shrink-0 p-2 h-12 w-12  grid place-items-center shadow-lg shadow-black/60 rounded-full'>
                <BsFillBarChartFill className='text-accent-icon  flex-grow text-2xl -ml-1 -mt-1' />
              </div>
              <div>
                <h2 className='text-2xl font-semibold  mt-2'>Built for impact</h2>
                <p className='text-gray-500 text-xl mt-5'>
                  We identify and nurture a truly diverse team of designers, developers and marketers
                </p>
              </div>
            </div>
            <div className='flex gap-5 px-10'>
              <div className='icon flex-shrink-0 p-2 h-12 w-12  grid place-items-center shadow-lg shadow-black/60 rounded-full'>
                <BiSync className='text-accent-icon text-3xl font-bold ' />
              </div>
              <div>
                <h2 className='text-2xl font-semibold mt-2'>Always in sync</h2>
                <p className='text-gray-500 text-xl mt-5  '>
                  We work the way you do by adapting to your workflows and rhythm we aim to blend in for a
                  seamless.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto px-20 py-24'>
        <div className='text-center space-y-4'>
          <h1 className='text-5xl font-semibold mt-12  leading-tight'>
            <span className='text-text-primary'>How can we help your </span>
            <br />
            <span className='text-text-primary'>business?</span>
          </h1>
          <p className='text-lg text-text-dark'>Build trust and increase your sales and engagement</p>
        </div>
        <div className='flex  justify-between gap-12 mt-20'>
          <div className='rounded-lg border bg-background-primary border-gray-600 p-10'>
            <div className='flex mx-auto justify-center p-7 w-[90px] h-[90px] shadow-lg shadow-black/50 rounded-full icon'>
              <img src='/Search_Icon.svg' alt='Search Icon' />
            </div>
            <div className='mt-12 text-center px-5'>
              <h4 className='text-2xl '>Find out what you need</h4>
              <p className='mt-4 text-text-dark'>We present you a proposal and discuss nitty- gritty like</p>
            </div>
          </div>

          <div className='rounded-lg border border-gray-600 p-10 '>
            <div className='flex mx-auto justify-center p-7 w-[90px] h-[90px] shadow-lg shadow-black/50 rounded-full icon'>
              <img src='/Settings_Icon.svg' alt='Search Icon' />
            </div>
            <div className='mt-12 text-center px-5'>
              <h4 className='text-2xl '>Work out the details</h4>
              <p className='mt-4 text-gray-300'>Communication protocols apart from engagement models</p>
            </div>
          </div>
          <div className='rounded-lg border border-gray-600 p-10'>
            <div className='flex mx-auto justify-center p-7   w-[90px] h-[90px] shadow-lg shadow-black/50 rounded-full icon'>
              <img src='/Rocket_Icon.svg' alt='Search Icon' />
            </div>
            <div className='mt-12 text-center px-5'>
              <h4 className='text-2xl '>We get to work fast</h4>
              <p className='mt-4 text-text-dark'>Protocols apart from engage models, pricing billing</p>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-24'>
          <button className='icon px-6 py-4 shadow-lg shadow-black/50 text-xl text-white  rounded-xl'>
            Become a partner
          </button>
        </div>
      </div>
      <section className='container px-24 py-24 mx-auto'>
        <div className='flex '>
          <div className='w-full flex justify-center'>
            <img src='/ImageAndCard.svg' alt='' />
          </div>
          <div className='w-full flex flex-col justify-center'>
            <span className='text-accent-orange text-2xl'>SCHEDULE</span>
            <h1 className='text-6xl font-black text-accent-purple  mt-4'>
              Great customer relationship starts here
            </h1>
            <p className='text-xl mt-8'>
              80 days around the world, we&apos;ll find a pot of gold just sitting where the rainbow&apos;s
              ending. Time — we&apos;ll fight against the time, and we&apos;ll fly on the white wings of the
              wind.
            </p>
            <Link href='/'>
              <a className='text-accent-purple text-lg  mt-8 font-semibold hover:underline focus:underline'>
                Learn more about publishing <span className='ml-5'>→</span>
              </a>
            </Link>
          </div>
        </div>
        <div className='flex flex-row-reverse mt-12'>
          <div className='w-full flex justify-center'>
            <img src='/ImageAndCard_2.svg' alt='' />
          </div>
          <div className='w-full flex flex-col justify-center'>
            <span className='text-accent-green text-2xl'>MONITOR</span>
            <h1 className='text-6xl text-accent-purple font-black mt-4'>Introducing best mobile carousels</h1>
            <p className='text-xl mt-8'>
              Before the ship is really back. Round, round, all around the world. Round, all around the world.
              Round, all around the world.
              <br />
              Round, all around the world.
            </p>
            <Link href='/'>
              <a className='text-accent-purple text-lg  mt-8 font-semibold hover:underline focus:underline'>
                Learn more about monitoring <span className='ml-5'>→</span>
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section className='bg-background-secondary flex justify-center py-24 '>
        <div className='relative flex flex-col bg-[#2E2E3E]  shadow-black/20 shadow-xl items-center  p-12 w-2/5 rounded-xl text-center'>
          <h1 className='text-3xl'>Pricing</h1>
          <div className='flex space-x-24 mt-12'>
            <div className='flex flex-col'>
              <span className='text-xl'>Starter</span>
              <span className='text-4xl text-accent-purple mt-4 font-semibold'>$4,000/mo</span>
            </div>
            <div className='flex flex-col'>
              <span className='text-xl'>Business</span>
              <span className='text-4xl text-accent-purple mt-4 font-semibold'>$7,500/mo</span>
            </div>
          </div>
          <div className='mt-24 w-full '>
            <span className='font-bold'>
              {parseInt(value) === 1 ? `${value} Product` : `${value} Products`} - $
              {(value * 500).toLocaleString()}{" "}
            </span>
            <div className='flex mt-5 items-center space-x-4'>
              <span>1</span>
              <label htmlFor='myRange' className='sr-only'>
                Range
              </label>
              <input
                onChange={(e) => setValue(e.target.value)}
                type='range'
                min='1'
                className='w-3/4 slider'
                max='20'
                value={value}
                id='myRange'
              />
              <span>20+</span>
            </div>
          </div>
          <div className='bg-[#262634] rounded-lg px-12 py-5 flex items-center shadow-xl shadow-black/30 space-x-12  absolute -bottom-12 -right-48'>
            <h1 className='text-xl'>Ready to get started?</h1>
            <button className='icon shadow-lg shadow-black/50 py-2 px-4 text-gray-200 text-xl rounded-lg'>
              Get started
            </button>
          </div>
        </div>
      </section>
      <section className='container mx-auto py-32 bg-background-primary flex justify-evenly'>
        <div className=''>
          <h1 className='text-6xl font-black text-accent-purple'>Future of support with new shape</h1>
          <p className='text-lg mt-8'>
            Discuss your goals, determine success
            <br />
            metrics, identify problems
          </p>
          <div>
            <div className='flex mt-8 items-center space-x-4'>
              <span className='w-7 h-7 grid place-items-center  rounded-full icon shadow-xl shadow-black/40'>
                <BsCheck className='text-2xl text-white' />
              </span>
              <span className='text-lg'>UX design content strategy</span>
            </div>
            <div className='flex mt-4 items-center space-x-4'>
              <span className='w-7 h-7 grid place-items-center  rounded-full icon shadow-xl shadow-black/40'>
                <BsCheck className='text-2xl text-white' />
              </span>
              <span className='text-lg'>Development bring</span>
            </div>
          </div>
          <button className='icon px-7 py-4 shadow-xl shadow-black/30 text-white rounded-xl text-xl mt-12'>
            Get started
          </button>
        </div>
        <div className='h-96 w-full bg-white '></div>
      </section>
    </div>
  )
}
