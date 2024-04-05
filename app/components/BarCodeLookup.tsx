"use client";
import React, { useState } from "react";

const BarcodeSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [productData, setProductData] = useState({});
  const apiKey = "79D52942231D0BCE2BF0B48F20FD35E5"; // Replace with your actual API key

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior

    if (!searchTerm) return; // Don't call API if search term is empty

    try {
      const response = await fetch(
        `https://api.upcdatabase.org/product/${searchTerm}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      
      if (response.ok) {
        const data = await response.json();
        setProductData(data);
      } else {
        console.error("API request failed with status:", response.status);
        // Handle error appropriately, e.g., display an error message to the user
      }
    } catch (error) {
      console.error("Error fetching product data:", error);
      // Handle network errors or other unexpected issues
    }
  };

  return (
    <div className="barcode-search">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search by UPC or EAN Number:</label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Enter UPC or EAN..."
        />
        <button type="submit">Search</button>
      </form>
      {Object.keys(productData).length > 0 && (
        <div className="product-details">
          <h2>{productData.title}</h2>
          <p>Brand: {productData.brand}</p>
          <p>Description: {productData.description}</p>
          {/* Display other relevant data from productData */}
        </div>
      )}
    </div>
  );
};

export default BarcodeSearch;
