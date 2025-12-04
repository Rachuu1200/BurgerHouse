import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import foodItems2 from "./foodItems";

export default function FoodMenu2() {
  const navigate = useNavigate();

  // REMOVE "All" category
  const categories = ["Chicken", "Mo:Mo", "Prawn", "Burger", "Fish", "Hot Dog", "Cheese"];

  const [activeCategory, setActiveCategory] = useState("Chicken");
  const [showAll, setShowAll] = useState(false);

  // ---------- TOP FILTERED ITEMS ----------
  const filteredTopItems = foodItems2.filter(
    (item) => item.category === activeCategory
  );

  // ---------- BOTTOM MENU ----------
  const bottomItems = showAll ? foodItems2 : foodItems2.slice(0, 5);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold mb-2 text-gray-900">Chicken Burger House</h1>
      <p className="text-gray-700 mb-6">It's a Taste Revolution!</p>

      {/* CATEGORY FILTER */}
    <div className="flex gap-4 mb-6 text-lg font-semibold overflow-x-auto whitespace-nowrap">

        {categories.map((category) => (
          <span
            key={category}
            className={`pb-1 ${
              activeCategory === category
                ? "text-red-500 border-b-2 border-red-500"
                : ""
            }`}
            onClick={() => setActiveCategory(category)}
            style={{ cursor: "pointer" }}
          >
            {category}
          </span>
        ))}
      </div>

      {/* ---------- TOP FILTERED GRID (clickable) ---------- */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
        {filteredTopItems.map((item) => (
          <motion.div
            key={item.id}
            onClick={() => navigate(`/food/${item.id}`)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl p-3 shadow-xl cursor-pointer w-full h-60"
            style={{
              background: "#ffffff",
              border: "2px solid transparent",
              borderImage: "linear-gradient(135deg, #f33, #fc0) 1",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-20 object-cover rounded-xl mb-2"
            />
            <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
            <p className="text-gray-700 text-xs mb-1">{item.description}</p>

            <span className="text-md font-bold text-gray-900">Rs {item.cost}.00</span>
          </motion.div>
        ))}
      </div>

      {/* FULL MENU SECTION */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900">Menu</h2>

        {/* TOGGLE BUTTON */}
        <span
          onClick={() => setShowAll(!showAll)}
          className="text-gray-600 text-sm cursor-pointer"
        >
          {showAll ? "Hide" : "See all"}
        </span>
      </div>

      {/* ---------- BOTTOM MENU (clickable) ---------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {bottomItems.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/food/${item.id}`)}
            className="text-black rounded-2xl shadow-lg cursor-pointer"
            style={{
              background: "#ffffff",
              border: "2px solid transparent",
              borderImage: "linear-gradient(135deg, #f33, #fc0) 1",
            }}
          >
            <div className="flex items-center justify-between p-2">
              <div className="flex items-center gap-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded-xl"
                />
                <div>
                  <h3 className="text-md font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-xs text-gray-700">{item.category}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-semibold text-gray-900 text-sm">Rs {item.cost}.00</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
