"use client"
import React, { useState } from 'react';
import axios from "axios";
import {toast} from "react-toastify";

const ShippingCard = ({ orderId, status, orderProducts }) => {
    const [orderStatus, setOrderStatus] = useState(status);

    const handleStatusChange = () => {
        if (orderStatus === 'PENDING') {
            setOrderStatus('READY_FOR_PICKUP');
            axios.put(`http://localhost:8081/order/ready-for-pickup/${orderId}`)
                .then(() => {
                    toast.success(`Order status updated successfully!`);
                })
                .catch((error) => {
                    console.error("Error updating order status:", error);
                    toast.error("Error updating order status: " + error.message);
                });
        }
    };

    return (
        <div style={{ backgroundColor: "white", color: "black", padding: "10px", borderRadius: "10px" }}>
            <p>Order ID: {orderId}</p>
            <p>Order Status: {orderStatus}</p>
            <div style={{marginTop:"8px"}}>
                <h3>Productos de la orden:</h3>
                <div style={{ display: "flex", justifyContent: "center", padding:"10px"}}>
                    <table style={{ width: "100%", borderCollapse: "collapse"}}>
                        <thead>
                        <tr>
                            <th style={{ border: "1px solid black", padding: "8px" }}>Producto ID</th>
                            <th style={{ border: "1px solid black", padding: "8px" }}>Cantidad</th>
                        </tr>
                        </thead>
                        <tbody>
                        {orderProducts.map((product, index) => (
                            <tr key={index}>
                                <td style={{ border: "1px solid black", padding: "8px" }}>{product.productId}</td>
                                <td style={{ border: "1px solid black", padding: "8px" }}>{product.quantity}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {orderStatus === 'PENDING' && (
                <div style={{display:"flex", justifyContent:"center"}}>
                    <button
                        onClick={handleStatusChange}
                        style={{
                            backgroundColor: 'green',
                            color: 'white',
                            padding: '10px 20px',
                            fontSize: '16px',
                            borderRadius: '5px',
                            border: 'none',
                            cursor: 'pointer',
                            marginTop: '10px'
                        }}
                    >
                        Ready
                    </button>
                </div>
            )}
        </div>
    )
};

export default ShippingCard;
