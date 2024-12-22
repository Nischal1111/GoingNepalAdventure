import Link from 'next/link';
import React from 'react';

interface PlanProps {
    title: string;
    img: string;
    button: string;
    className?: string;
    link:string
}

const PlanCard: React.FC<PlanProps> = ({ title, img, button, className,link }) => {
    return (
        <div
            className={`custom-card cursor-pointer lg:w-[400px] lg:h-[400px] w-full h-[280px]  flex items-end rounded-lg overflow-hidden relative group ${className}`}
        >
            <div
                className="absolute cursor-pointer inset-0 transition-transform duration-500 ease-in-out group-hover:scale-110"
                style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ></div>

            <div className="relative cursor-pointer z-10 bg-black flex flex-col rounded-b-lg gap-3 w-full bg-opacity-70 py-4 px-4 text-center text-white">
                <h3 className="text-2xl font-bold">{title}</h3>
                <Link href={link}>
                    <p className="underline underline-offset-2 text-xs">{button}</p>
                </Link>
            </div>
        </div>
    );
};

export default PlanCard;