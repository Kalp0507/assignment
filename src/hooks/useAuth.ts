// /hooks/useAuth.ts
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type User = {
  email: string;
  password: string;
};

export function useAuth() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load session from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Mock signup
  const signup = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        // Example: fail if email already exists
        if (localStorage.getItem("user")) {
          setError("User already exists. Please login.");
          setLoading(false);
          reject("User exists");
        } else {
          const newUser = { email, password };
          localStorage.setItem("user", JSON.stringify(newUser));
          setUser(newUser);
          setLoading(false);
          resolve();
        }
      }, 1000);
    });
  };

  // Mock login
  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          const parsed = JSON.parse(storedUser);
          if (parsed.email === email && parsed.password === password) {
            setUser(parsed);
            setLoading(false);
            resolve();
          } else {
            setError("Invalid email or password");
            setLoading(false);
            reject("Invalid credentials");
          }
        } else {
          setError("No user found. Please sign up first.");
          setLoading(false);
          reject("No user");
        }
      }, 1000);
    });
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/auth/login");
  };

  return {
    user,
    loading,
    error,
    signup,
    login,
    logout,
  };
}
