import React from "react"

const CompaniesList = ({ images }) => {
  return (
    <div className='w-full container mx-auto mt-3 py-12 flex justify-between items-center '>
      <span className='border-t border-text-primary pt-3 '>Proud partner at Hubspot & Segment</span>
      <div className='flex gap-32'>
        {images.map((item, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={item} alt={item} src={`/${item}_Icon.svg`} className='h-7' />
        ))}
      </div>
    </div>
  )
}

export default CompaniesList
