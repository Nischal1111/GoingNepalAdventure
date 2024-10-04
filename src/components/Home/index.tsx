import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import Plan from './Plan/Plan';
import WhyGoingNepal from './WhyGoingNepal';
import TrekkingDeals from './TrekkingDeals';
import Journey from './Journey';
import Trips from './Trips';
import Activities from './Activities';
import Blogs from './Blogs';
import Footer from '@/shared/Footer';

const MainHome = () => {
  return (
    <div>
      <HeroSection/>
      <Plan/>
      <WhyGoingNepal/>
      <TrekkingDeals/>
      <Journey/>
      <Trips/>
      <Activities/>
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default MainHome
