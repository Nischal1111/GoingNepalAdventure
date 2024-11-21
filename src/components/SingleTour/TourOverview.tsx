import SharedTitle2 from '@/shared/SharedTitle2'
import React from 'react'
import LinedContainer from '@/shared/LinedContainer'
import { Button } from '@nextui-org/react'
import { IoIosArrowDown } from 'react-icons/io'
import { Tour } from '../SingleTrek/types'

const TourOverView:React.FC<Tour> = ({name,overview}) => {
    return (
        <>
        <main className='w-full my-16'>
            <SharedTitle2 title={`${name} Overview`}/>
            <LinedContainer>
                <p className='text-base mt-8 text-justify'>{overview}</p>
                <Button size='sm' className='w-fit rounded-md flex mt-4 bg-transparent -left-2 text-sm font-semibold text-primary ' endContent={<IoIosArrowDown className='text-primary' size={18}/>}>View All</Button>
            </LinedContainer>
        </main>
        </>
    )
}

export default TourOverView
