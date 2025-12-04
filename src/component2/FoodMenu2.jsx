import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import foodItems2 from "./foodItems";

export default function FoodMenu2() {
  const navigate = useNavigate();

  const categories = ["Chicken", "Mo:Mo", "Prawn", "Burger", "Fish", "Hot Dog", "Cheese"];
  const [activeCategory, setActiveCategory] = useState("Chicken");
  const [showAll, setShowAll] = useState(false);

  // Map categories to images
  const categoryImages = {
    Chicken: "chicken.png",
    "Mo:Mo": "momo.jpg",
    Prawn: "prawn.jpg",
    Burger: "burger.jpg",
    Fish: "fish2.jpg",
    "Hot Dog": "hot dog.jpg",
    Cheese: "cheesee.jpg",
  };

  const filteredTopItems = foodItems2.filter(
    (item) => item.category === activeCategory
  );

  const bottomItems = showAll ? foodItems2 : foodItems2.slice(0, 5);

  // Button click handler
  const handleAddToCart = (item) => {
    console.log("Add to cart:", item);
    // Add your cart logic here
  };

  // Button component
  const Button = ({ onClick }) => (
    <button
      onClick={(e) => {
        e.stopPropagation(); // prevent card navigation
        onClick();
      }}
      className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold hover:scale-110 transition-transform"
    >
      +
    </button>
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-2 text-gray-900">Chicken Burger House</h1>
      <p className="text-gray-700 mb-6">It's a Taste Revolution!</p>
{/* CATEGORY FILTER WITH CLICKABLE IMAGES ONLY */}
<div className="flex gap-3 sm:gap-4 mb-6 overflow-x-auto whitespace-nowrap px-2">
  {categories.map((category) => (
    <div
      key={category}
      className="flex flex-col items-center p-2 sm:p-3"
    >
      <div
        onClick={() => setActiveCategory(category)}
        className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-gray-300 mb-1 cursor-pointer ${
          activeCategory === category ? "border-red-500" : ""
        }`}
      >
        <img
          src={categoryImages[category]}
          alt={category}
          className="w-full h-full object-cover"
        />
      </div>
      <span className="text-xs sm:text-sm font-semibold text-gray-900">
        {category}
      </span>
    </div>
  ))}
</div>



      {/* TOP FILTERED GRID WITH + BUTTON */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
        {filteredTopItems.map((item) => (
          <motion.div
            key={item.id}
            onClick={() => navigate(`/food/${item.id}`)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl p-3 shadow-xl cursor-pointer w-full h-60 flex flex-col justify-between"
            style={{
              background: "#ffffff",
              border: "2px solid transparent",
              borderImage: "linear-gradient(135deg, #f33, #fc0) 1",
            }}
          >
            <div>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-20 object-cover rounded-xl mb-2"
              />
              <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
              <p className="text-gray-700 text-xs mb-1">{item.description}</p>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-md font-bold text-gray-900">Rs {item.cost}</span>
              <Button onClick={() => handleAddToCart(item)} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* FULL MENU SECTION */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900">Menu</h2>
        <span
          onClick={() => setShowAll(!showAll)}
          className="text-gray-600 text-sm cursor-pointer"
        >
          {showAll ? "Hide" : "See all"}
        </span>
      </div>

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
                <p className="font-semibold text-gray-900 text-sm">Rs {item.cost}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
