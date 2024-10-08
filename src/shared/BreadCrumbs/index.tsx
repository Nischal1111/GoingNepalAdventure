"use client"
import React from 'react'
import { BreadcrumbItem,Breadcrumbs } from '@nextui-org/react'
import { Rowdies } from 'next/font/google'
interface breadCrumbProps{
    title:string
    link:string
}
const rowdies=Rowdies({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})
const Breadcrumb:React.FC<breadCrumbProps> = ({title,link}) => {
    return (
        <div className='flex flex-col gap-4 items-center relative pb-[2rem] justify-center h-full text-white'>
            <div className='bg-primary/70 px-6 py-2 rounded-md'>
                <Breadcrumbs className='text-white font-semibold'
                    itemClasses={{
                        item: "text-white/80 data-[current=true]:text-white",
                        separator: "text-white/40",
                    }}>
                    <BreadcrumbItem href='/'>Home</BreadcrumbItem>
                    <BreadcrumbItem href={link} className='text-white'>{title}</BreadcrumbItem>
                </Breadcrumbs>
            </div>
            <h1 className={`${rowdies.className} font-semibold text-6xl tracking-wider`}>{title}</h1>
        </div>
    )
}

export default Breadcrumb
