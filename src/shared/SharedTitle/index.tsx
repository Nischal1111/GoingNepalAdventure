import React from 'react'
import { Rowdies} from 'next/font/google'

const rowdies=Rowdies({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
interface titleProps{
    title:string
    subTitle:string
}
const SharedTitle:React.FC<titleProps>= ({title,subTitle}) => {
  return (
    <div className='w-full relative flex items-center justify-center lg:my-8 my-4'>
        <div className='flex flex-col items-center w-full'>
            <h1 className={`${rowdies.className} lg:text-7xl text-4xl text-[#DFDCDC]`}>{title}</h1>
            <p className={`${rowdies.className} lg:text-4xl text-3xl absolute lg:top-10 top-4 antialiased`}>{subTitle}</p>
        </div>
    </div>
  )
}

export default SharedTitle
