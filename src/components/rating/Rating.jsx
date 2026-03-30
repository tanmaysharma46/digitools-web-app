import React from 'react';

const Rating = () => {
    return (
        <>
            <div className='border-2 h-[247px] text-4xl flex font-bold text-white gap-50 w-auto bg-gradient-to-r border-[#4F39F6] from-[#4F39F6] to-[#9514FA]'>
                <div className='container mx-auto flex gap-50'>
                    <div className='p-15'>
                        <h1>50K+</h1>
                        <p>Active Users</p>
                    </div>
                   <div class="h-32 w-1 bg-gray-500 mt-12"></div>

                    <div className='p-15'>
                        <h1>200+</h1>
                        <p>Premium Tools</p>
                    </div>
                   <div class="h-32 w-1 bg-gray-500 mt-12"></div>

                    <div className='p-15'>
                        <h1>4.9</h1>
                        <p>Rating</p>
                    </div>

                </div>
            </div>

        </>
    );
};

export default Rating;