import React, { useState } from 'react';
import Products from '../products/Products';
import Cart from '../cart/Cart';

const Tabs = ({ productsPromise, carts, setCarts }) => {
  const [aciveTab, setActiveTab] = useState("product")
  return (
    <>
      <div className="tabs m-8 justify-center tabs-box">
        <input type="radio" name="my_tabs_1" className={`tab  rounded-full ${aciveTab==="product"?"bg-gradient-to-r text-white from-[#4F39F6] to-[#9514FA] ":""}`} onClick={()=>setActiveTab("product")} aria-label="Product" defaultChecked />
        <input type="radio" name="my_tabs_1" className={`tab  rounded-full ${aciveTab==="cart"?"bg-gradient-to-r text-white from-[#4F39F6] to-[#9514FA] ":""}`} onClick={()=>setActiveTab("cart")} aria-label={`Cart(${carts.length})`} />
      </div>
      {
        aciveTab === "product" &&
        <Products carts={carts} setCarts={setCarts} productsPromise={productsPromise}></Products>

      }
      {
        aciveTab==="cart"&&
         <Cart carts={carts} setCarts={setCarts}/>

      }


    </>
  );
};

export default Tabs;