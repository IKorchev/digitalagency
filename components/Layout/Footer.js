/* eslint-disable @next/next/no-img-element */
import React from "react"
import Link from "next/link"
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"
import { BsChevronRight } from "react-icons/bs"

const FooterPageSection = () => {
  return (
    <>
      <hr className='w-2/3 mx-auto border-background-secondary' />
      <section className='p-32 mx-auto container flex justify-center '>
        <div className='grid h-48 z-10 w-full relative rounded-xl shadow-lg shadow-black/20 overflow-hidden bg-background-secondary'>
          <div className='h-full flex items-center justify-evenly '>
            <div className='flex flex-col w-2/5'>
              <h5 className='text-3xl font-bold text-accent-purple'>Subscribe to our newsletter</h5>
              <p className='mt-5 text-lg pr-12'>
                The copy warned the Little Blind Text, that where it came from it would have been rewritten.
              </p>
            </div>
            <div className='z-20 h-max flex shadow-xl shadow-black/30 '>
              <input
                type='text'
                className='text-xl px-2 text-white py-3 bg-background-secondary rounded-l-xl'
              />
              <button className='rounded-r-xl icon text-lg p-3 text-white flex items-center '>
                Discover
                <span className='icon shadow-xl p-2 shadow-black/40 rounded-full text-accent-green ml-3'>
                  <BsChevronRight className='text-xl' />
                </span>
              </button>
            </div>
          </div>
          <div className='bg-[#27283A] -skew-x-12 w-1/2 h-full  absolute top-0 -right-12'></div>
        </div>
      </section>
      <footer className='bg-background-secondary '>
        <div className='container px-12 py-12 mx-auto'>
          <div className='grid grid-cols-3 gap-12 '>
            <div className='col-span-1 w-2/3'>
              <h5 className='flex items-center text-2xl'>
                <img src='/logo.svg' alt='' />
                <span className='-ml-16 text-purple-cta'>The Next Design</span>
              </h5>
              <p className='mt-8 text-lg'>
                The copy warned the Little Blind Text, that where it came from it would have been rewritten a
                thousand times.
              </p>
              <div className='flex gap-5 mt-12'>
                <span
                  className='bg-black text-white grid 
              place-items-center text-lg h-8 w-8 rounded-lg'>
                  <FaFacebookF />
                </span>
                <span
                  className='bg-black text-white grid 
              place-items-center text-lg h-8 w-8 rounded-lg'>
                  <FaTwitter />
                </span>
                <span
                  className='bg-black text-white grid 
              place-items-center text-lg h-8 w-8 rounded-lg'>
                  <FaLinkedinIn />
                </span>
              </div>
            </div>
            <div className='col-span-2 flex justify-between pl-24'>
              <div className=''>
                <h5 className='flex items-center text-2xl text-purple-cta'>Company</h5>
                <ul className='text-text-primary text-lg space-y-3 mt-8'>
                  <li>
                    <Link href='/'>
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>Terms of use</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>How it works</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>Contact us</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className='flex items-center text-2xl text-purple-cta'>Get Help</h5>
                <ul className='text-text-primary text-lg space-y-3 mt-8'>
                  <li>
                    <Link href='/'>
                      <a>Support Center</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>24hr Service</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>Quick Chat</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className='flex items-center text-2xl text-purple-cta'>Learn More</h5>
                <ul className='text-text-primary text-lg space-y-3 mt-8'>
                  <li>
                    <Link href='/'>
                      <a>FAQ</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>Blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>Partners</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className='mt-12 border-gray-400' />
          <div className='flex justify-between mt-5'>
            <p>
              Design by{" "}
              <a href='https://arshkir.com/' rel='noreferrer ' target='_blank'>
                arshkir.com
              </a>
            </p>
            <p>
              Developed by{" "}
              <a href='https://ikorchev.com/' rel='noreferrer ' target='_blank'>
                ikorchev.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default FooterPageSection
