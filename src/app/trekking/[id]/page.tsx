import SingleTrek from '@/components/SingleTrek'
import React from 'react'

const page = ({params}:{params:{id:string}}) => {
    return (
        <main>
            <SingleTrek id={params.id}/>
        </main>
    )
}

export default page
