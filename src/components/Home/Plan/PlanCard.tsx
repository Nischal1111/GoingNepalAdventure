import React from 'react';

interface planProps {
    title: string;
    img: string;
    button: string;
    className?: string;
}

const PlanCard: React.FC<planProps> = ({ title, img, button,className}) => {
    return (
        <div
            className={`h-[400px] w-[30%] bg-cover bg-center flex items-end rounded-sm ${className} shadow-2xl`}
            style={{ backgroundImage: `url(${img})` }}
            >
            <div className="bg-black flex flex-col gap-3 w-full bg-opacity-70 py-4 px-4 text-center text-white">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className='underline underline-offset-2 text-xs'>{button}</p>
            </div>
        </div>
    );
};

export default PlanCard;
