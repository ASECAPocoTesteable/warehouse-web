"use client";

import React, {useState} from "react";
import NavBar from "@/components/NavBar";


const ShipmentOverviewPage = () => {
    const warehouseOption = ["Warehouse 1", "Warehouse 2", "Warehouse 3", "Warehouse 4"];
    const [selectedWarehouseOption, setSelectedWarehouseOption] = useState(warehouseOption[0]);

    const [orderId, setOrderId] = useState(0);


    const handleChange = (event) => {
        setSelectedWarehouseOption(event.target.value);
    };

    const handleOrderIdChange = (event) => {
        setOrderId(event.target.value);
    };

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "30px"}}>
            <NavBar/>
            <div style={{display: "flex", flexDirection: "column"}}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "30px"}}>
                    <h1>Create shipment:</h1>
                    <form style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <p style={{fontSize: "1.5em"}} align={"center"}>Choose product:</p>
                            <select id="warehouse-options" value={selectedWarehouseOption} onChange={handleChange}>
                                {warehouseOption.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div style={{display: "flex", flexDirection: "column"}}>
                            <p style={{fontSize: "1.5em"}} align={"center"}>Order ID: </p>
                            <input
                                id="order-id"
                                type="number"
                                value={orderId}
                                onChange={handleOrderIdChange}
                                min="0"
                            />
                        </div>

                        <button style={{backgroundColor: "white", color: "black", borderRadius: "5px"}}>Create
                            shipment
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default ShipmentOverviewPage;