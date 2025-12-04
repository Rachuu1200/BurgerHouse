import { useState } from "react";
import { ShoppingCart } from "lucide-react";

export function FoodMenuItem({ item }) {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="w-1/2 sm:w-1/3 lg:w-1/4 xl:w-1/5 p-1">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100
                      hover:shadow-lg transition-all duration-300
                      p-2 flex flex-col h-[200px] sm:h-[260px] md:h-[300px] overflow-hidden">

        {/* IMAGE */}
        <div className="w-full flex justify-center">
          <div
            className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 xl:w-28 xl:h-28
                       rounded-xl overflow-hidden shadow-md hover:shadow-xl
                       bg-gray-100 transition-transform duration-500 hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="text-center mt-1 px-1 flex flex-col flex-1">

          {/* NAME */}
          <h3 className="text-[10px] sm:text-xs md:text-sm xl:text-base font-semibold text-gray-900 mb-1 leading-tight">
            {item.name}
          </h3>

          {/* PRICE */}
          <div className="flex justify-center mb-1">
            <span className="bg-orange-100 text-orange-700 font-semibold
                             px-2 py-0.5 rounded-full
                             text-[10px] sm:text-xs shadow-sm">
              ₹{item.price}
            </span>
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-500 text-[9px] sm:text-[10px] md:text-sm mb-1 leading-snug
                        min-h-[20px] sm:min-h-[25px] md:min-h-[35px]">
            {item.description}
          </p>

          {/* QUANTITY CONTROLS */}
          <div className="flex justify-center items-center mb-2 gap-2">
            <button
              onClick={decrement}
              className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full  hover:bg-gray-300 transition text-xs"
            >
              -
            </button>
            <span className="w-4 text-center text-xs">{quantity}</span>
            <button
              onClick={increment}
              className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full  hover:bg-gray-300 transition text-xs"
            >
              +
            </button>
          </div>

          {/* ADD TO CART BUTTON */}
          <button
            className="w-full text-white py-1 sm:py-1.5
                       rounded-xl transition shadow-md hover:shadow-lg
                       flex items-center justify-center
                       gap-1 sm:gap-2 font-semibold text-[9px] sm:text-[10px]
                       mt-1"
            style={{ background: "linear-gradient(90deg, rgb(255, 81, 47), rgb(221, 36, 118))" }}
          >
            <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />
            Add to cart
          </button>

        </div>
      </div>
    </div>
  );
}
