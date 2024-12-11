import React from 'react'

interface queryProps{
    query:string | null
    total:number|null
}
const TopSection:React.FC<queryProps>= ({query,total}) => {
    return (
        <main className='flex flex-col lg:gap-8 gap-6'>
            <section className='flex flex-col gap-2'>
                <h1 className='lg:text-2xl text-xl font-semibold'>Showing search results for <span className='font-bold text-primary'>{query}</span> - Total {total} results found.</h1>
            </section>
        </main>
    )
}

export default TopSection
