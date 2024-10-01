import { Button, Input } from '@nextui-org/react'
import React from 'react'

const SearchSection = () => {
  return (
    <div className='z-[100] relative top-1/5 w-full flex items-center justify-center'>
        <section className='bg-gray-200 w-[90%] p-10 shadow-xl rounded-md flex items-center justify-between'>
            <div className='flex gap-4 items-center w-2/5'>
                <h1 className='text-4xl text-primary/80 font-semibold'>Find your trip</h1>
                <div className='bg-primary h-[2.5px] w-32'></div>
            </div>

            <div className='flex gap-4 w-3/5 items-center'>
              <Input className='shadow-md' size='sm' type="text" label="Search treks, tours or activities" />
              <Button className='bg-primary rounded-sm px-10 text-white'>Search</Button>
            </div>
        </section>
    </div>
  )
}

export default SearchSection
