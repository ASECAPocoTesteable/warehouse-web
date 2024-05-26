import React from "react";
import NavBar from "@/components/NavBar";
import DevolutionCard from "@/components/DevolutionCard";


const DevolutionsOverviewPage = () => {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "30px"}}>
            <NavBar/>
            <div style={{display: "flex", flexDirection: "column"}}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "30px"}}>
                    <h1>Devolutions overview:</h1>
                    <DevolutionCard devolutionId={"123"} devolutionStatus={"OMW"}/>
                </div>
            </div>
        </div>
    );
};

export default DevolutionsOverviewPage;