import React, { use } from 'react';
import Card from '../card/Card';

const Products = ({ productsPromise, carts, setCarts }) => {
    const productsData = use(productsPromise);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto p-4'>
            {
                productsData.map((product, index) => (
                    <Card 
                        key={index}
                        carts={carts}
                        setCarts={setCarts}
                        product={product}
                    />
                ))
            }
        </div>
    );
};

export default Products;