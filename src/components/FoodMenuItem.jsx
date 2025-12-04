import { ShoppingCart } from "lucide-react";

export function FoodMenuItem({ item }) {
  return (
    <div
      className="w-1/2 sm:w-1/3 lg:w-1/4 xl:w-1/5 p-1.5"

    >
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100
                      hover:shadow-lg transition-all duration-300
                      p-2.5 sm:p-3 flex flex-col h-full">
        {/* IMAGE */}
        <div className="w-full flex justify-center -mt-4">
          <div
            className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 xl:w-40 xl:h-40
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
        <div className="text-center mt-2 sm:mt-3 px-1 flex flex-col flex-1">
          {/* NAME */}
          <h3 className="text-sm sm:text-base md:text-lg xl:text-xl font-semibold text-gray-900 mb-1 leading-tight">
            {item.name}
          </h3>

          {/* PRICE */}
          <div className="flex justify-center mb-1.5">
            <span
              className="bg-green-100 text-green-700 font-semibold
                         px-2 py-1 rounded-full
                         text-xs sm:text-sm shadow-sm"
            >
              ₹{item.price}
            </span>
          </div>

          {/* DESCRIPTION */}
          <p
            className="text-gray-500 text-xs sm:text-sm mb-3 leading-snug
                       min-h-[38px] sm:min-h-[45px] md:min-h-[55px]"
          >
            {item.description}
          </p>

          {/* BUTTON */}
          <button
            className="w-full text-white py-2 sm:py-2.5
                       rounded-xl hover:from-green-600 hover:to-green-700
                       transition shadow-md hover:shadow-lg
                       flex items-center justify-center
                       gap-2 font-semibold text-xs sm:text-sm"
            style={{ background: "linear-gradient(135deg, #f33, #fc0)" }} // Custom button gradient
          >
            <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
