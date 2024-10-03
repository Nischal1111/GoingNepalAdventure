"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Avatar, AvatarGroup } from '@nextui-org/react'
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from 'react-intersection-observer'

const Info = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const [count, setCount] = useState(0)

    const slideVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    }

    useEffect(() => {
        let interval: NodeJS.Timeout
        if (inView) {
            interval = setInterval(() => {
                setCount(prevCount => {
                    if (prevCount < 1200) {
                        return prevCount + 20
                    }
                    clearInterval(interval)
                    return 1200
                })
            }, 30)
        }
        return () => clearInterval(interval)
    }, [inView])

    return (
        <div className="relative w-full h-[500px]" ref={ref}>
            <section className='relative rounded-full w-[500px] h-[500px] mx-auto'>
                <Image src="/assets/why.jpg" alt='Why-Going' fill className='rounded-full object-cover'/>
                <div className='absolute top-[25%] -left-20 w-fit'>
                    <AnimatePresence>
                        {inView && (
                            <motion.div
                                variants={slideVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                transition={{ duration: 0.5,delay:.2}}  
                                className='bg-zinc-200 px-6 py-2 rounded-full flex gap-4 items-center shadow-2xl border border-gray-300'
                            >
                                <AvatarGroup isBordered>
                                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                    <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                                </AvatarGroup>
                                <motion.div className='flex flex-col' transition={{ delay: 1 }}>
                                    <p className='font-extrabold text-primary'>{count}+</p>
                                    <h1 className='text-xs font-semibold'>Satisfied Clients</h1>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>
        </div>
    )
}

export default Info