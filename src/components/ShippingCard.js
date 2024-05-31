"use client"
import React, { useState } from 'react';

const ShippingCard = ({ orderId, initialOrderStatus }) => {
    const [orderStatus, setOrderStatus] = useState(initialOrderStatus);

    const handleStatusChange = () => {
        if (orderStatus === 'to prepare') {
            setOrderStatus('ready to ship');
        }
    };

    return (
        <div style={{ backgroundColor: "white", color: "black", padding: "10px", borderRadius: "10px"}}>
            <p>Order ID: {orderId}</p>
            <p>Order Status: {orderStatus}</p>
            {orderStatus === 'to prepare' && (
                <button
                    onClick={handleStatusChange}
                    style={{
                        backgroundColor: 'green',
                        color: 'white',
                        padding: '10px 20px',
                        fontSize: '16px',
                        borderRadius: '5px',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >
                    Ready
                </button>
            )}
        </div>
    );
};

export default ShippingCard;
