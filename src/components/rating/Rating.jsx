import React from 'react';

const Rating = () => {
    return (
        <>
            <div className='border-2 min-h-[247px] text-2xl md:text-4xl flex flex-col md:flex-row items-center font-bold text-white gap-6 md:gap-20 w-auto bg-gradient-to-r border-[#4F39F6] from-[#4F39F6] to-[#9514FA]'>
                
                <div className='container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-20'>

                    <div className='p-6 md:p-15 text-center'>
                        <h1>50K+</h1>
                        <p>Active Users</p>
                    </div>

                    <div className="hidden md:block h-32 w-1 bg-gray-500"></div>

                    <div className='p-6 md:p-15 text-center'>
                        <h1>200+</h1>
                        <p>Premium Tools</p>
                    </div>

                    <div className="hidden md:block h-32 w-1 bg-gray-500"></div>

                    <div className='p-6 md:p-15 text-center'>
                        <h1>4.9</h1>
                        <p>Rating</p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Rating;