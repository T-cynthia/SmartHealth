import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NurseLogin = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/nurse/login",
        { phone, password }
      );

      if (response.status === 200) {
        localStorage.setItem("NurseLoggedIn", "true");
        localStorage.setItem("NurseInfo", JSON.stringify(response.data.nurse));
        navigate("/nurse/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xs sm:max-w-sm">
        <h2 className="text-2xl font-semibold text-center text-blue-700 mb-5">
          Nurse Login 💉
        </h2>

        <form onSubmit={handleLogin} className="space-y-3">
          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-gray-700 text-sm font-medium mb-1"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+2507XXXXXXXX"
              required
              className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-1.5 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default NurseLogin;
