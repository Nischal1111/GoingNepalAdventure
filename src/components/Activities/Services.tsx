import LinedContainer from '@/shared/LinedContainer'
import SharedTitle2 from '@/shared/SharedTitle2'
import React from 'react'
import { IoCheckmarkDoneOutline } from 'react-icons/io5'

interface Props{
    servicesIncluded:string[],
}
const Services:React.FC<Props> = ({servicesIncluded}) => {
    return (
        <main>
            <SharedTitle2 title='Services'/>
            <LinedContainer>
                <div className='bg-[#06D001]/10 text-[#10C042] rounded-sm my-8 lg:px-8 px-4 py-4 flex items-center'>
                    <h1 className='font-semibold lg:text-2xl text-lg'>Costs included in your package.</h1>
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
            </LinedContainer>
            
        </main>
    )
}

export default Services
