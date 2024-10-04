import SharedTitle from '@/shared/SharedTitle'
import React from 'react'
import BlogSection from './BlogSection'

const Blogs = () => {
    const trekbg = "/assets/mountBG.png";
    return (
        <div className='px-20 flex flex-col gap-8 relative'>
            <div 
                className='absolute inset-0 z-0'
                style={{
                    backgroundImage: `url(${trekbg})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                    opacity: 0.3,
                    }}
                ></div>
            <SharedTitle title='Recent Blogs' subTitle='Recent Blogs'/>
            <BlogSection/>

        </div>
    )
}

export default Blogs
