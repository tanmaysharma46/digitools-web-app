import React from 'react';
import { TiTick } from 'react-icons/ti';

const Card = ({ product }) => {
    return (
        <div className=' container mx-auto '>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={product.icon}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <p>{product.description}</p>
                    <p className='font-bold text-2xl'>${product.price}/ <span className='font-normal text-xl'>{product.period}</span> </p>
                    <div>
                        <p className='flex' ><TiTick></TiTick> {product.feature2}</p>
                        <p className='flex'><TiTick></TiTick> {product.feature1}</p>
                        <p className='flex' ><TiTick></TiTick> {product.feature3}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary w-full rounded-full">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;