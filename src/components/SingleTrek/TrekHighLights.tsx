import SharedTitle2 from '@/shared/SharedTitle2'
import React from 'react'
import { trekProps } from './types'
import LinedContainer from '@/shared/LinedContainer'
import Dot from '@/utility/Dot'
import Link from 'next/link'

const TrekHighLights: React.FC<trekProps> = ({ title, trekHighlights }) => {

    const parseContentWithLinks = (content: string, links: { text: string; url: string }[]) => {
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

    return (
        <main className='w-full my-16'>
        <SharedTitle2 title={`${title} Highlights`} />
        <LinedContainer>
            <div className='mt-8'>
            {trekHighlights?.map((item, index) => (
                <div key={index} className='flex mt-4 gap-4 items-center'>
                <Dot />
                <p className='text-base text-justify font-semibold'>
                    {parseContentWithLinks(item.content, Array.isArray(item.links) ? item.links : [item.links])}
                </p>
                </div>
            ))}
            </div>
        </LinedContainer>
        </main>
    );
};

export default TrekHighLights;
