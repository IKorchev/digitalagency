/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { motion } from "framer-motion"
import { container, item } from "../../utils/motionConfigs"

const sectionData = [
  {
    imgSrc: "/ImageAndCard.svg",
    preTitle: "Schedule",
    title: "Great customer relationship starts here",
    text: "80 days around the world, we'll find a pot of gold just sitting where the rainbow's ending. Time — we'll fight against the time, and we'll fly on the white wings of the wind.",
    link: "/",
    linkText: "Learn more about publishing",
  },
  {
    imgSrc: "/ImageAndCard_2.svg",
    preTitle: "Monitor",
    title: "Introducing best mobile carousels",
    text: "Before the ship is really back. Round, round, all around the world. Round, all around the world. Round, all around the world. Round, all around the world.",
    link: "/",
    linkText: "Learn more about monitoring",
  },
]

const Section = ({ imgSrc, preTitle, title, text, link, linkText }) => {
  return (
    <motion.div
      variants={container}
      // viewport={{ once: true }}
      initial='hidden'
      whileInView='show'
      className='flex even:flex-row-reverse even: my-24'>
      <motion.div transition={{ delay: 0.2 }} variants={item} className='w-full flex justify-center'>
        <img src={imgSrc} alt='' />
      </motion.div>
      <div className='w-full flex flex-col justify-center'>
        <motion.span variants={item} className='text-accent-orange text-2xl'>
          {preTitle.toUpperCase()}
        </motion.span>
        <motion.h1 variants={item} className='text-6xl font-black text-accent-purple  mt-4'>
          {title}
        </motion.h1>
        <motion.p variants={item} className='text-xl mt-8'>
          {text}
        </motion.p>
        <Link href={link}>
          <motion.a
            variants={item}
            className='text-accent-purple text-lg cursor-pointer  mt-8 font-semibold hover:underline focus:underline'>
            {linkText} <span className='ml-5'>→</span>
          </motion.a>
        </Link>
      </div>
    </motion.div>
  )
}

const ThirdPageSection = () => {
  return (
    <section className='container px-24 py-24 mx-auto'>
      {sectionData.map((data, index) => {
        return <Section key={index} {...data} />
      })}
    </section>
  )
}

export default ThirdPageSection
