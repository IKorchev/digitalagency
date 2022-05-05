import { AiOutlineArrowRight } from "react-icons/ai"

const FormButton = ({ onSubmit }) => {
  return (
    <div className='relative'>
      <svg width='156' height='62' viewBox='0 0 156 62' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M15.9194 8.57153C18.1435 3.46761 23.1814 0.16748 28.7489 0.16748H142.005C149.734 0.16748 156 6.43311 156 14.1621V47.1728C156 54.9019 149.734 61.1675 142.005 61.1675H14.364C4.28054 61.1675 -2.49363 50.8261 1.53454 41.5822L15.9194 8.57153Z'
          fill='url(#paint0_linear_0_7)'
        />
        <defs>
          <linearGradient
            id='paint0_linear_0_7'
            x1='74.5'
            y1='0.16748'
            x2='74.5'
            y2='61.1675'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#6D6D8A' />
            <stop offset='1' stopColor='#37374A' />
          </linearGradient>
        </defs>
      </svg>
      <button type='submit' onSubmit={onSubmit} className='absolute grid place-items-center inset-0'>
        <AiOutlineArrowRight className='-rotate-45 ml-3 text-3xl' />
      </button>
    </div>
  )
}

export default FormButton
