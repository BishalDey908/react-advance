import React from "react";
import { NavLink } from "react-router-dom";

const UserCard = ({
  user,
  onView,
  onMessage,
  variant = "default", // default | compact
}) => {
  if (!user) return null;

  return (
    <NavLink to={`/user/${user?.id}`}>
      <div
        className={`
        rounded-2xl p-5 border border-white/10
        bg-white/5 backdrop-blur-xl shadow-lg
        flex items-center gap-4
        ${variant === "compact" ? "p-4" : "p-5"}
      `}
      >
        {/* Avatar */}
        <img
          src={user.image}
          alt={user.username}
          className="w-14 h-14 rounded-full object-cover border border-white/20"
        />

        {/* Info */}
        <div className="flex-1">
          <h3 className="text-black font-semibold text-lg leading-tight">
            {user.username}
          </h3>
          <p className="text-gray-400 text-sm">{user.email}</p>

          {user.role && (
            <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400">
              {user.role}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          {onView && (
            <button
              onClick={() => onView(user)}
              className="px-3 py-1.5 text-sm rounded-lg bg-white/10 text-white hover:bg-white/20 transition"
            >
              View
            </button>
          )}

          {onMessage && (
            <button
              onClick={() => onMessage(user)}
              className="px-3 py-1.5 text-sm rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              Message
            </button>
          )}
        </div>
      </div>
    </NavLink>
  );
};

export default UserCard;
