"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSignup = () => {

    const userData = {

      name: name.trim(),

      email: email.trim(),

      password: password.trim(),
    };

    localStorage.setItem(
      "bubbleUser",
      JSON.stringify(userData)
    );

    alert(
      "Account created successfully!"
    );

    window.location.href =
      "/login";
  };

  return (

    <main className="min-h-screen flex items-center justify-center bg-[#050816] text-white px-6">

      <div className="w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-10">

        <h1 className="text-4xl font-black mb-8">

          Create Account

        </h1>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 outline-none"
          />

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
            onClick={handleSignup}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 font-semibold"
          >

            Create Account

          </button>

        </div>

        <p className="text-zinc-400 text-center mt-8">

          Already have an account?{" "}

          <Link
            href="/login"
            className="text-white font-semibold"
          >
            Login
          </Link>

        </p>

      </div>

    </main>
  );
}