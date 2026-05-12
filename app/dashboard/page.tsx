"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function DashboardPage() {

  const [userName, setUserName] =
    useState("");

  useEffect(() => {

    const loggedIn =
      localStorage.getItem(
        "isLoggedIn"
      );

    if (!loggedIn) {

      window.location.href =
        "/login";

      return;
    }

    const savedUser =
      localStorage.getItem(
        "bubbleUser"
      );

    if (savedUser) {

      const parsed =
        JSON.parse(savedUser);

      setUserName(
        parsed.name
      );
    }

  }, []);

  const handleLogout = () => {

    localStorage.removeItem(
      "isLoggedIn"
    );

    window.location.href =
      "/";
  };

  return (

    <main className="min-h-screen bg-[#050816] text-white flex overflow-hidden">

      <aside className="w-[280px] border-r border-white/10 bg-black/20 p-6 hidden lg:flex flex-col">

        <h1 className="text-4xl font-black mb-14">

          LeoAI

        </h1>

        <div className="space-y-3">

          <Link
            href="/dashboard"
            className="block px-5 py-4 rounded-2xl bg-white/10"
          >

            Dashboard

          </Link>

          <Link
            href="/dashboard/projects"
            className="block px-5 py-4 rounded-2xl hover:bg-white/5 transition"
          >

            Projects

          </Link>

          <Link
            href="/dashboard/templates"
            className="block px-5 py-4 rounded-2xl hover:bg-white/5 transition"
          >

            Templates

          </Link>

          <Link
            href="/dashboard/account"
            className="block px-5 py-4 rounded-2xl hover:bg-white/5 transition"
          >

            Account

          </Link>

        </div>

        <div className="mt-auto">

          <button
            onClick={handleLogout}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 font-semibold"
          >

            Logout

          </button>

        </div>

      </aside>

      <section className="flex-1 p-10 lg:p-14 overflow-auto">

        <div className="mb-14">

          <h1 className="text-7xl font-black leading-none mb-5">

            Welcome back,

            <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">

              {userName || "Creator"}

            </span>

          </h1>

          <p className="text-zinc-400 text-xl">

            Continue building stunning AI-powered websites.

          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

            <h2 className="text-3xl font-bold mb-4">

              Create Website

            </h2>

            <p className="text-zinc-400 mb-8">

              Start building new AI-powered websites.

            </p>

            <Link
              href="/"
              className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 font-semibold"
            >

              Open Workspace

            </Link>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

            <h2 className="text-3xl font-bold mb-4">

              Your Projects

            </h2>

            <p className="text-zinc-400">

              Saved projects and websites will appear here.

            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

            <h2 className="text-3xl font-bold mb-4">

              AI Templates

            </h2>

            <p className="text-zinc-400">

              Explore premium AI-generated templates.

            </p>

          </div>

        </div>

      </section>

    </main>
  );
}