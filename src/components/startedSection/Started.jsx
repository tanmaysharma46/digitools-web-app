import React, { use } from 'react';
import NewCard from '../newCard/NewCard';

const Started = ({ startedPromise }) => {
    const started = use(startedPromise);
    return (


      <div className='bg-base-100 shadow-2xl container mx-auto rounded-2xl p-8'>
    <div className='m-8'>
        <h2 className='font-extrabold text-[#101727] text-[48px] text-center'>
            Get Started in 3 Steps
        </h2>
        <p className='text-center text-[#627382]'>
            Start using premium digital tools in minutes, not hours.
        </p>
    </div>

    <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
            started.map((item, index) => (
                <NewCard
                    key={index}
                    item={item}
                />
            ))
        }
    </div>
</div>
    );
};

export default Started;