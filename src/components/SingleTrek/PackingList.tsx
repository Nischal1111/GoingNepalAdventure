import LinedContainer from '@/shared/LinedContainer'
import SharedTitle2 from '@/shared/SharedTitle2'
import React from 'react'
import { trekProps } from './types'
import Dot from '@/utility/Dot'
import { CiCircleInfo } from 'react-icons/ci'

const PackingList:React.FC<trekProps> = ({trekkingEquipment}) => {
    return (
        <main className='w-full my-16'>
            <SharedTitle2 title='Packing List'/>
            <LinedContainer>
                <p className='text-justify w-[90%] my-8'>Here is a list of what you might want to pack for the Everest base camp hike. Please take this as a starting point. You will need layers of warmer clothing during the winter.
                    We provide a 75 liter duffel bag for you to use for the trek. It will be given to you during your pre-trip meeting in Kathmandu. The duffle bag is yours to keep. Also, you can rent sleeping bag and down jacket with us at the additional fee of USD 35 for each once you are in Kathmandu.
                </p>
                <div className='grid grid-cols-2 gap-y-10'>
                    {trekkingEquipment?.map((item,index)=>{
                        const Icon = item.icon
                        return(
                                <div key={index} className='flex flex-col gap-4'>
                                    <div className='flex gap-4 items-center'>
                                        <div className='rounded-full flex items-center justify-center p-2 size-[2rem] bg-primary/50 text-white'>
                                            <Icon size={22}/>
                                        </div>
                                        <h1 className='font-semibold text-xl'>{item?.category}</h1>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        {item?.items?.map((item,index)=>{
                                            return(
                                                <div key={index} className='flex gap-2 items-center'>
                                                    <Dot/>
                                                    <p>{item}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                        )
                    })}
                    
                </div>
            </LinedContainer>
            <div className='flex flex-col text-white gap-2 justify-start items-center bg-primary/60 py-4 px-8 my-12 w-full'>
                <div className='flex gap-2 self-start items-center'>
                    <CiCircleInfo size={24} className='text-white'/>
                    <h1 className='font-bold text-lg'>Note</h1>
                </div>
                <p>Some clothing, especially form-fitting, figure-hugging items made of elastic material (like yoga pants), may offend locals. Therefore, if you choose to wear these clothes for comfort, please make sure to wear something over them.</p>
            </div>
        </main>
    )
}

export default PackingList
