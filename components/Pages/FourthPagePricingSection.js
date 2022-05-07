import { useState } from "react"
import AnimatedDiv from "../AnimatedDiv"

const FourthPagePricingSection = () => {
  const [value, setValue] = useState(4)

  return (
    <section className='bg-background-secondary flex justify-center py-24 '>
      <AnimatedDiv className='relative flex flex-col bg-[#2E2E3E]  shadow-black/20 shadow-xl items-center  p-12 w-2/5 rounded-xl text-center'>
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
      </AnimatedDiv>
    </section>
  )
}

export default FourthPagePricingSection
