import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { singleUserData } from "../Api/Api";
import OverlayLoader from "../Components/UI/OverlayLoader";

const User = () => {
  const { id } = useParams();
 

  const getUserData = (id) => {
    const userData = singleUserData(id);
    return userData;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUserData(id),
  });

  const user = data;

  if (isLoading) return <OverlayLoader show={true} text="Loading product..." />;

  if (isError || !data)
    return (
      <p className="text-center text-red-500 mt-20">
        Failed to load product. Please try again.
      </p>
    );

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 py-10 px-4 pt-24">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* ================= HEADER ================= */}
        <div className="bg-gray-900 rounded-3xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-lg">
          <img
            src={user.image || "/avatar.png"}
            alt={user.firstName}
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500"
          />

          <div className="text-center md:text-left">
            <h1 className="text-2xl font-semibold">
              {user.firstName} {user.lastName}
            </h1>
            <p className="text-gray-400">@{user.username} &nbsp; &nbsp; pass-{user?.password}</p>

            <div className="mt-3 flex flex-wrap justify-center md:justify-start gap-2">
              <Badge text={user.role} />
              <Badge text={user.gender} />
              <Badge text={`Age ${user.age}`} />
            </div>
          </div>
        </div>

        {/* ================= BASIC INFO ================= */}
        <Section title="Basic Information">
          <Info label="Email" value={user.email} />
          <Info label="Phone" value={user.phone} />
          <Info label="Birth Date" value={user.birthDate} />
          <Info label="Blood Group" value={user.bloodGroup} />
          <Info label="Eye Color" value={user.eyeColor} />
          <Info label="Hair" value={`${user.hair.color}, ${user.hair.type}`} />
        </Section>

        {/* ================= ADDRESS ================= */}
        <Section title="Address">
          <Info label="Street" value={user.address.address} />
          <Info
            label="Location"
            value={`${user.address.city}, ${user.address.state} (${user.address.stateCode})`}
          />
          <Info label="Country" value={user.address.country} />
          <Info label="Postal Code" value={user.address.postalCode} />
        </Section>

        {/* ================= COMPANY ================= */}
        <Section title="Company">
          <Info label="Company Name" value={user.company.name} />
          <Info label="Department" value={user.company.department} />
          <Info label="Title" value={user.company.title} />
          <Info
            label="Office Location"
            value={`${user.company.address.city}, ${user.company.address.state}`}
          />
        </Section>

        {/* ================= BANK ================= */}
        <Section title="Bank Details">
          <Info label="Card Type" value={user.bank.cardType} />
          <Info label="Currency" value={user.bank.currency} />
          <Info label="Card Expiry" value={user.bank.cardExpire} />
          <Info label="IBAN" value={user.bank.iban} />
        </Section>

        {/* ================= CRYPTO ================= */}
        <Section title="Crypto Wallet">
          <Info label="Coin" value={user.crypto.coin} />
          <Info label="Network" value={user.crypto.network} />
          <Info label="Wallet" value={user.crypto.wallet} />
        </Section>
      </div>
    </div>
  );
};

export default User;

/* ================= REUSABLE COMPONENTS ================= */

const Section = ({ title, children }) => (
  <div className="bg-gray-900 rounded-3xl p-6 shadow-md">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    <div className="grid md:grid-cols-2 gap-4">{children}</div>
  </div>
);

const Info = ({ label, value }) => (
  <div className="bg-gray-800 rounded-xl p-4">
    <p className="text-sm text-gray-400">{label}</p>
    <p className="text-base break-all">{value}</p>
  </div>
);

const Badge = ({ text }) => (
  <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-600/20 text-indigo-400 border border-indigo-600/30">
    {text}
  </span>
);
