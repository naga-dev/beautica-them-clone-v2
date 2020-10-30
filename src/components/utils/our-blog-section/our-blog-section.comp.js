import React from "react";
import OurBlogItem from "../our-blog-item/our-blog-item.comp";
import BlogItem1 from "../../../assets/images/blogs/blog.jpg";
import BlogItem2 from "../../../assets/images/blogs/blog1.jpg";

// Styles
import "./our-blog-section.styles.scss";

const OurBlogSection = () => {
  return (
    <div className="our-blog-section-wrapper container">
      <div className="our-blog-section-content">
        <div className="section-title">
          <h2>
            <span>from our blog</span>
          </h2>
        </div>
        <div className="item-wrapper">
          <OurBlogItem
            blogImg={BlogItem1}
            postedAt="Posted by ThemeVale on 31st Aug 2017"
            title="Pellentesque posuere morci…"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus leo, elementum in malesuada an darius ut augue. Cras sit amet lectus et justo feugiat euismod sed non erat. Nulla no..."
          />

          <OurBlogItem
            blogImg={BlogItem2}
            postedAt="Posted by ThemeVale on 5th Jul 2017"
            title="Loremous Cosmopolis"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus leo, elementum in malesuada an darius ut augue. Cras sit amet lectus et justo feugiat euismod sed non erat. Nulla..."
          />
        </div>
      </div>
    </div>
  );
};

export default OurBlogSection;
