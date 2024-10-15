import React from 'react'

interface sharedProps{
    title:string
}
const SharedTitle2:React.FC<sharedProps> = ({title}) => {
    return (
        <div className='flex gap-4 w-full my-2'>
            <div className='h-auto bg-primary w-[4px] rounded-md'>
                
            </div>
            <h1 className='font-semibold text-3xl'>{title}</h1>
        </div>
    )
}

export default SharedTitle2
