import React from 'react';
import dataSlider from '../mocks/en-us/featured-banners.json';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import  styles from '../styles/FeaturedContent.module.css'
// import Swiper core and required modules
import SwiperCore, {
    Navigation
  } from 'swiper';
  
// install Swiper modules
SwiperCore.use([Navigation]);

const FeaturedContent = () => {

    const featuredBanners = dataSlider.results;


    return (
        <Swiper
        navigation={true}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        centeredSlides
        >

        {featuredBanners.map(banner => 
            <SwiperSlide key={banner.id} className={styles["swiper-slide"]}>
            
            <img src={banner.data.main_image.url} alt={banner.data.title} />
           
            </SwiperSlide>
        )}
            
        </Swiper>
    )
    
}

export default FeaturedContent;