/* eslint-disable @next/next/no-img-element */

import Navbar from "../components/Layout/Navbar"
import FooterPageSection from "../components/Layout/Footer"
import CompaniesList from "../components/CompaniesList"
import {
  ThirdPageSection,
  FourthPagePricingSection,
  SecondPageSection,
  FifthPageSection,
  SixthPageSection,
  LandingPageSection,
} from "../components/Pages"

const images = ["Slack", "Amazon", "Woo", "Undies", "Sitepoint"]

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
      <CompaniesList images={images} />
      <SecondPageSection />
      <ThirdPageSection />
      <FourthPagePricingSection />
      <FifthPageSection />
      <SixthPageSection />
      <FooterPageSection />
    </div>
  )
}
