/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    y: 50,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 77,
      damping: 15,
    },
  },
}

const ThirdPageSection = () => {
  return (
    <section className='container px-24 py-24 mx-auto'>
      <motion.div
        variants={container}
        // viewport={{ once: true }}
        initial='hidden'
        whileInView='show'
        className='flex '>
        <motion.div transition={{ delay: 0.2 }} variants={item} className='w-full flex justify-center'>
          <img src='/ImageAndCard.svg' alt='' />
        </motion.div>
        <div className='w-full flex flex-col justify-center'>
          <motion.span variants={item} className='text-accent-orange text-2xl'>
            SCHEDULE
          </motion.span>
          <motion.h1 variants={item} className='text-6xl font-black text-accent-purple  mt-4'>
            Great customer relationship starts here
          </motion.h1>
          <motion.p variants={item} className='text-xl mt-8'>
            80 days around the world, we&apos;ll find a pot of gold just sitting where the rainbow&apos;s
            ending. Time — we&apos;ll fight against the time, and we&apos;ll fly on the white wings of the
            wind.
          </motion.p>
          <Link href='/'>
            <motion.a
              variants={item}
              className='text-accent-purple text-lg  mt-8 font-semibold hover:underline focus:underline'>
              Learn more about publishing <span className='ml-5'>→</span>
            </motion.a>
          </Link>
        </div>
      </motion.div>
      <motion.div
        // viewport={{ once: true }}
        variants={container}
        initial='hidden'
        whileInView='show'
        className='flex  flex-row-reverse'>
        <motion.div variants={item} className='w-full flex justify-center'>
          <img src='/ImageAndCard_2.svg' alt='' />
        </motion.div>
        <div className='w-full flex flex-col justify-center'>
          <motion.span variants={item} className='text-accent-green text-2xl'>
            MONITOR
          </motion.span>
          <motion.h1 variants={item} className='text-6xl font-black text-accent-purple  mt-4'>
            Introducing best mobile carousels
          </motion.h1>
          <motion.p variants={item} className='text-xl mt-8'>
            Before the ship is really back. Round, round, all around the world. Round, all around the world.
            Round, all around the world.
            <br />
            Round, all around the world.
          </motion.p>
          <Link href='/'>
            <motion.a
              variants={item}
              className='text-accent-purple text-lg  mt-8 font-semibold hover:underline focus:underline'>
              Learn more about monitoring <span className='ml-5'>→</span>
            </motion.a>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

export default ThirdPageSection
