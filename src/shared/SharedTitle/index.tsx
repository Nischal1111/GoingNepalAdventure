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
    <div className='w-full relative flex items-center justify-center my-8'>
        <div className='flex flex-col items-center'>
            <h1 className={`${rowdies.className} text-7xl text-[#DFDCDC]`}>{title}</h1>
            <p className={`${rowdies.className} text-4xl absolute top-10 antialiased`}>{subTitle}</p>
        </div>
    </div>
  )
}

export default SharedTitle
