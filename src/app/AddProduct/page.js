"use client";

import React, { useState } from "react";

const AddProductPage = () => {
    const options = ["Product 1", "Product 2", "Product 3", "Product 4"];
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [quantity, setQuantity] = useState(0);

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row", gap: "20px", width: "100%" }}>
                <button style={{ backgroundColor: "white", color: "black", flex: "1" }}>Products</button>
                <button style={{ backgroundColor: "white", color: "black", flex: "1" }}>Shipping</button>
                <button style={{ backgroundColor: "white", color: "black", flex: "1" }}>Inventory</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column"}}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "30px"}}>
                    <h1>Add product:</h1>
                    <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <div style={{ display: "flex", flexDirection: "column"}}>
                            <p style={{ fontSize: "1.5em" }} align={"center"}>Choose product:</p>
                            <select id="product-options" value={selectedOption} onChange={handleChange}>
                                {options.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column"}}>
                            <p style={{ fontSize: "1.5em" }} align={"center"}>Quantity: </p>
                            <input
                                id="product-quantity"
                                type="number"
                                value={quantity}
                                onChange={handleQuantityChange}
                                min="0"
                            />
                        </div>

                        <button style={{backgroundColor: "white", color: "black"}}>Continue</button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default AddProductPage;
