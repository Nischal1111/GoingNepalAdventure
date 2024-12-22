import React from 'react'
import Breadcrumb from '../BreadCrumbs'

interface sharedProps{
    title:string
    link:string
    img:string
}
const SharedSection:React.FC<sharedProps> = ({title,link,img}) => {
    return (
        <section className='relative lg:h-[70vh] h-[50vh] w-full' style={{background:`url(${img})`,backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center"}}>
            <div className='absolute inset-0 bg-black/20 w-full'></div>
            <Breadcrumb title={title} link={link}/>
        </section>
  )
}

export default SharedSection
