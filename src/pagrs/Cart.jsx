

import React, { useContext, useState } from "react";
import { useProductContext } from "../context/ProductContext"; 
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, setCart } = useProductContext(); 
  const navigate = useNavigate();
  const [isOrderFormVisible, setIsOrderFormVisible] = useState(false); 
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    paymentMethod: "",
  });

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart); 
  };

  const handleCheckout = () => {
    
    navigate("/checkout");
  };

  const handleOrderNowClick = () => {
    setIsOrderFormVisible(true); 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); 
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
   
    alert("Order placed successfully!");
    setIsOrderFormVisible(false);
  };

  const handleADDSubmitOrder = (e) => {
    e.preventDefault();
   
    alert("Order placed successfully!");
    navigate("/products"); 
  
    setIsOrderFormVisible(false); 
  }
  
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cart.length > 0 ? (
        <ul className="space-y-4">
          {cart.map((product, index) => (
            <li
              key={index}
              className="bg-white p-4 shadow-md rounded-lg flex justify-between items-center"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={product.thumbnail || product.img} // Display product image
                  alt={product.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <p className="font-semibold">{product.title}</p>
                  <p className="text-gray-600">${product.price}</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleRemoveFromCart(product.id)} // Remove item from cart
                  className="bg-red-600 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 transition"
                >
                  Remove
                </button>
                <button
                  onClick={handleOrderNowClick} // Show order form
                  className="bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 transition"
                >
                  Order Now
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">Your cart is empty.</p>
      )}

      {cart.length > 0 && (
        <div className="mt-8">
          <button
            onClick={handleCheckout}
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Proceed to Checkout
          </button>
        </div>
      )}

      {/* Order Form (visible when isOrderFormVisible is true) */}
      {isOrderFormVisible && (
        <div className="mt-8 bg-white p-6 shadow-md rounded-md">
          <h2 className="text-xl font-bold mb-4">Place Your Order</h2>
          <form onSubmit={handleSubmitOrder} className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
           
            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition"
             onClick={handleADDSubmitOrder}>
              Submit Order
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CartPage;