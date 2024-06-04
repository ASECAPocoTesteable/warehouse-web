"use client"
import React, {useEffect, useState} from "react";
import NavBar from "@/components/NavBar";
import ShippingCard from "@/components/ShippingCard";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ShipmentOverviewPage = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        axios
            .get("http://warehousesv:8081/order/all")
            .then((response) => {
                setOrders(response.data);
            })
            .catch((error) => {
                console.error("Error fetching orders:", error);
                toast.error("Error fetching orders: " + error.message);
            });
    }, []);
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "30px"}}>
            <NavBar/>
            <ToastContainer/>
            <div style={{display: "flex", flexDirection: "column"}}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "30px"}}>
                    <h1>Shipments overview:</h1>
                    {orders.length > 0 ?(
                        orders.map(order => (
                            <ShippingCard key={order.id} orderId={order.id} status={order.status} orderProducts={order.orderProducts}/>
                        ))
                    ): (
                        <p>No shipments available</p>
                    )}

                </div>
            </div>
        </div>
    );
};

export default ShipmentOverviewPage;