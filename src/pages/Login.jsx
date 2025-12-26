import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../Api/Api";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const loginMutation = useMutation({
    mutationFn:(form)=> login(form),
    onSuccess: (data) => {
      if(data){
        console.log("Login success:", data);
  
        // Example: save token
        localStorage.setItem("accessToken", data?.accessToken);
  
        navigate("/profile"); // redirect after login
      }
    },
    onError: (error) => {
      console.error("Login failed:", error);
      alert(error?.response?.data?.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    loginMutation.mutate(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
          <p className="text-gray-400 mt-2">Login to continue</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
              placeholder="user1"
              className="w-full px-4 py-3 rounded-xl bg-black/40 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl bg-black/40 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-300">
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
                className="accent-indigo-500"
              />
              Remember me
            </label>

            <NavLink
              to="/forgot-password"
              className="text-indigo-400 hover:underline"
            >
              Forgot password?
            </NavLink>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loginMutation.isPending}
            className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition font-semibold text-white disabled:opacity-50"
          >
            {loginMutation.isPending ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Don’t have an account?{" "}
          <NavLink to="/register" className="text-indigo-400 hover:underline">
            Sign up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
