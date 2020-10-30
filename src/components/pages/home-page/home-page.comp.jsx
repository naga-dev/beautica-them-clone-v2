import React from 'react'
import HomePageCarousel from '../../layout/home-carousel/home-carousel.comp'
import FluidBanner from '../../utils/fluid-banner/fluid-banner.comp'

const HomePage = () => {
  return (
    <div className="container">
      <HomePageCarousel />
      <FluidBanner />
    </div>
  )
}

export default HomePage
