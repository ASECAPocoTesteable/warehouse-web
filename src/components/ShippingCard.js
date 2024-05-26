import React from 'react';

const ShippingCard = ({ orderId, orderStatus }) => {
    return (
        <div style={{ backgroundColor: "white", color: "black", padding: "10px", borderRadius: "10px"}}>
            <p>Order ID: {orderId}</p>
            <p>Order Status: {orderStatus}</p>
        </div>
    );
};

export default ShippingCard;
