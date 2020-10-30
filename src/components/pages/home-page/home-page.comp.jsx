import React from 'react'
import HomePageCarousel from '../../layout/home-carousel/home-carousel.comp'
import PageSection from '../../layout/page-section/page-section.comp'
import FluidBanner from '../../utils/fluid-banner/fluid-banner.comp'

const HomePage = () => {
  return (
    <div className="container">
      <HomePageCarousel />
      <FluidBanner />
      <PageSection title="just arrived" subTitle="Magnis De Darturien Eros Laciniados De Cosmopolis Dinterdum" />
    </div>
  )
}

export default HomePage
