import React from 'react';

const CartCard = ({ carts,item,handleRemove }) => {

    return (
       <>
        <div className=' p-5 m-5 flex justify-between bg-base-100 shadow-2xl rounded-2xl'>
            <div className='flex gap-2' >
                <img src={item.icon} alt="" />

                <div>
                    <h1 className='font-bold'>{item.name}</h1>
                    <p>${item.price}</p>
                </div>
            </div>
            <button onClick={()=>handleRemove(item.id)} className='btn text-red-600 rounded-full'>
                Remove
            </button>
        </div>

    
       </>
    );
};

export default CartCard;