/* eslint-disable @typescript-eslint/no-explicit-any */
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
import Link from 'next/link'

export const parseContentWithLinks = (content: string, links: { text: string; url: string }[]) => {
        let parts: (string | JSX.Element)[] = [content];

        links.forEach(link => {
        parts = parts.flatMap(part => 
            typeof part === 'string' 
            ? part.split(link.text).flatMap((text, i, arr) =>
                i < arr.length - 1 ? [text, <Link key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="text-primary text-base underline underline-offset-2">{link.text}</Link>] : text
                )
            : part
        );
        });

        return parts;
    };

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
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            setExpandedKeys(new Set(itinerary?.map((item:any) => item.day.toString())));
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
                        
                        {(itinerary||[])?.map((item:any) => (
                            <AccordionItem
                                key={item?.day}
                                aria-label={item.title}
                                title={<div className='flex gap-2 '><span className='text-primary'>Day {item?.day}</span><p>: {item?.title}</p></div>}
                                startContent={<Dot />}
                                indicator={({ isOpen }) => (isOpen ? <RxCross1 className='text-primary' /> : <FaPlus className='text-primary' />)}
                                classNames={itemClasses}
                                className='py-2'
                            >
                                <p>{parseContentWithLinks(item.details, Array.isArray(item.links) ? item.links : [item.links])}</p>
                                <div className='my-4 px-8 py-4 rounded-md bg-[#5d83c4]/20 flex items-center gap-12 w-fit'>
                                    <div className='flex items-center gap-4'>
                                        <FaBed className='text-primary' size={20} />
                                        <p className='text-sm'>{item?.accommodations}</p>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <FaUtensils className='text-primary' size={16} />
                                        <p className='text-sm'>{item?.meals}</p>
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