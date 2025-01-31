import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../carosuel/carosuel.css'
import { useState,useEffect } from "react";

import acer_logo from '../assets/acer_logo.jpg';
import asus_logo from '../assets/asus_logo.png';
import brother_logo from '../assets/brother_logo.png';
import canon_logo from '../assets/canon_logo.png';
import cp_logo from '../assets/cp_logo.jpg';
import dell from '../assets/dell.png';
import epson_logo from '../assets/epson_logo.jpg';
import hikvision_logo from '../assets/hikvision_logo.png';
import hp_logo from '../assets/hp_logo.png';
import lenovo_logo from '../assets/lenovo_logo.png';
import lg_logo from '../assets/lg_logo.png';
import samsung_logo from '../assets/samsung_logo.png';

const HomeCarousel = () => {
  const [slidesToShow, setSlidesToShow] = useState(5);
  const partnerLogos = [
    acer_logo,
    asus_logo,
    cp_logo,
    hp_logo,
    lenovo_logo,
    samsung_logo,
    hikvision_logo,
    epson_logo,
    canon_logo,
    brother_logo,
    dell,lg_logo
  ];
  

  // Update slidesToShow based on screen size
  const updateSlidesToShow = () => {
    if (window.innerWidth >= 374) {
      setSlidesToShow(1); // Show 2 slides for smaller screens
    }
    if (window.innerWidth <= 600) {
      setSlidesToShow(2); // Show 2 slides for smaller screens
    } else if (window.innerWidth <= 768) {
      setSlidesToShow(3); // Show 3 slides for tablets
    } else if (window.innerWidth <= 1024) {
      setSlidesToShow(4); // Show 4 slides for larger tablets
    } else {
      setSlidesToShow(5); // Show 5 slides for larger screens
    }
  };

  // Use effect hook to update slidesToShow on window resize
  useEffect(() => {
    updateSlidesToShow(); // Set the initial slidesToShow based on screen size

    // Add event listener for window resize to update slidesToShow
    window.addEventListener('resize', updateSlidesToShow);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateSlidesToShow);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: slidesToShow, // Use the slidesToShow state here
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  return (
    <div className="slider-container">
      <h2 className="section-header">Explore the Best Brands in Tech</h2>
      <Slider {...settings}>
        {partnerLogos.map((logo, index) => (
          <div key={index} className="carousel-item">
            <img
              className="carousel-logo"
              src={logo}
              alt={`logo-${index}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );

    
   
   
  
};

export default HomeCarousel; 