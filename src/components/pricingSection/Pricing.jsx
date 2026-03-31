import React, { use } from 'react';
import { TiTick } from 'react-icons/ti';
import PricingCard from '../pricingCard/PricingCard';

const Pricing = ({pricingPromise}) => {
    const price=use(pricingPromise);
    return (

        <div className='container m-8 mx-auto'>
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


        {/* <div className='grid grid-cols-1 m-5 md: grid grid-cols-3'>
            <div className='w-[380px] h-[448px] p-5 bg-base-200 shadow-2xl  rounded-2xl'>
                <h1 className='font-bold text-[24px]'>Starter</h1>
                <p>Perfect for getting started</p>
                <p><span className='font-bold text-3xl'>$0</span>/Month</p>
                <ul className='p-5 m-5 space-y-2'>
                    <li className='flex'><TiTick  className='mr-2' color="green"></TiTick>Access to 10 free tools</li>
                    <li className='flex'><TiTick className='mr-2' color="green"></TiTick>Basic Templates</li>
                    <li className='flex'><TiTick className='mr-2' color="green"></TiTick>Community Support </li>
                    <li className='flex'><TiTick className='mr-2' color="green"></TiTick>1 project per month</li>
                </ul>
                <button className='w-full btn
                rounded-2xl bg-base-100 shadow-xl'>
                    Get Started Free 
                </button>
            </div>
            <div className='w-[380px] bg-gradient-to-r text-white from-[#4F39F6] to-[#9514FA] h-[448px] p-5 bg-base-200 shadow-2xl  rounded-2xl'>
                <h1 className='font-bold text-[24px]'>Starter</h1>
                <p>Perfect for getting started</p>
                <p><span className='font-bold text-3xl'>$0</span>/Month</p>
                <ul className='p-5 m-5 space-y-2'>
                    <li className='flex'><TiTick  className='mr-2' color="green"></TiTick>Access to 10 free tools</li>
                    <li className='flex'><TiTick className='mr-2' color="green"></TiTick>Basic Templates</li>
                    <li className='flex'><TiTick className='mr-2' color="green"></TiTick>Community Support </li>
                    <li className='flex'><TiTick className='mr-2' color="green"></TiTick>1 project per month</li>
                </ul>
                <button className='btn text-blue-500 w-full rounded-2xl'>
                    Get Started Free 
                </button>
            </div>
            <div className='w-[380px]  h-[448px] p-5 bg-base-200 shadow-2xl  rounded-2xl'>
                <h1 className='font-bold text-[24px]'>Starter</h1>
                <p>Perfect for getting started</p>
                <p><span className='font-bold text-3xl'>$0</span>/Month</p>
                <ul className='p-5 m-5 space-y-2'>
                    <li className='flex'><TiTick  className='mr-2' color="green"></TiTick>Access to 10 free tools</li>
                    <li className='flex'><TiTick className='mr-2' color="green"></TiTick>Basic Templates</li>
                    <li className='flex'><TiTick className='mr-2' color="green"></TiTick>Community Support </li>
                    <li className='flex'><TiTick className='mr-2' color="green"></TiTick>1 project per month</li>
                </ul>
                <button className='w-full btn
                rounded-2xl bg-base-100 shadow-xl'>
                    Get Started Free 
                </button>
            </div>
        </div> */}
        </div>
    );
};

export default Pricing;