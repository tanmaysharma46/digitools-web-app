
import React, { useState } from 'react';
import { TiTick } from 'react-icons/ti';
import { toast } from 'react-toastify';

const Card = ({ product,carts, setCarts }) => {

    const [isBuy, setIsBuy] = useState(false);
    const handleBuy = () => {
        setIsBuy(true);
        toast.success("Items added to Cart  !!")
        setCarts([...carts, product])
    }
    return (
        <div className=' container mx-auto '>
            <div className="card bg-base-100 w-96 shadow-sm">
                <div className='flex justify-between p-5'>

                    <div>
                        <figure
                            className='h-[60px] rounded-full w-[60px] border-1 border-[#727272]'

                        >
                            <img
                                src={product.icon}
                                alt="Shoes" />
                        </figure>
                    </div>
                    <div>
                        <span className={` px-2 py-1 rounded-full text-xs font-semibold ${product.tag === "popular" ? "bg-purple-300 text-black" :
                            product.tag === "new" ? "bg-green-200 text-black" :
                                "bg-yellow-400 text-black"
                            }`}>
                            {product.tag}
                        </span>


                        {/* <button className='btn rounded-full'>

                    </button> */}

                    </div>
                </div>

                <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <p>{product.description}</p>
                    <p className='font-bold text-2xl'>${product.price}/ <span className='font-normal text-xl'>{product.period}</span> </p>
                    <div>
                        <p className='flex' ><TiTick color="green"></TiTick> {product.feature2}</p>
                        <p className='flex'><TiTick color="green"></TiTick> {product.feature1}</p>
                        <p className='flex' ><TiTick color="green"></TiTick> {product.feature3}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button
                            onClick={() => handleBuy()}
                            className={`btn w-full rounded-full ${isBuy ? "bg-green-400 hover:bg-green-500" : "bg-blue-500 hover:bg-blue-600"
                                }`}
                        >
                            {isBuy ? "Added to cart" : "Buy Now"}
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Card;