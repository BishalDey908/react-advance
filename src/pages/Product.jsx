import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchSingleProduct } from "../Api/Api";
import OverlayLoader from "../Components/UI/OverlayLoader";

const Product = () => {
  const { id } = useParams();
  const [qty, setQty] = useState(1);

  const fetchSingleProductData = (id) => {
    const res = fetchSingleProduct(id);
    return res;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchSingleProductData(id),
  });

  if (isLoading)
    return <OverlayLoader show={true} text="Loading product..." />;

  if (isError || !data)
    return (
      <p className="text-center text-red-500 mt-20">
        Failed to load product. Please try again.
      </p>
    );

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* ================= IMAGE ================= */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <img
              src={data.images[0] || "/placeholder.png"}
              alt={data.title}
              className="w-full h-[420px] object-contain"
            />
          </div>

          {/* ================= DETAILS ================= */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {data.title}
              </h1>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {data.description || data.body}
              </p>

              {/* PRICE */}
              <div className="mt-6 flex items-center gap-4">
                <span className="text-3xl font-extrabold text-black">
                  ₹{data.price || 999}
                </span>
                <span className="text-sm text-green-600 bg-green-100 px-3 py-1 rounded-full">
                  In Stock
                </span>
              </div>

              {/* QUANTITY */}
              <div className="mt-6 flex items-center gap-4">
                <span className="text-gray-700 font-medium">Quantity</span>
                <div className="flex items-center border rounded-full overflow-hidden">
                  <button
                    onClick={() => setQty((p) => Math.max(1, p - 1))}
                    className="px-4 py-2 text-lg hover:bg-gray-100"
                  >
                    −
                  </button>
                  <span className="px-4 font-semibold">{qty}</span>
                  <button
                    onClick={() => setQty((p) => p + 1)}
                    className="px-4 py-2 text-lg hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-10 flex gap-4 flex-wrap">
              <button className="px-8 py-4 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition">
                Add to Cart
              </button>

              <button className="px-8 py-4 rounded-full border border-black text-black font-semibold hover:bg-black hover:text-white transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* ================= EXTRA INFO ================= */}
        <div className="mt-20 bg-white rounded-3xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Product Details</h2>
          <ul className="space-y-3 text-gray-600">
            <li>✔ Premium quality materials</li>
            <li>✔ Modern & minimal design</li>
            <li>✔ 7-day replacement guarantee</li>
            <li>✔ Fast & secure checkout</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Product;
