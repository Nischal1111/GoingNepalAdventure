import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import SearchSection from './HeroSection/SearchSection';
import Plan from './Plan/Plan';
import WhyGoingNepal from './WhyGoingNepal';
import TrekkingDeals from './TrekkingDeals';

const MainHome = () => {
  return (
    <div>
      <HeroSection/>
      <Plan/>
      <WhyGoingNepal/>
      <TrekkingDeals/>
    </div>
  )
}

export default MainHome
