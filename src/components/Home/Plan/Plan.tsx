import SharedTitle from '@/shared/SharedTitle';
import React from 'react';
import PlanCard from './PlanCard';

const Plan = () => {
  const planCards = [
    {
      id: 1,
      title: "Trekking",
      img: "/assets/trek.jpeg",
      button: "View all treks",
      link:"/trekking"
    },
    {
      id: 2,
      title: "Tours and Trips",
      img: "/assets/tour.avif",
      button: "View all tours",
      link:"/tours"
    },
    {
      id: 3,
      title: "Activities",
      img: "/assets/activities.avif",
      button: "View all activities",
      link:"/activities"
    }
  ];
  
  const mountainbg = "/assets/mountBG.png";
  
  return (
    <div className='relative w-full lg:px-32 px-4 lg:py-12 py-4 overflow-hidden'>
      <div 
        className='absolute inset-0 z-0'
        style={{
          backgroundImage: `url(${mountainbg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          opacity: 0.5,
        }}
      ></div>
      <div className='relative z-10'>
        <SharedTitle title='Plan with us' subTitle='Plan with us'/>
        <section className='w-full flex flex-col lg:flex-row lg:gap-16 gap-4 items-center relative justify-center lg:mt-24 mt-12 mb-16'>
          {planCards.map((plan, index) => {
            return (
              <PlanCard
                key={plan.id}
                {...plan}
                className={index === 1 ? 'transform lg:-translate-y-8 -translate-y-0' : ''}
              />
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default Plan;