/* eslint-disable @next/next/no-img-element */
import React from "react"
import { BsFillStarFill, BsChevronLeft, BsChevronRight } from "react-icons/bs"

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
  



const SixthPageSection = () => {
  return (
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
        <button disabled className='disabled  h-12 w-12 rounded-full grid place-items-center'>
          <BsChevronLeft className='text-xl' />
        </button>
        <button className='icon shadow-lg shadow-black/40 h-12 w-12 rounded-full grid place-items-center'>
          <BsChevronRight className='text-xl text-white' />
        </button>
      </div>
    </section>
  )
}

export default SixthPageSection
