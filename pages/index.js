import Ball from "../public/LP_Ball.svg"
import { BsClockHistory, BsStars } from "react-icons/bs"
import Form from "../components/Form/Form"
import Navbar from "../components/Navbar"
import CompaniesList from "../components/CompaniesList"

const images = ["Slack", "Amazon", "Woo", "Undies", "Sitepoint"]

export default function Home() {
  return (
    <div className='bg-background-primary'>
      <Navbar />
      <div className='bg-background-primary overflow-x-hidden container mx-auto mt-12 pt-12 '>
        {/* Navbar */}
        {/* Landing Page */}
        <div className=' flex mx-auto'>
          <div className='flex-grow w-full '>
            <p className='text-purple-cta text-xl mb-2 -ml-1'>
              <BsStars className='inline' /> Jump start your growth
            </p>
            <h1 className='text-7xl font-bold leading-tight'>
              We boost the growth for <span className='text-purple-cta'>Startup</span> to Fortune 500
              Companies
              <span className='inline-flex text-6xl rounded-full ml-5 p-1 icon shadow-lg shadow-black/50'>
                <BsClockHistory className='inline text-gray-900' />
              </span>
            </h1>
            <p className='text-2xl mt-5 leading-relaxed lg:w-3/5'>
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
            className='w-full h-[45rem] relative -mr-12'></div>
        </div>
        <CompaniesList images={images} />
      </div>
    </div>
  )
}
