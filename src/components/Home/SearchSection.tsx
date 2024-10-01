import React from 'react'

const SearchSection = () => {
  return (
    <div className='z-[100] relative top-1/5 w-full flex items-center justify-center'>
        <section className='bg-gray-100 w-[90%] p-10 shadow-xl rounded-md flex items-center justify-between'>
            <div className='flex gap-4 items-center'>
                <h1 className='text-4xl text-primary/80 font-semibold'>Find your trip</h1>
                <div className='bg-primary h-[2.5px] w-32'></div>
            </div>
        </section>
    </div>
  )
}

export default SearchSection
