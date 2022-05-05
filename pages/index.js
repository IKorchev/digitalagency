/* eslint-disable @next/next/no-img-element */
import Ball from "../public/LP_Ball.svg"
import Link from "next/link"
import {
  BsFillBarChartFill,
  BsClockHistory,
  BsStars,
  BsFillStarFill,
  BsCheck,
  BsStack,
  BsChevronLeft,
  BsChevronRight,
  BsLightbulbFill,
} from "react-icons/bs"
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"
import { IoMdSettings } from "react-icons/io"
import { FaChartPie } from "react-icons/fa"
import { BiSync } from "react-icons/bi"
import Form from "../components/Form/Form"
import Navbar from "../components/Navbar"
import CompaniesList from "../components/CompaniesList"
import { useState } from "react"

const images = ["Slack", "Amazon", "Woo", "Undies", "Sitepoint"]

const data = [
  {
    icon: <BsStack className='text-[3rem] text-text-primary' />,
    title: "Web Design",
    description: "Stack is a platform for developers to build and share their skills.",
    link: "/stack",
  },
  {
    icon: <BsLightbulbFill className='text-[3rem] text-text-primary' />,
    title: "Ad-Creatives",
    description: "Alphabet Village and the subline of her own road to success.",
    link: "/stack",
  },
  {
    icon: <IoMdSettings className='text-[3rem] text-text-primary' />,
    title: "Automation",
    description: "Little Blind Text should turn around and return to success.",
    link: "/stack",
  },
  {
    icon: <FaChartPie className='text-[3rem] text-text-primary' />,
    title: "Infographics",
    description: "Nothing the copy said could convince her to return to success.",
    link: "/stack",
  },
]

const cardsData = [
  {
    src: "/Person_3.png",
    name: "Robin Avala Doe",
    description:
      "From the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
  },
  {
    src: "/Person_2.png",
    name: "John De marli",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
  },
  {
    src: "/Person_1.png",
    name: "Rowhan Smith",
    description:
      "When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline ",
  },
]

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
        <div className='flex flex-col justify-center'>
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
          <button className='icon inline-flex w-max px-7 py-4 shadow-xl shadow-black/30 text-white rounded-xl text-xl mt-12'>
            Get started
          </button>
        </div>
        <div className='w-full mx-auto px-48'>
          <div className='grid grid-cols-2  gap-12 place-items-center'>
            {data.map(({ title, description, icon, link }) => {
              return (
                <div
                  key={title}
                  className='w-72 h-72 space-y-4  bg-background-secondary rounded-xl py-8 px-12'>
                  {icon}
                  <h3 className='text-xl text-accent-purple font-semibold'>{title}</h3>
                  <p className='text-base'>{description}</p>
                  <Link href={link}>
                    <a className='text-accent-purple inline-flex'>LEARN MORE</a>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section className='py-36'>
        <div>
          <h1 className='text-center text-5xl font-bold text-accent-purple'>What our clients say</h1>
          <p className='text-center mt-5'>Things that make it the best place to start trading</p>
        </div>
        <div className='mt-24 grid grid-cols-3 gap-5 px-12'>
          {cardsData.map((item) => (
            <div
              key={item.src}
              className='text-center space-y-3 px-12 relative mt-12 shadow-lg  shadow-black/30 
              justify-center flex-grow py-6 rounded-lg bg-background-secondary'>
              <div className='h-32 w-32 absolute -top-12 left-1/2 -translate-x-1/2'>
                <img src={item.src} className='w-full' alt='' />
              </div>
              <div className=' absolute top-10 left-24'>
                <img src='/Quote.svg' className='w-full' alt='' />
              </div>
              <div className='flex pt-5 justify-center'>
                {[1, 2, 3, 4, 5].map((item, index) => {
                  return <BsFillStarFill key={index} className='text-text-primary text-xl' />
                })}
              </div>
              <h4 className='text-accent-purple text-lg font-semibold'>{item.name}</h4>
              <p className='text-center text-lg mx-auto leading-relaxed pt-4 '>{item.description}</p>
            </div>
          ))}
        </div>
        <div className='mt-12 gap-5 flex justify-center'>
          <button className='disabled  h-12 w-12 rounded-full grid place-items-center'>
            <BsChevronLeft className='text-xl' />
          </button>
          <button className='icon shadow-lg shadow-black/40 h-12 w-12 rounded-full grid place-items-center'>
            <BsChevronRight className='text-xl text-white' />
          </button>
        </div>
      </section>
      <hr className='w-2/3 mx-auto border-background-secondary' />
      <section className='p-32 mx-auto container flex justify-center '>
        <div className='grid h-48 z-10 w-full relative rounded-xl shadow-lg shadow-black/20 overflow-hidden bg-background-secondary'>
          <div className='h-full flex items-center justify-evenly '>
            <div className='flex flex-col w-2/5'>
              <h5 className='text-3xl font-bold text-accent-purple'>Subscribe to our newsletter</h5>
              <p className='mt-5 text-lg pr-12'>
                The copy warned the Little Blind Text, that where it came from it would have been rewritten.
              </p>
            </div>
            <div className='z-20 h-max flex shadow-xl shadow-black/30 '>
              <input
                type='text'
                className='text-xl px-2 text-white py-3 bg-background-secondary rounded-l-xl'
              />
              <button className='rounded-r-xl icon text-lg p-3 text-white flex items-center '>
                Discover
                <span className='icon shadow-xl p-2 shadow-black/40 rounded-full text-accent-green ml-3'>
                  <BsChevronRight className='text-xl' />
                </span>
              </button>
            </div>
          </div>
          <div className='bg-[#27283A] -skew-x-12 w-1/2 h-full  absolute top-0 -right-12'></div>
        </div>
      </section>
      <footer className='bg-background-secondary '>
        <div className='container px-12 py-12 mx-auto'>
          <div className='grid grid-cols-3 gap-12 '>
            <div className='col-span-1 w-2/3'>
              <h5 className='flex items-center text-2xl'>
                <img src='/logo.svg' alt='' />
                <span className='-ml-16 text-purple-cta'>The Next Design</span>
              </h5>
              <p className='mt-8 text-lg'>
                The copy warned the Little Blind Text, that where it came from it would have been rewritten a
                thousand times.
              </p>
              <div className='flex gap-5 mt-12'>
                <span
                  className='bg-black text-white grid 
              place-items-center text-lg h-8 w-8 rounded-lg'>
                  <FaFacebookF />
                </span>
                <span
                  className='bg-black text-white grid 
              place-items-center text-lg h-8 w-8 rounded-lg'>
                  <FaTwitter />
                </span>
                <span
                  className='bg-black text-white grid 
              place-items-center text-lg h-8 w-8 rounded-lg'>
                  <FaLinkedinIn />
                </span>
              </div>
            </div>
            <div className='col-span-2 flex justify-between pl-24'>
              <div className=''>
                <h5 className='flex items-center text-2xl text-purple-cta'>Company</h5>
                <ul className='text-text-primary text-lg space-y-3 mt-8'>
                  <li>
                    <Link href='/'>
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>Terms of use</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>How it works</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>Contact us</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className='flex items-center text-2xl text-purple-cta'>Get Help</h5>
                <ul className='text-text-primary text-lg space-y-3 mt-8'>
                  <li>
                    <Link href='/'>
                      <a>Support Center</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>24hr Service</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>Quick Chat</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className='flex items-center text-2xl text-purple-cta'>Learn More</h5>
                <ul className='text-text-primary text-lg space-y-3 mt-8'>
                  <li>
                    <Link href='/'>
                      <a>FAQ</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>Blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>Partners</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className='mt-12 border-gray-400' />
          <div className='flex justify-between mt-5'>
            <p>
              Design by{" "}
              <a href='https://arshkir.com/' rel='noreferrer ' target='_blank'>
                arshkir.com
              </a>
            </p>
            <p>
              Developed by{" "}
              <a href='https://ikorchev.com/' rel='noreferrer ' target='_blank'>
                ikorchev.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
