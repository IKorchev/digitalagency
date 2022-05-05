/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import React from "react"

const Navbar = () => {
  return (
    <nav role='navigation' className='container flex justify-between mx-auto  py-4'>
      <Link href='/'>
        <a className='flex items-center'>
          <img src='/logo.svg' alt='Brand Logo' />
          <span className='-ml-12 text-purple-cta text-5xl focus:ring'>tnd.</span>
        </a>
      </Link>
      <div className='flex gap-5'>
        <Link href='/'>
          <a className='nav-link'>About Us</a>
        </Link>
        <Link href='/'>
          <a className='nav-link'>Our Service</a>
        </Link>
        <Link href='/'>
          <a className='nav-link'>The Team</a>
        </Link>
        <Link href='/'>
          <a className=' nav-link'>Portfolio</a>
        </Link>
        <Link href='/'>
          <a className='ml-12 icon px-4 py-2 flex justify-center items-center text-white rounded-xl  shadow-lg font-semibold hover:text-gray-300 focus:text-gray-300'>
            Get In Touch
          </a>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
