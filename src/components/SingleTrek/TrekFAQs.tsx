"use client"

import React, { useCallback, useState } from 'react'
import { Accordion, AccordionItem, Button, Selection } from '@nextui-org/react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { RxCross1 } from 'react-icons/rx'
import { FaPlus } from 'react-icons/fa'
import LinedContainer from '@/shared/LinedContainer'
import SharedTitle2 from '@/shared/SharedTitle2'
import Dot from '@/utility/Dot'

interface FAQ {
    question: string;
    answer: string;
}

interface TrekFAQsProps {
    FAQs: FAQ[];
}

const TrekFAQs: React.FC<TrekFAQsProps> = ({ FAQs }) => {
    const [expandedKeys, setExpandedKeys] = useState<Selection>(new Set());

    const itemClasses = {
        title: "font-semibold text-base",
        trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
        indicator: "text-medium",
        content: "text-base px-8 text-justify",
    };

    const handleExpandAll = useCallback(() => {
        if (expandedKeys === "all") {
            setExpandedKeys(new Set());
        } else {
            setExpandedKeys("all");
        }
    }, [expandedKeys]);

    const handleSelectionChange = useCallback((keys: Selection) => {
        setExpandedKeys(keys);
    }, []);

    const isAllExpanded = expandedKeys === "all";

    return (
        <main>
            <SharedTitle2 title='FAQs' />
            <LinedContainer>
                <div className='mt-8 ml-0'>
                    <Button 
                        onClick={handleExpandAll}
                        className="mb-4 text-primary bg-transparent absolute right-0 -top-[4.5rem]"
                        endContent={isAllExpanded ? <IoIosArrowUp className='text-primary' size={20} /> : <IoIosArrowDown className='text-primary' size={20} />}
                    >
                        {isAllExpanded ? 'Collapse All' : 'Expand All'}
                    </Button>
                    <Accordion 
                        selectedKeys={expandedKeys}
                        onSelectionChange={handleSelectionChange}
                    >
                        {FAQs?.map((item, index) => (
                            <AccordionItem
                                key={index}
                                aria-label={item.question}
                                title={item.question}
                                startContent={<Dot />}
                                indicator={({ isOpen }) => (isOpen ? <RxCross1 className='text-primary' /> : <FaPlus className='text-primary' />)}
                                classNames={itemClasses}
                                className='py-2'
                            >
                                <p>{item.answer}</p>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </LinedContainer>
        </main>
    )
}

export default TrekFAQs