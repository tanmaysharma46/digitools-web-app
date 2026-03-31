import React from 'react';
import CartCard from '../CartCard/CartCard';
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts }) => {

    const handleRemove = (id) => {
        const remainCarts = carts.filter(item => item.id !== id);
        setCarts(remainCarts);
        toast.error("Cart Removed");
    };

    const totalPrice = carts.reduce(
        (sum, item) => sum + Number(item.price || 0),
        0
    );

    return (
        <>
        {
            carts.length===0 ? <p className='border-2 p-5 rounded-2xl container mx-auto text-6xl text-center font-bold'>Cart is empty</p>:
              <div className='container mx-auto'>

            <h1 className='text-4xl text-center font-bold'>Your Carts</h1>

            {
                carts.map(item => (
                    <CartCard
                        key={item.id}
                        item={item}
                        handleRemove={handleRemove}
                    />
                ))
            }

            <div className='border-2 p-5 rounded-2xl bg-blue-400 text-white font-bold text-4xl flex justify-between mt-5'>
                <h1>Total</h1>
                <p>${totalPrice}</p>
            </div>
        </div>
        }
        </>
      
    );
};

export default Cart;