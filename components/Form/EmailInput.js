import React from "react"

const EmailInput = () => {
  return (
    <div className='relative'>
      <svg width='403' height='62' viewBox='0 0 403 62' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g filter='url(#filter0_i_0_10)'>
          <path
            d='M379.04 55.1616C377.451 58.809 373.851 61.1675 369.873 61.1675H10C4.47714 61.1675 0 56.6903 0 51.1675V10.1675C0 4.64463 4.47714 0.16748 10 0.16748H387.735C394.94 0.16748 399.781 7.55637 396.903 14.1616L379.04 55.1616Z'
            fill='#21212B'
          />
        </g>
        <defs>
          <filter
            id='filter0_i_0_10'
            x='0'
            y='0.16748'
            width='400.746'
            height='61'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'>
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset dx='3' />
            <feGaussianBlur stdDeviation='2.5' />
            <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
            <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0' />
            <feBlend mode='normal' in2='shape' result='effect1_innerShadow_0_10' />
          </filter>
        </defs>
      </svg>
      <input
        type='email'
        placeholder='Email address'
        className='absolute inset-2 bg-transparent pr-12 px-2 mr-5 text-white text-lg'
      />
    </div>
  )
}

export default EmailInput
