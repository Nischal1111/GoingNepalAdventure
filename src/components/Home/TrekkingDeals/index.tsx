import SharedTitle from '@/shared/SharedTitle'
import React from 'react'
import CardSlider from './CardSlider'


const TrekkingDeals = () => {
    

    return (
        <main className='my-12'>
            <SharedTitle title='Popular Treks' subTitle='Best Selling Packages'/>
            <CardSlider/>
        </main>
    )
}

export default TrekkingDeals
