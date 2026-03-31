import React, { use } from 'react';
import Card from '../card/Card';

const Products = ({productsPromise,carts, setCarts}) => {
    const productsData=use(productsPromise);
    // console.log(productsPromise.value);
    return (
        <div className='grid grid-cols-3 container mx-auto gap-5'>
            {
                productsData.map((product,index)=><Card 
                key={index}
                carts={carts}
                setCarts={setCarts}
                product={product}
                ></Card>)
            }
            
        </div>
    );
};

export default Products;