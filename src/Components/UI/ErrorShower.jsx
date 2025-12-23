import React from "react";
import { FiAlertTriangle } from "react-icons/fi";

const ErrorShower = ({
  title = "Something went wrong",
  message = "An unexpected error occurred. Please try again.",
  onRetry,
}) => {
  return (
    <div className="w-full flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full bg-red-50 border border-red-200 rounded-2xl p-6 text-center shadow-sm">
        {/* Icon */}
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-600">
          <FiAlertTriangle className="text-2xl" />
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold text-red-700">
          {title}
        </h2>

        {/* Message */}
        <p className="mt-2 text-sm text-red-600">
          {message}
        </p>

        {/* Retry Button */}
        {onRetry && (
          <button
            onClick={onRetry}
            className="mt-5 px-5 py-2 rounded-full bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition"
          >
            Retry
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorShower;
