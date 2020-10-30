import React from "react";
import HomePageCarousel from "../../layout/home-carousel/home-carousel.comp";
import PageSection from "../../layout/page-section/page-section.comp";
import FluidBanner from "../../utils/fluid-banner/fluid-banner.comp";
import FollowUs from "../../utils/follow-us/follow-us.comp";
import HomeCustomBanner from "../../utils/home-custom-banner/home-custom-banner.comp";
import OurBlogSection from "../../utils/our-blog-section/our-blog-section.comp";

const HomePage = () => {
  return (
    <>
      <HomePageCarousel />
      <FluidBanner />
      <PageSection
        title="just arrived"
        subTitle="Magnis De Darturien Eros Laciniados De Cosmopolis Dinterdum"
      />
      <HomeCustomBanner />
      <PageSection
        title="features products"
        subTitle="Magnis De Darturien Eros Laciniados De Cosmopolis Dinterdum"
      />
      <PageSection
        title="editor's picks"
        subTitle="Magnis De Darturien Eros Laciniados De Cosmopolis Dinterdum"
      />
      <OurBlogSection />
      <FollowUs />
    </>
  );
};

export default HomePage;
