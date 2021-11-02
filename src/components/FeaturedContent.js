import React, {useState, useEffect} from 'react';
import useFetchData from '../utils/hooks/useFetchData';
import { WZL_API } from '../utils/constants';
import Loading from '../components/Loading';
import Error from '../components/Error';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import  styles from '../styles/FeaturedContent.module.css'
// import Swiper core and required modules
import SwiperCore, {Navigation} from 'swiper';
  
// install Swiper modules
SwiperCore.use([Navigation]);

const FeaturedContent = () => {
    //fetching data
    const url = `${WZL_API.API_BASE_URL}/documents/search?ref=${WZL_API.API_ID}&q=${WZL_API.BANNERS_URL}`;
    const [shouldCall, setShouldCall] = useState(false);
    const { data: banners, isError, isLoading } = useFetchData(url, shouldCall);
    
    useEffect(() => {    
      setShouldCall(true); 
  }, []);

    if (isLoading) {
      return <Loading />
    }

    if (isError) {
      return <Error />
    }


    return (
        <>
        {!isLoading ? (
           <Swiper spaceBetween={50} slidesPerView={1} loop={true} centeredSlides>
           {
             banners.results.map((banner, idx) => {
               return (
                 <SwiperSlide key={banner.id} className={styles["swiper-slide"]}>
                 <img src={banner.data.main_image.url} alt={banner.data.title} /> 
                 </SwiperSlide> 
               )
             })}
           </Swiper>
         ) : 
             <h2>Loading...</h2>
         }
       
      </>
    )
    
}

export default FeaturedContent;