

import React from "react";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../context/ProductContext"; 

const ProductPage = () => {
  const { products, cart, setCart } = useProductContext(); 
  const navigate = useNavigate(); 

  const handleAddToCart = (product) => { const updatedCart = Array.isArray(cart) ? [...cart, product] : [product];
    setCart(updatedCart); 
    navigate("/cart");
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      {Array.isArray(products) && products.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <li
              key={index}
              className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center"
            >
              <img
                src={product.thumbnail || product.img || "default-image.jpg"} // Use a default image if none exists
                alt={product.name}
                className="w-48 h-48 object-cover rounded-md mb-4"
              />
              <div className="text-center">
                <p className="font-bold">{product.title}</p>
                <p className="text-gray-600">${product.price}</p>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-gray-600">Stock: {product.stock}</p>
                <p className="text-gray-600">Rating: {product.rating}</p>
                <button
                  onClick={() => handleAddToCart(product)} 
                  className="bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 transition"
                >
                  Add to cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No products available.</p>
      )}
    </div>
  );
};

export default ProductPage;
