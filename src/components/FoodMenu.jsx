import { useState } from "react";
import { Menu } from "lucide-react";
import { foodItems } from "./data";
import { FoodMenuItem } from "./FoodMenuItem";

const categories = ["Burger", "Momo", "Prawn", "Chicken", "Fish", "Dog", "Cheese"];

export default function FoodMenu() {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState(null);

  // Filter items by category
  const filteredItems = category
    ? foodItems.filter(item =>
        item.name.toLowerCase().includes(category.toLowerCase())
      )
    : foodItems;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex items-center justify-between bg-red-600 text-white px-6 py-4 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold">🍗 Chicken Burger House</h1>

        <button
          onClick={() => setOpen(!open)}
          className="bg-white/20 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-white/30 transition"
        >
          <Menu />
          Menu
        </button>
      </div>

      {/* Category Menu */}
      {open && (
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-xl shadow text-white font-medium transition ${
                category === cat ? "bg-red-700" : "bg-red-500 hover:bg-red-600"
              }`}
            >
              {cat}
            </button>
          ))}

          <button
            onClick={() => setCategory(null)}
            className="px-4 py-2 rounded-xl shadow bg-gray-500 text-white font-medium hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
      )}

      {/* Food Menu Items */}
      <div className="flex flex-wrap justify-center max-w-[1440px] mx-auto -m-1 mt-1">
        {filteredItems.map((item) => (
          <FoodMenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
