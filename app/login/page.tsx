"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = () => {

    const savedUser =
      localStorage.getItem(
        "bubbleUser"
      );

    if (!savedUser) {

      alert(
        "No account found"
      );

      return;
    }

    const user =
      JSON.parse(savedUser);

    if (

      user.email === email.trim()

      &&

      user.password === password.trim()
    ) {

      localStorage.setItem(
        "isLoggedIn",
        "true"
      );

      alert(
        "Login successful!"
      );

      window.location.href =
        "/dashboard";

    } else {

      alert(
        "Invalid credentials"
      );
    }
  };

  return (

    <main className="min-h-screen flex items-center justify-center bg-[#050816] text-white px-6">

      <div className="w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-10">

        <h1 className="text-4xl font-black mb-8">

          Welcome Back

        </h1>

        <div className="space-y-5">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 outline-none"
          />

          <button
            onClick={handleLogin}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 font-semibold"
          >

            Login

          </button>

        </div>

        <p className="text-zinc-400 text-center mt-8">

          Don’t have an account?{" "}

          <Link
            href="/signup"
            className="text-white font-semibold"
          >
            Sign Up
          </Link>

        </p>

      </div>

    </main>
  );
}