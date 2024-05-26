import React from "react";
import NavBar from "@/components/NavBar";


const ShipmentOverviewPage = () => {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "30px"}}>
            <NavBar/>
            <p>Shipments overview</p>
        </div>
    );
};

export default ShipmentOverviewPage;