import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ParentLogin = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/newborns/parent", {
        name: fullName,
        phone,
      });

      if (res.data.length > 0) {
        localStorage.setItem("parentLoggedIn", "true");
        localStorage.setItem(
          "parent",
          JSON.stringify({ name: fullName, phone })
        );
        navigate("/parent/dashboard");
      } else {
        alert("No baby found for this parent.");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xs sm:max-w-sm">
        <h2 className="text-2xl font-semibold text-center text-blue-700 mb-5">
          Parent Login 👨‍👩‍👧
        </h2>

        <form onSubmit={handleLogin} className="space-y-3">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Your full name"
              required
              className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. 078XXXXXXX"
              required
              className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Login Button */}
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

export default ParentLogin;
