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
    },
    {
      id: 2,
      title: "Tours and Trips",
      img: "/assets/tour.avif",
      button: "View all tours",
    },
    {
      id: 3,
      title: "Activities",
      img: "/assets/activities.avif",
      button: "View all activities",
    }
  ];
  
  const mountainbg = "/assets/mountBG.png";
  
  return (
    <div className='relative w-full px-32 py-12 overflow-hidden'>
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
        <SharedTitle title='Plan with us' />
        <section className='w-full flex gap-16 items-center relative justify-center mt-24 mb-16'>
          {planCards.map((plan, index) => {
            return (
              <PlanCard
                key={plan.id}
                {...plan}
                className={index === 1 ? 'transform -translate-y-8' : ''}
              />
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default Plan;