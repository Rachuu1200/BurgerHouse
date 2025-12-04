import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import foodItems2 from "./foodItems";

export default function FoodDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = foodItems2.find((f) => f.id === parseInt(id));

  if (!item) {
    return (
      <div className="p-6 min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-900">Item not found!</h1>
        <button
          className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  const [qty, setQty] = useState(1);
  const increase = () => setQty(qty + 1);
  const decrease = () => qty > 1 && setQty(qty - 1);

  // Always use cost price for total
  const totalCost = item.cost * qty;

  return (
    <div className="p-6 min-h-screen bg-gray-100 text-gray-900">
      {/* Back Button */}
      <button className="text-3xl mb-3" onClick={() => navigate(-1)}>←</button>

      {/* Food Image */}
      <div className="flex justify-center mb-6">
        <img
          src={item.image.startsWith("/") ? item.image : `/${item.image}`}
          alt={item.name}
          className="w-64 h-64 object-cover drop-shadow-xl rounded-xl"
        />
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-3 text-gray-900">{item.name}</h1>

      {/* Description */}
      <p className="text-gray-700 mb-6">{item.description}</p>

      {/* Quantity Selector */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4 bg-gray-200 px-5 py-3 rounded-full">
          <button className="text-2xl font-bold" onClick={decrease}>−</button>
          <span className="text-2xl">{qty}</span>
          <button className="text-2xl font-bold" onClick={increase}>+</button>
        </div>

        <div className="text-right">
          <p className="text-sm text-gray-700">Total Cost</p>
          <p className="text-2xl font-bold text-gray-900">Rs {totalCost}</p>
        </div>
      </div>

      {/* ADD TO CART */}
      <button
        className="w-full text-xl py-4 rounded-full font-bold text-white"
        style={{ background: "linear-gradient(90deg, #ff512f, #dd2476)" }}
      >
        Add to cart
      </button>
    </div>
  );
}
