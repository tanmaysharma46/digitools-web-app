import React, { use } from 'react';
import { TiTick } from 'react-icons/ti';
import PricingCard from '../pricingCard/PricingCard';

const Pricing = ({pricingPromise}) => {
    const price=use(pricingPromise);
    return (

        <div className='container bg-base-100 p-4 md:p-8 rounded-2xl shadow-xl my-8 mx-auto'>
            <h2 className='font-extrabold text-[#101727] text-[32px] md:text-[48px] text-center leading-tight'>Simple, Transparent Pricing</h2>
            <p className='text-center text-[#627382] mt-2 px-4'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mb-5 justify-items-center'>
          {
            price.map((data,index)=><PricingCard
            key={index}
            data={data}
            />)
        }
      </div>


       
        </div>
    );
};

export default Pricing;