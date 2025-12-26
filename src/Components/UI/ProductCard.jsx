import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ProductCard = ({
  product,

  /* ===== Style Props ===== */
  cardClass = "bg-white rounded-3xl shadow-sm hover:shadow-xl transition overflow-hidden group",
  imageWrapperClass = "relative h-52 bg-gray-100 overflow-hidden",
  imageClass = "w-full h-full object-cover transition duration-300 group-hover:scale-110",
  contentClass = "p-5",
  titleClass = "text-lg font-semibold text-gray-900 line-clamp-1",
  descriptionClass = "mt-2 text-sm text-gray-500 line-clamp-2",
  priceClass = "text-xl font-bold text-black",
  addToCartClass = "px-4 py-2 rounded-full bg-black text-white text-sm hover:bg-gray-800 transition",
  viewButtonClass = "mt-3 w-full text-sm text-gray-700 border border-gray-300 rounded-full py-2 hover:bg-gray-100 transition",

  /* ===== Behavior Props ===== */
  showAddToCart = true,
  showViewDetails = true,
  onAddToCart = () => {},
}) => {
  if (!product) return null;

  const images = product.images?.length
    ? product.images
    : ["/placeholder.png"];

  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className={cardClass}>
      {/* ================= IMAGE ================= */}
      <div className={imageWrapperClass}>
        <img
          src={activeImage}
          alt={product.title}
          className={imageClass}
        />

        {/* THUMBNAILS (Optional UI) */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            {images.slice(0, 4).map((img, idx) => (
              <button
                key={idx}
                onMouseEnter={() => setActiveImage(img)}
                className={`h-2.5 w-2.5 rounded-full ${
                  activeImage === img ? "bg-black" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* ================= CONTENT ================= */}
      <div className={contentClass}>
        <h3 className={titleClass}>{product.title}</h3>

        <p className={descriptionClass}>
          {product.description || "No description available"}
        </p>

        {/* PRICE + CTA */}
        <div className="mt-4 flex items-center justify-between">
          <span className={priceClass}>₹{product.price || 999}</span>

          {showAddToCart && (
            <button
              className={addToCartClass}
              onClick={() => onAddToCart(product)}
            >
              Add to Cart
            </button>
          )}
        </div>

        {/* VIEW DETAILS */}
        {showViewDetails && (
          <NavLink to={`/product/${product.id}`}>
            <button className={viewButtonClass}>
              View Details
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
