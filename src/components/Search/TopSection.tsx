import React from 'react'

interface queryProps{
    query:string | null
    total:number|null
}
const TopSection:React.FC<queryProps>= ({query,total}) => {
    return (
        <main className='flex flex-col lg:gap-8 gap-6'>
            <section className='flex flex-col gap-2'>
                <h1 className='lg:text-2xl text-xl font-bold'>Showing search results for <span className='font-bold'>{query}</span> - Total {total} results found.</h1>
                <p className='text-xs text-graY-500'>Note: Scroll down to check all the packages available.</p>
            </section>
        </main>
    )
}

export default TopSection
