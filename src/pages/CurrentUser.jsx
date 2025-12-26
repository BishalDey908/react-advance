import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { currentuserData } from "../Api/Api";
import OverlayLoader from "../Components/UI/OverlayLoader";
import { useNavigate } from "react-router-dom";

const CurrentUser = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  /* ================= FETCH CURRENT USER ================= */
  const getCurrentUser = () => {
     const useData =  currentuserData();
     return useData
  };

  /* ================= LOGOUT ================= */
  const logOutFunction = () => {
    localStorage.removeItem("accessToken");

    // Clear cached user data
    queryClient.removeQueries({ queryKey: ["currentUser"] });

    // Redirect immediately
    navigate("/login", { replace: true });
  };

  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
    retry: false,
  });

  if (isLoading) return <OverlayLoader show={true} text="Loading profile..." />;

  if (isError || !user)
    return (
      <p className="text-center text-red-500 mt-20">
        Failed to load profile. Please login again.
      </p>
    );

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 px-4 py-10 pt-20">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* ================= PROFILE HEADER ================= */}
        <div className="bg-gray-900 rounded-3xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-lg">
          <img
            src={user.image}
            alt={user.username}
            className="w-28 h-28 rounded-full object-cover border-4 border-indigo-500"
          />

          <div className="text-center md:text-left flex-1">
            <h1 className="text-2xl font-semibold">
              {user.firstName} {user.lastName}
            </h1>
            <p className="text-gray-400">@{user.username}</p>

            <div className="mt-3 flex justify-center md:justify-start gap-2">
              <Badge text={user.gender} />
            </div>
          </div>

          <button className="bg-indigo-600 hover:bg-indigo-500 transition px-5 py-2 rounded-full text-sm font-medium">
            Edit Profile
          </button>
        </div>

        {/* ================= ACCOUNT INFO ================= */}
        <Section title="Account Information">
          <Info label="Username" value={user.username} />
          <Info label="Email" value={user.email} />
          <Info label="User ID" value={user.id} />
        </Section>

        {/* ================= SECURITY ================= */}
        <Section title="Security" >
          <ActionButton text="Change Password" />
          <ActionButton className="cursor-pointer" onClick={logOutFunction} text="Logout" danger />
        </Section>
      </div>
    </div>
  );
};

export default CurrentUser;

/* ================= REUSABLE COMPONENTS ================= */

const Section = ({ title, children }) => (
  <div className="bg-gray-900 rounded-3xl p-6 shadow-md">
    <h2 className="text-lg font-semibold mb-4">{title}</h2>
    <div className="grid md:grid-cols-2 gap-4">{children}</div>
  </div>
);

const Info = ({ label, value }) => (
  <div className="bg-gray-800 rounded-xl p-4">
    <p className="text-xs text-gray-400">{label}</p>
    <p className="text-sm font-medium break-all">{value}</p>
  </div>
);

const Badge = ({ text }) => (
  <span className="px-3 py-1 text-xs rounded-full bg-indigo-600/20 text-indigo-400 border border-indigo-600/30">
    {text}
  </span>
);

const ActionButton = ({ text, danger, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full md:w-auto px-5 py-2 rounded-xl text-sm font-medium transition
      ${
        danger
          ? "bg-red-600/20 text-red-400 border border-red-600/30 hover:bg-red-600/30"
          : "bg-gray-800 hover:bg-gray-700"
      }`}
  >
    {text}
  </button>
);
