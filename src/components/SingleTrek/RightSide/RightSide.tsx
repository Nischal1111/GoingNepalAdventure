"use client"
import React from 'react'
import { trekProps } from '../types'
import { Avatar, Button } from '@nextui-org/react'
import { rowdies } from '@/utility/font'

const RightSide:React.FC<trekProps> = ({price}) => {
    return (
        <>
            <div className='flex flex-col sticky top-12 px-8 py-2 z-[100]'>
                <div className='custom-right bg-white rounded-sm pt-6 pb-8 flex flex-col items-center justify-center gap-4'>
                    <h1 className='text-3xl font-bold'>{price} <span className='text-gray-600 text-lg font-light'>/ person</span></h1>
                    <Button className='bg-primary text-white px-12 rounded-sm'>Get a trip quote</Button>
                    <Button className='bg-transparent border hover:bg-primary hover:text-white border-primary px-12 rounded-sm'>Customize trek</Button>
                </div>
            </div>
            <div className='px-8'>
                <div className='bg-white mt-4 rounded-sm custom-right px-8  flex flex-col gap-4 items-center justify-center py-4'>
                    <h1 className={`${rowdies.className} text-2xl`}>Speak to expert</h1>
                        <div className="flex -gap-2 items-center my-2">
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" size='lg' className='-mr-2'/>
                            <Avatar  src="https://i.pravatar.cc/150?u=a04258a2462d826712d" className='w-20 h-20 text-large z-[10]'/>
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size='lg' className='-ml-2'/>
                        </div>
                    <p className='flex gap-2 items-center font-semibold text-sm'><span className='text-gray-500 text-light'>Whatsapp</span>+977 98757382933</p>
                </div>
            </div>
        </>
    )
}

export default RightSide
