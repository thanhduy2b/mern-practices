import React from 'react';
import CartSummary from './app-cart-summary';

export default () => {
    return (
        <div classname="row" style={{borderBottom: '1px solid #ccc'}}>
            <div classname="col-sm-2">
                <h1>Store</h1>
            </div>
            <div classname="col-sm-10 text-right">
                <CartSummary />
            </div>
        </div>
    );
};