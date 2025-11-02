import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // ✅ Use environment variable (better practice)
      const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

      const response = await axios.post(`${API_URL}/api/admin/login`, {
        email,
        password,
      });

      // ✅ Check backend response
      if (response.data?.admin) {
        localStorage.setItem("adminLoggedIn", "true");
        localStorage.setItem("admin", JSON.stringify(response.data.admin));

        navigate("/admin/dashboard");
      } else {
        setError("Invalid login credentials.");
      }
    } catch (err) {
      console.error("Login Error:", err.message);
      if (err.response) {
        // Server responded with a status code
        setError(err.response.data?.message || "Login failed. Try again.");
      } else if (err.request) {
        // Request was made but no response (like your current Network Error)
        setError("Cannot connect to the server. Please check if backend is running.");
      } else {
        // Something else happened
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xs sm:max-w-sm">
        <h2 className="text-2xl font-semibold text-center text-blue-700 mb-5">
          Admin Login 🧑‍💻
        </h2>

        <form onSubmit={handleLogin} className="space-y-3">
          {/* Email */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-600 text-xs font-medium text-center">
              {error}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
            } text-white py-2 rounded-md text-sm font-medium transition duration-200`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
