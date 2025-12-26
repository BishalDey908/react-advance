import React, { useState } from "react";
import { fetchProducts } from "../Api/Api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import OverlayLoader from "../Components/UI/OverlayLoader";
import { NavLink } from "react-router-dom";
import ProductCard from "../Components/UI/ProductCard";
import Pagination from "../Components/UI/Pagination";

const LIMIT = 10;

const Home = () => {
  const [page, setPage] = useState(1);

  const skip = (page - 1) * LIMIT;
  const fetchProductsData = () => {
    const res = fetchProducts({ limit: LIMIT, skip });
    return res;
  };

  const {
    data = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products", page, skip],
    queryFn: fetchProductsData,
    placeholderData: keepPreviousData,
  });

  if (isLoading)
    return <OverlayLoader show={true} text="Loading products..." />;

  if (isError)
    return (
      <p className="text-center text-red-500 mt-20">
        Failed to load products. Please try again.
      </p>
    );

  console.log("sadsa", data);

  return (
    <main className="w-full bg-gray-50 min-h-screen pt-16">
      {/* ================= HEADER ================= */}
      <section className="py-16 bg-black text-white text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">Our Products</h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Explore high-quality products crafted with precision and modern
          design.
        </p>
      </section>

      {/* ================= PRODUCT GRID ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {data.length === 0 ? (
            <p className="text-center text-gray-500">No products available.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.products.map((product) => (
                <ProductCard
                  key={product.id} // ✅ VERY IMPORTANT
                  product={product}
                  onAddToCart={(item) => console.log("Add to cart:", item)}
                />
              ))}
            </div>
          )}
        </div>

        <Pagination
          totalItems={data.total}
          limit={LIMIT}
          currentPage={page}
          onPageChange={setPage}
        />
      </section>
    </main>
  );
};

export default Home;
