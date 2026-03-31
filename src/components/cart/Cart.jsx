import React from 'react';
import CartCard from '../CartCard/CartCard';
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts }) => {

    const handleRemoveAll=()=>{
        setCarts([]);
        toast.error("All Cart Removed");
    
    }

    const handleRemove = (id) => {
        const remainCarts = carts.filter(item => item.id !== id);
        setCarts(remainCarts);
        toast.error("cart removed");
    };

    const totalPrice = carts.reduce(
        (sum, item) => sum + Number(item.price || 0),
        0
    );

    return (
        <>
        <div className=' container mx-auto rounded-2xl p-5 bg-base-100 shadow-2xl'>
            {
            carts.length===0 ? 
            <div className=' bg-base-100 shadow-2xl rounded-2xl bg-blue-300 text-white container mx-auto '>
                <p className=' p-5 rounded-2xl text-4xl text-center font-bold'>Cart is empty</p>
                <p className='text-center p-5'>Please Buy something.</p>
            </div>
            :
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
            <div>
                <button onClick={()=>handleRemoveAll()} className='btn container
                 mx-auto text-3xl p-5 text-white bg-blue-500 font-normal rounded-full m-5 p-5'>Proceed to CheckOut</button>
            </div>
        </div>
        }
        </div>
        </>
      
    );
};

export default Cart;