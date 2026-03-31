import React, { use } from 'react';
import { TiTick } from 'react-icons/ti';
import PricingCard from '../pricingCard/PricingCard';

const Pricing = ({pricingPromise}) => {
    const price=use(pricingPromise);
    return (

        <div className='container bg-base-100 p-8 rounded-2xl shadow-xl m-8 mx-auto'>
            <h2 className='font-extrabold text-[#101727] text-[48px] text-center'>Simple, Transparent Pricing</h2>
            <p className='text-center text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      
      <div className='grid grid-cols-1 m-5 md: grid grid-cols-3'>
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