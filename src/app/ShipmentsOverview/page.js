"use client"
import React from "react";
import NavBar from "@/components/NavBar";
import ShippingCard from "@/components/ShippingCard";


const ShipmentOverviewPage = () => {
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