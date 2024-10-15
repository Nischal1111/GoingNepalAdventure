import SharedTitle2 from '@/shared/SharedTitle2'
import React from 'react'
import { trekProps } from './types'
import LinedContainer from '@/shared/LinedContainer'
import Dot from '@/utility/Dot'

const TrekHighLights:React.FC<trekProps> = ({title,trekHighlights}) => {
  return (
    <main className='w-full my-16'>
        <SharedTitle2 title={`${title} Highlights`}/>
        <LinedContainer>
            <div className='mt-8'>
                {trekHighlights?.map((item,index)=>{
                    return(
                        <div key={index} className='flex mt-4 gap-4 items-center'>
                            <Dot/>
                            <p className='text-base  text-justify font-semibold'>{item}</p>
                        </div>
                    )
                })}
            </div>
        </LinedContainer>
    </main>
  )
}

export default TrekHighLights
