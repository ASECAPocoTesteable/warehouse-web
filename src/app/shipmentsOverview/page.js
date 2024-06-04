"use client"
import React, {useEffect, useState} from "react";
import NavBar from "@/components/NavBar";
import ShippingCard from "@/components/ShippingCard";
import axios from "axios";
import {toast} from "react-toastify";


const ShipmentOverviewPage = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8082/product/all")
            .then((response) => {
                setProducts(response.data);
                if (response.data.length > 0) {
                    setSelectedProduct(response.data[0].id); // Set the first product as the default selected option
                }
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                toast.error("Error fetching products: " + error.message);
            });
    }, []);
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "30px"}}>
            <NavBar/>
            <div style={{display: "flex", flexDirection: "column"}}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "30px"}}>
                    <h1>Shipments overview:</h1>
                    <ShippingCard orderId="123" initialOrderStatus="to prepare"/>
                </div>
            </div>
        </div>
    );
};

export default ShipmentOverviewPage;