import SharedTitle2 from '@/shared/SharedTitle2'
import React from 'react'
import { trekProps } from './types'
import LinedContainer from '@/shared/LinedContainer'
import { Button } from '@nextui-org/react'
import { IoIosArrowDown } from 'react-icons/io'
const TrekOverView:React.FC<trekProps> = ({title,desc}) => {
    return (
        <>
        <main className='w-full my-16'>
            <SharedTitle2 title={`${title} Overview`}/>
            <LinedContainer>
                <p className='text-base mt-8 text-justify'>{desc}</p>
                <Button size='sm' className='w-fit rounded-md flex mt-4 bg-transparent -left-2 text-sm font-semibold text-primary ' endContent={<IoIosArrowDown className='text-primary' size={18}/>}>View All</Button>
            </LinedContainer>
        </main>
        </>
    )
}

export default TrekOverView
