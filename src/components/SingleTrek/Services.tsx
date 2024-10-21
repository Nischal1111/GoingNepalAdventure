import LinedContainer from '@/shared/LinedContainer'
import SharedTitle2 from '@/shared/SharedTitle2'
import React from 'react'
import { trekProps } from './types'
import { IoCheckmarkDoneOutline } from 'react-icons/io5'
import { RxCross2 } from 'react-icons/rx'

const Services:React.FC<trekProps> = ({servicesIncluded,servicesNotIncluded}) => {
    return (
        <main>
            <SharedTitle2 title='Services'/>
            <LinedContainer>
                <div className='bg-[#06D001]/10 text-[#10C042] rounded-sm my-8 px-8 py-4 flex items-center'>
                    <h1 className='font-semibold text-2xl'>Costs included in your package.</h1>
                </div>
                <div className='flex flex-col gap-4'>
                        {servicesIncluded?.map((item,index)=>{
                            return(
                                <div key={index} className='flex items-center gap-4'>
                                    <IoCheckmarkDoneOutline size={18} className='text-green-500'/>
                                    <p>{item}</p>
                                </div>
                            )
                        })}
                </div>
                <div className='bg-[#D00101]/10 text-[#C01010] rounded-sm my-8 px-8 py-4 flex items-center'>
                    <h1 className='font-semibold text-2xl'>Costs not included in your package.</h1>
                </div>
                <div className='flex flex-col gap-4'>
                        {servicesNotIncluded?.map((item,index)=>{
                            return(
                                <div key={index} className='flex items-center gap-4'>
                                    <RxCross2 size={18} className='text-red-500'/>
                                    <p>{item}</p>
                                </div>
                            )
                        })}
                </div>
            </LinedContainer>
            
        </main>
    )
}

export default Services
