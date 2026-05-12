"use client";

import { useEffect, useState } from "react";

export default function ProjectsPage() {

  const [projects, setProjects] =
    useState<any[]>([]);

  useEffect(() => {

    const savedProjects =
      JSON.parse(

        localStorage.getItem(
          "leoProjects"
        ) || "[]"
      );

    setProjects(
      savedProjects
    );

  }, []);

  return (

    <main className="min-h-screen bg-[#050816] text-white p-10">

      <h1 className="text-6xl font-black mb-12">

        Your Projects

      </h1>

      {projects.length === 0 ? (

        <p className="text-zinc-400 text-xl">

          No saved projects yet.

        </p>

      ) : (

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {projects.map((project) => (

            <div
              key={project.id}
              className="bg-white/5 border border-white/10 rounded-[32px] overflow-hidden"
            >

              {/* PREVIEW */}

              <iframe
                srcDoc={project.html}
                className="w-full h-[300px] bg-white"
              />

              {/* INFO */}

              <div className="p-6">

                <h2 className="text-2xl font-bold mb-3">

                  {project.businessName}

                </h2>

                <p className="text-zinc-400 mb-6">

                  {project.industry}

                </p>

                <button
                  onClick={() => {

                    localStorage.setItem(

                      "selectedProject",

                      JSON.stringify(
                        project
                      )
                    );

                    window.location.href =
                      "/";
                  }}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 font-semibold"
                >

                  Open Project

                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </main>
  );
}