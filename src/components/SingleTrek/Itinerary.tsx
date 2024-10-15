"use client"
import React, { useState, useCallback } from 'react'
import { trekProps } from './types'
import SharedTitle2 from '@/shared/SharedTitle2'
import LinedContainer from '@/shared/LinedContainer'
import { Accordion, AccordionItem, Button } from '@nextui-org/react'
import { Selection } from "@nextui-org/react"
import Dot from '@/utility/Dot'
import { FaPlus } from 'react-icons/fa'
import { RxCross1 } from 'react-icons/rx'
import { FaBed, FaUtensils } from 'react-icons/fa'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

interface single{
        day: number;
        title: string;
        description: string;
        meals: string;
        accommodation: string;
}

const Itinerary: React.FC<trekProps> = ({ itinerary }) => {
    const [expandedKeys, setExpandedKeys] = useState<Selection>(new Set());

    const itemClasses = {
        title: "font-semibold text-base",
        trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
        indicator: "text-medium",
        content: "text-base px-8 text-justify",
    };

    const handleExpandAll = useCallback(() => {
        if (expandedKeys === "all" || (expandedKeys instanceof Set && expandedKeys.size === itinerary?.length)) {
            setExpandedKeys(new Set());
        } else {
            setExpandedKeys(new Set(itinerary?.map((item:single) => item.day.toString())));
        }
    }, [itinerary, expandedKeys]);

    const handleSelectionChange = useCallback((keys: Selection) => {
        setExpandedKeys(keys);
    }, []);

    const isAllExpanded = expandedKeys === "all" || (expandedKeys instanceof Set && expandedKeys.size === itinerary?.length);

    return (
        <main className='w-full my-16'>
            <SharedTitle2 title='Itinerary' />
            <LinedContainer>
                <div className='mt-8 -ml-4'>
                    <Button 
                        onClick={handleExpandAll}
                        className="mb-4 text-primary bg-transparent absolute right-0 -top-[4.5rem]"
                        endContent={isAllExpanded?<IoIosArrowUp className='text-primary' size={20}/>: <IoIosArrowDown className='text-primary' size={20}/>}
                    >
                        {isAllExpanded ? 'Collapse All' : 'Expand All'}
                    </Button>
                    <Accordion 
                        selectedKeys={expandedKeys}
                        onSelectionChange={handleSelectionChange}
                    >
                        
                        {(itinerary||[])?.map((item:single) => (
                            <AccordionItem
                                key={item?.day}
                                aria-label={item.title}
                                title={item.title}
                                startContent={<Dot />}
                                indicator={({ isOpen }) => (isOpen ? <RxCross1 className='text-primary' /> : <FaPlus className='text-primary' />)}
                                classNames={itemClasses}
                                className='py-2'
                            >
                                <p>{item.description}</p>
                                <div className='my-4 px-8 py-4 rounded-md bg-[#5d83c4]/20 flex items-center gap-12 w-fit'>
                                    <div className='flex items-center gap-4'>
                                        <FaBed className='text-primary' size={20} />
                                        <p className='text-sm'>{item.accommodation}</p>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <FaUtensils className='text-primary' size={16} />
                                        <p className='text-sm'>{item.meals}</p>
                                    </div>
                                </div>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </LinedContainer>
        </main>
    )
}

export default Itinerary