import React from 'react'
import { FaSearch } from 'react-icons/fa'

interface props{
    title:string
}
const NoData:React.FC<props> = ({title}) => {
  return (
    <div className='w-full h-[300px] flex flex-col gap-4 items-center justify-center'>
        <FaSearch size={70} className='text-gray-400'/>
        <h1 className='lg:text-2xl text-lg font-semibold text-gray-400'>No {title} found. Please check something else.</h1>
    </div>
  )
}

export default NoData
