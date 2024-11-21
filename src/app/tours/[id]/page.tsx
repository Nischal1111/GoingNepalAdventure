import SingleTour from '@/components/SingleTour'
import React from 'react'

const page = ({params}:{params:{id:string}}) => {
    return (
        <main>
            <SingleTour id={params.id}/>
        </main>
    )
}

export default page
