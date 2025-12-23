import React from "react";
import { fetchPostsData } from "../../Api/Api";
import { useQuery } from "@tanstack/react-query";
import OverlayLoader from "../UI/OverlayLoader";

const Home = () => {
  const fetchPosts = async () => {
    try {
      const res = await fetchPostsData();
      return res?.status === 200 ? res?.data : [];
    } catch (err) {
      return [];
    }
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <OverlayLoader show={isLoading} text="Loading..." />;

  console.log("sadas",isError)

  return (
    <>
      {isError && (
        <p className="text-center text-red-500 mt-10">Something went wrong</p>
      )}
      {!isError && (
        <main className="w-full">
          {/* ================= HERO SECTION ================= */}
          <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Build Modern Experiences
                <span className="block text-gray-300 mt-2">
                  With Clean UI & Scalable Code
                </span>
              </h1>

              <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
                We craft high-performance web applications using modern
                technologies, beautiful design systems, and best engineering
                practices.
              </p>

              <div className="mt-8 flex justify-center gap-4 flex-wrap">
                <button className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition">
                  Get Started
                </button>

                <button className="px-6 py-3 rounded-full border border-white/40 text-white hover:bg-white/10 transition">
                  Learn More
                </button>
              </div>
            </div>
          </section>

          {/* ================= FEATURES ================= */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
                Why Choose Us
              </h2>

              <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
                Everything you need to build fast, secure, and beautiful digital
                products.
              </p>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {data?.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
                  >
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ================= CTA ================= */}
          <section className="py-20 bg-black text-white">
            <div className="max-w-5xl mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Start Your Project?
              </h2>

              <p className="mt-4 text-gray-400 max-w-xl mx-auto">
                Let’s turn your idea into a powerful digital experience.
              </p>

              <button className="mt-8 px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition">
                Contact Us
              </button>
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default Home;
