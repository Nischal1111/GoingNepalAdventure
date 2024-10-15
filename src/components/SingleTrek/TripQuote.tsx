"use client"
import { Button } from '@nextui-org/react';
import jspdf from 'jspdf';
import React from 'react'
import { trekProps } from './types';
import { FaCircleQuestion } from 'react-icons/fa6';

const TripQuote:React.FC<trekProps> = ({title,desc}) => {
    const generatePDF = () => {
        const doc = new jspdf()

        doc.text(`Trek Details: ${title}`, 10, 10);
        doc.text(`Description: ${desc}`, 10, 20);
        return doc.output('datauristring');
    };

    const handleGetQuote = () => {
        const companyEmail = 'np03cs4s230278@heraldcollege.edu.np'
        const subject = `Quote Request for ${title} Trek`;
        const body = `I'm interested in the ${title} trek. Please provide me with a quote.`;
        const pdfAttachment = generatePDF();

        const mailtoLink = `mailto:${companyEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}&attach=${encodeURIComponent(pdfAttachment)}`;

        window.location.href = mailtoLink;
    };
    return (
        <main className='bg-primary/30 px-8 py-4 rounded-md flex items-center justify-between my-16'>
            <section className='flex flex-col items-start h-full text-white'>
                <div className='flex items-center gap-4 mb-2'>
                    <FaCircleQuestion size={52} className='text-primary'/>
                    <h1 className='font-semibold text-xl'>Customize your Own Trek</h1>
                </div>
            </section>
            <Button onClick={handleGetQuote} className='bg-primary rounded-md px-12 text-white'>
                Get a Trip Quote
            </Button>
        </main>
    )
}

export default TripQuote
