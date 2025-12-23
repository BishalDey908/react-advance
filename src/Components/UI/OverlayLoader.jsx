import React from "react";

const OverlayLoader = ({ show = false, text = "Loading..." }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="h-14 w-14 rounded-full border-4 border-white/30 border-t-white animate-spin"></div>

        {/* Text */}
        <p className="text-white text-sm font-medium tracking-wide">
          {text}
        </p>
      </div>
    </div>
  );
};

export default OverlayLoader;
