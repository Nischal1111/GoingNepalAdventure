import SingleTrek from '@/components/SingleTrek'
import React from 'react'
export async function generateStaticParams() {
  // Return an empty array so no pages are pre-rendered
  return [];
}

const page = ({params}:{params:{id:string}}) => {
    return (
        <main>
            <SingleTrek id={params.id}/>
        </main>
    )
}

export default page
