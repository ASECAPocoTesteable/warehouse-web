"use client";

import React, {useEffect, useState} from "react";
import NavBar from "@/components/NavBar";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProductPage = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState("");
    const [quantity, setQuantity] = useState(0);

    const fetchProducts = () => {
        axios
            .get("http://localhost:8081/product/all")
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
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleChange = (event) => {
        setSelectedProduct(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleSubmit = (event) => {
        if (quantity <= 0) {
            event.preventDefault();
            axios.put(`http://localhost:8081/product/${selectedProduct}`, {
                "id": selectedProduct,
                "addedQuantity": quantity
            })
                .then(() => {
                    const product = products.find(p => p.id === selectedProduct);
                    toast.success(`Stock added to ${product.name} successfully!`);
                    fetchProducts(); // Refresh the products table
                })
                .catch((error) => {
                    console.error("Error adding product:", error);
                    toast.error("Error adding product: " + error.message);
                });
        }
    };

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "30px"}}>
            <NavBar/>
            <ToastContainer/>
            <div style={{display: "flex", flexDirection: "column"}}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "30px"}}>
                    <h1>Add stock to product:</h1>
                    <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <p style={{fontSize: "1.5em"}} align={"center"}>
                                Choose product:
                            </p>
                            <select id="product-options" value={selectedProduct} onChange={handleChange}>
                                {products.map((option) => (
                                    <option key={option.id} value={option.id}>
                                        {option.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div style={{display: "flex", flexDirection: "column"}}>
                            <p style={{fontSize: "1.5em"}} align={"center"}>
                                Quantity:
                            </p>
                            <input
                                id="product-quantity"
                                type="number"
                                value={quantity}
                                onChange={handleQuantityChange}
                                min="0"
                            />
                        </div>

                        <button type="submit"
                                style={{backgroundColor: "white", color: "black", borderRadius: "5px"}}>
                            Add
                        </button>
                    </form>
                </div>

                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "30px",
                    marginTop: "50px"
                }}>
                    <h1>All Products:</h1>
                    <table style={{borderCollapse: "collapse", width: "80%", textAlign: "left"}}>
                        <thead>
                        <tr>
                            <th style={{border: "1px solid black", padding: "8px"}}>ID</th>
                            <th style={{border: "1px solid black", padding: "8px"}}>Name</th>
                            <th style={{border: "1px solid black", padding: "8px"}}>Stock Quantity</th>
                        </tr>
                        </thead>
                        <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td style={{border: "1px solid black", padding: "8px"}}>{product.id}</td>
                                <td style={{border: "1px solid black", padding: "8px"}}>{product.name}</td>
                                <td style={{border: "1px solid black", padding: "8px"}}>{product.stockQuantity}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AddProductPage;
