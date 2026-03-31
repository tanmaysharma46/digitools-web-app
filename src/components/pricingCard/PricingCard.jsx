import React from 'react';
import { TiTick } from 'react-icons/ti';

const PricingCard = ({ data }) => {
  const isPro = data.plan === 'Pro';
  const cardBg = isPro ? 'bg-blue-600 text-white' : 'bg-base-200 text-black';
  const buttonBg = isPro ? 'bg-white text-blue-600' : 'bg-base-100 text-black';
  const tickColor = isPro ? 'white' : 'green';

  return (
    <div className={`w-[380px] h-[448px] p-5 relative hover:scale-105 transition duration-300 shadow-2xl rounded-2xl flex flex-col justify-between ${cardBg}`}>
      
      
      {isPro && (
        <span className="absolute top-[-19px] right-[130px]  bg-amber-50 text-amber-800 font-bold px-3 py-1 rounded-full text-sm">
          Most Popular
        </span>
      )}

      <div>
        <h1 className="font-bold text-[24px]">{data.plan}</h1>
        <p>{data.description}</p>
        <p className="mt-2">
          <span className="font-bold text-3xl">{data.price}</span>
        </p>

        <ul className="p-5 m-5 space-y-2">
          <li className="flex items-center">
            <TiTick className="mr-2" color={tickColor} /> {data.feature1}
          </li>
          <li className="flex items-center">
            <TiTick className="mr-2" color={tickColor} /> {data.feature2}
          </li>
          <li className="flex items-center">
            <TiTick className="mr-2" color={tickColor} /> {data.feature3}
          </li>
          <li className="flex items-center">
            <TiTick className="mr-2" color={tickColor} /> {data.feature4}
          </li>
        </ul>
      </div>

      <button className={`w-full btn rounded-2xl shadow-xl ${buttonBg}`}>
        {data.buttonText}
      </button>
    </div>
  );
};

export default PricingCard;