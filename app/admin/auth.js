"use client";

export function loginAdmin(username, password) {
  const TEMP_USERNAME = "admin@1234";
  const TEMP_PASSWORD = "Admin@1234";

  if (username === TEMP_USERNAME && password === TEMP_PASSWORD) {
    // Save session
    localStorage.setItem("adminLoggedIn", "true");
    return true;
  }

  return false;
}
