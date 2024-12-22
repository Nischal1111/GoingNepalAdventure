import Breadcrumb from '@/shared/BreadCrumbs'
import React from 'react'
import MainSection from './MainSection'

const AboutUs = () => {
    return (
        <main className='w-full'>
            <section className='relative lg:h-[70vh] h-[50vh] w-full' style={{background:"url('/assets/aboutBG.jpg')",backgroundSize:"cover",backgroundAttachment:"fixed"}}>
                <div className='absolute inset-0 bg-black/20 w-full'></div>
                <Breadcrumb title={"About Us"} link='/about-us'/>
            </section>
            <MainSection/>
        </main>
    )
}

export default AboutUs
