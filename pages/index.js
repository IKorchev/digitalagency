/* eslint-disable @next/next/no-img-element */

import Navbar from "../components/Layout/Navbar"
import FooterPageSection from "../components/Layout/Footer"
import {
  ThirdPageSection,
  FourthPagePricingSection,
  SecondPageSection,
  FifthPageSection,
  SixthPageSection,
  LandingPageSection,
} from "../components/Pages"


export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url("/LP_Blob.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 0",
      }}
      className='bg-background-primary'>
      <Navbar />
      <LandingPageSection />

      <SecondPageSection />
      <ThirdPageSection />
      <FourthPagePricingSection />
      <FifthPageSection />
      <SixthPageSection />
      <FooterPageSection />
    </div>
  )
}
