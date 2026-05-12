"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {

  const [loggedIn, setLoggedIn] =
    useState(false);

  const [businessName, setBusinessName] =
    useState("");

  const [industry, setIndustry] =
    useState("");

  const [services, setServices] =
    useState("");

  const [audience, setAudience] =
    useState("");

  const [tone, setTone] =
    useState("");

  const [generatedHtml, setGeneratedHtml] =
    useState("");

  const [editPrompt, setEditPrompt] =
    useState("");

  const [editing, setEditing] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {

    const auth =
      localStorage.getItem(
        "isLoggedIn"
      );

    setLoggedIn(!!auth);

  }, []);

  const handleLogout = () => {

    localStorage.removeItem(
      "isLoggedIn"
    );

    window.location.reload();
  };

  const handleGenerate =
    async () => {

      setLoading(true);

      try {

        const fullPrompt = `

Business Name:
${businessName}

Industry:
${industry}

Services:
${services}

Target Audience:
${audience}

Preferred Tone:
${tone}

Generate:
- Hero Section
- About Section
- Services Section
- Testimonials
- FAQs
- Contact Section
- SEO-friendly content
- Modern responsive layout
- Beautiful gradients
- Premium SaaS UI

        `;

        const response =
          await fetch(
            "/api/generate",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({

                prompt: fullPrompt,
              }),
            }
          );

        const data =
          await response.json();

        if (data.success) {

          setGeneratedHtml(
            data.html
          );

        } else {

          alert(data.error);
        }

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
};

  const handleEdit =
    async () => {

      if (!editPrompt) return;

      setEditing(true);

      try {

        const response =
          await fetch(
            "/api/edit",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({

                html: generatedHtml,

                editPrompt,
              }),
            }
          );

        const data =
          await response.json();

        if (data.success) {

          setGeneratedHtml(
            data.html
          );

          setEditPrompt("");

        } else {

          alert(data.error);
        }

      } catch (error) {

        console.log(error);

      } finally {

        setEditing(false);
      }
};

  return (

    <main className="min-h-screen bg-[#050816] text-white overflow-hidden relative">

      {/* BACKGROUND GLOWS */}

      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-pink-500/20 blur-[140px] rounded-full" />

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full" />

      {/* NAVBAR */}

      <nav className="relative z-10 flex items-center justify-between px-8 lg:px-16 py-8 border-b border-white/10">

        <h1 className="text-4xl font-black tracking-tight">

          LeoAI

        </h1>

        <div className="flex items-center gap-4">

          {loggedIn ? (

            <>

              <Link
                href="/dashboard"
                className="px-6 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >

                Dashboard

              </Link>

              <button
                onClick={handleLogout}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 font-semibold"
              >

                Logout

              </button>

            </>

          ) : (

            <>

              <Link
                href="/login"
                className="px-6 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >

                Login

              </Link>

              <Link
                href="/signup"
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 font-semibold"
              >

                Sign Up

              </Link>

            </>

          )}

        </div>

      </nav>

      {/* HERO SECTION */}

      <section className="relative z-10 px-8 lg:px-16 pt-28 pb-24 text-center">

        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 mb-10">

          <span className="w-2 h-2 rounded-full bg-green-400" />

          <span className="text-sm text-zinc-300">

            AI Website Builder Platform

          </span>

        </div>

        <h1 className="text-7xl md:text-8xl font-black leading-none mb-8">

          Build Stunning

          <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">

            AI Websites

          </span>

        </h1>

        <p className="max-w-3xl mx-auto text-zinc-400 text-xl leading-relaxed mb-12">

          Generate modern AI-powered websites instantly using prompts,
          customize visually, and launch faster than ever.

        </p>

      </section>

      {/* FEATURES SECTION */}

      <section className="relative z-10 px-8 lg:px-16 py-16">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-2xl">

            <h2 className="text-3xl font-bold mb-4">

              AI Generation

            </h2>

            <p className="text-zinc-400 leading-relaxed">

              Generate complete modern websites instantly using AI prompts.

            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-2xl">

            <h2 className="text-3xl font-bold mb-4">

              Live Preview

            </h2>

            <p className="text-zinc-400 leading-relaxed">

              Instantly preview and edit generated websites visually.

            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-2xl">

            <h2 className="text-3xl font-bold mb-4">

              Responsive Design

            </h2>

            <p className="text-zinc-400 leading-relaxed">

              Beautiful responsive layouts generated automatically.

            </p>

          </div>

        </div>

      </section>

      {/* GENERATOR SECTION */}

      <section className="relative z-10 px-8 lg:px-16 pb-24">

        <div className="bg-white/5 border border-white/10 rounded-[32px] backdrop-blur-2xl p-8">

          <h2 className="text-5xl font-black mb-10">

            Generate Your Website

          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">

            <input
              value={businessName}
              onChange={(e) =>
                setBusinessName(e.target.value)
              }
              placeholder="Business Name"
              className="w-full p-5 rounded-2xl bg-black/20 border border-white/10 outline-none"
            />

            <input
              value={industry}
              onChange={(e) =>
                setIndustry(e.target.value)
              }
              placeholder="Industry"
              className="w-full p-5 rounded-2xl bg-black/20 border border-white/10 outline-none"
            />

            <input
              value={services}
              onChange={(e) =>
                setServices(e.target.value)
              }
              placeholder="Services"
              className="w-full p-5 rounded-2xl bg-black/20 border border-white/10 outline-none"
            />

            <input
              value={audience}
              onChange={(e) =>
                setAudience(e.target.value)
              }
              placeholder="Target Audience"
              className="w-full p-5 rounded-2xl bg-black/20 border border-white/10 outline-none"
            />

            <input
              value={tone}
              onChange={(e) =>
                setTone(e.target.value)
              }
              placeholder="Preferred Tone / Style"
              className="md:col-span-2 w-full p-5 rounded-2xl bg-black/20 border border-white/10 outline-none"
            />

          </div>

          <button
            onClick={handleGenerate}
            className="w-full py-5 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 font-semibold text-xl"
          >

            {loading
              ? "Generating Website..."
              : "Generate AI Website"}

          </button>

          {/* AI EDITOR */}

          {generatedHtml && (

            <div className="flex gap-4 mt-8 mb-8">

              <input
                value={editPrompt}
                onChange={(e) =>
                  setEditPrompt(e.target.value)
                }
                placeholder="Edit with AI... Example: Make it dark mode"
                className="flex-1 p-5 rounded-2xl bg-black/20 border border-white/10 outline-none"
              />

              <button
                onClick={handleEdit}
                className="px-8 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 font-semibold"
              >

                {editing
                  ? "Editing..."
                  : "Apply AI Edit"}

              </button>

            </div>

          )}

          {/* ACTION BUTTONS */}

          {generatedHtml && (

            <div className="flex flex-wrap gap-4 mt-8 mb-8">

              <button
                onClick={() => {

                  const blob =
                    new Blob(

                      [generatedHtml],

                      {
                        type: "text/html",
                      }
                    );

                  const url =
                    URL.createObjectURL(
                      blob
                    );

                  const a =
                    document.createElement(
                      "a"
                    );

                  a.href = url;

                  a.download =
                    `${businessName || "website"}.html`;

                  a.click();

                  URL.revokeObjectURL(
                    url
                  );

                }}
                className="px-8 py-4 rounded-2xl bg-green-500 font-semibold"
              >

                Download HTML

              </button>

              <button
                onClick={() => {

                  const existingProjects =
                    JSON.parse(

                      localStorage.getItem(
                        "leoProjects"
                      ) || "[]"
                    );

                  const newProject = {

                    id: Date.now(),

                    businessName,

                    industry,

                    services,

                    audience,

                    tone,

                    html: generatedHtml,
                  };

                  existingProjects.push(
                    newProject
                  );

                  localStorage.setItem(

                    "leoProjects",

                    JSON.stringify(
                      existingProjects
                    )
                  );

                  alert(
                    "Project saved successfully!"
                  );

                }}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 font-semibold"
              >

                Save Project

              </button>

            </div>

          )}

          {/* GENERATED WEBSITE */}

          {generatedHtml && (

            <div className="mt-4 bg-white rounded-[32px] overflow-hidden shadow-2xl">

              <iframe
                srcDoc={generatedHtml}
                className="w-full h-[900px]"
              />

            </div>

          )}

        </div>

      </section>

    </main>
  );
}