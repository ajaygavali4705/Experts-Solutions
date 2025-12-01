"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const TEMP_USER = "admin@1234";
  const TEMP_PASS = "Admin@1234";

 const handleLogin = () => {
  if (username === TEMP_USER && password === TEMP_PASS) {
 document.cookie =
 "adminLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
router.replace("/admin");

  } else {
    setError("Invalid Username or Password");
  }
};


  return (
    <div className="flex items-center justify-center h-screen px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Admin Login
        </h2>

        <label className="block mb-2 font-medium">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border px-3 py-2 rounded-md mb-4"
        />

        <label className="block mb-2 font-medium">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border px-3 py-2 rounded-md mb-4"
        />

        {error && (
          <p className="text-red-600 text-sm mb-3 text-center">{error}</p>
        )}

        <button
          onClick={handleLogin}
          className="w-full bg-[#A72028] text-white py-2 rounded-md hover:bg-[#8f1c23]"
        >
          Login
        </button>
      </div>
    </div>
  );
}
