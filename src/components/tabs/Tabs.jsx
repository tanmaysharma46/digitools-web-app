import React from 'react';

const Tabs = () => {
    return (
       <>
<div className="tabs m-8 justify-center tabs-box">
  <input type="radio" name="my_tabs_1" className="tab rounded-full" aria-label="Product" />
  <input type="radio" name="my_tabs_1" className="tab rounded-full" aria-label="Cart" defaultChecked />
</div>
       
       </>
    );
};

export default Tabs;