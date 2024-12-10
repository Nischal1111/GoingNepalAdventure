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
    <div className='z-[100] relative top-1/5 w-full flex items-center justify-center'>
        <section className='bg-gray-200 w-[90%] p-10 shadow-xl rounded-md flex items-center justify-between'>
            <div className='flex gap-4 items-center w-2/5'>
                <h1 className='text-4xl text-primary/80 font-semibold'>Find your trip</h1>
                <div className='bg-primary h-[2.5px] w-32'></div>
            </div>

            <form className='flex gap-4 w-3/5 items-center' onSubmit={handleSearch}>
              <Input className='shadow-md' value={search} onChange={(e)=>setSearch(e.target.value)} size='sm' type="text" label="Search treks, tours or activities" />
              <Button type='submit' className='bg-primary rounded-sm px-10 text-white'>Search</Button>
            </form>
        </section>
    </div>
  )
}

export default SearchSection
