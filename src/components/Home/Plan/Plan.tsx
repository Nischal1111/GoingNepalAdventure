import SharedTitle from '@/shared/SharedTitle'
import React from 'react'
import PlanCard from './PlanCard'

const Plan = () => {
  const planCards=[
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
      id: 2,
      title: "Activities",
      img: "/assets/activities.avif",
      button: "View all activities",
    }
  ]
  const mountainbg="/assets/mount.png"
  return (
    <div className='w-full px-32' style={{ backgroundImage: `url(${mountainbg})`,backgroundSize:"contain" }}>
        <SharedTitle title='Plan with us'/>
        <section className='w-full flex gap-16 items-center relative justify-center mt-24 mb-16'>
          {planCards.map((plan,index)=>{
            return (
              <PlanCard
              key={plan.id}
              {...plan}
              className={index === 1 ? 'transform -translate-y-8' : ''}
            />
            )
          })}
        </section>
    </div>
  )
}

export default Plan
