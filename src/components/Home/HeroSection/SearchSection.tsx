'use client'
import { Button, Input } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const SearchSection = () => {
  const [search,setSearch]=React.useState<string>("")
  const router=useRouter()

  const handleSearch=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
      if (search.trim()) {
      router.push(`/search/?search=${search}`);
    }
  }
  return (
    <div className='z-[200] relative top-1/5 w-full flex flex-col lg:flex-row items-center justify-center'>
        <section className='bg-gray-200 w-[95%] lg:p-10 p-4 shadow-xl rounded-md flex flex-col lg:flex-row lg:gap-0 gap-4 items-center justify-between'>
            <div className='flex gap-4 items-center lg:w-2/5 w-full'>
                <h1 className='lg:text-4xl text-xl text-primary/80 font-semibold'>Find your trip</h1>
                <div className='bg-primary h-[2.5px] w-32'></div>
            </div>

            <form className='flex lg:flex-row flex-col gap-4 lg:w-3/5 w-full items-center' onSubmit={handleSearch}>
              <Input className='shadow-md' value={search} onChange={(e)=>setSearch(e.target.value)} type="text" label="Search treks, tours or activities"/>
              <Button type='submit' className='bg-primary text-xs w-full lg:w-fit rounded-sm px-10 text-white'>Search</Button>
            </form>
        </section>
    </div>
  )
}

export default SearchSection
