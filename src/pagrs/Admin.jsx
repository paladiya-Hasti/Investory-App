import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../context/ProductContext"; 

const AdminPanel = () => {
  const { products, setProducts } = useProductContext(); 
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        console.log(data); 
        setProducts(data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  
    fetchProducts();
  }, [setProducts]);

  const handleDelete = (id) => {
    
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { name, img, price };
    setProducts([...products, newProduct]);
    setName("");
    setImg("");
    setPrice("");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md mb-8">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="url"
            placeholder="Image URL"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="mt-8 bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Add Product
          </button>
          <button
            type="button"
            onClick={() => navigate("/products")}
            className="ml-4 bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 transition"
          >
            View Products
          </button>
        </form>
      </div>

      {/* Product List */}
      <div className="bg-white shadow-md rounded-lg p-8 ">
        <h2 className="text-2xl font-bold mb-6">Product List</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Array.isArray(products) && products.length > 0 ? (
            products.map((product) => (
              <li key={product.id} className="flex items-center space-x-4 bg-white p-4 shadow-md rounded-md">
                <img
                  src={product.thumbnail || product.img}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{product.title}</h3>
                  <p className="text-gray-500">Price: ${product.price}</p>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleDelete(product.id)} // Pass the product id to the delete function
                      className="bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                    <button className="bg-yellow-600 text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-700 transition">
                      Edit
                    </button>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <p className="text-gray-500">No products available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};
}

export default AdminPanel
