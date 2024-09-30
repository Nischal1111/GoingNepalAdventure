import { Divider } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import { BsDash } from 'react-icons/bs'

const HeroSection = () => {
  return (
    <main className='relative text-white'>
        <Image src="/assets/hero.jpeg" alt='hero-section' height={1000} width={1000} className='object-cover h-[90vh] w-screen'/>
        <div className='px-20 flex gap-8 z-[1000] absolute top-[20%]'>
            <div className='relative h-[50vh] flex gap-1'>
                <div className='bg-white w-[1px] h-full'></div>
                <div className='bg-white w-[1px] h-full relative top-3'></div>
            </div>
            <div className='text-2xl relative top-1/3  text-white flex flex-col gap-4'>
                <div className='flex items-center gap-4'>
                    <h1 className='text-xl'>Plan your trip</h1>
                    <div className='bg-white h-[2px] w-32'></div>
                </div>
                <h1 className='font-semibold text-4xl tracking-wide w-[90%]'>The best views comes from the hardest climbs.</h1>
            </div>
        </div>
    </main>
  )
}

export default HeroSection
