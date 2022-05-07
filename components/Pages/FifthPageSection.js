import React from "react"
import { BsCheck, BsStack, BsLightbulbFill } from "react-icons/bs"
import Link from "next/link"
import { IoMdSettings } from "react-icons/io"
import { FaChartPie } from "react-icons/fa"

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

const FifthPageSection = () => {
  return (
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
              <div key={title} className='w-72 h-72 space-y-4  bg-background-secondary rounded-xl py-8 px-12'>
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
  )
}

export default FifthPageSection
