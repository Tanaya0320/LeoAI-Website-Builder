"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {

  const [projects, setProjects] =
    useState<any[]>([]);

  useEffect(() => {

    const savedProjects =
      JSON.parse(
        localStorage.getItem(
          "ai-websites"
        ) || "[]"
      );

    setProjects(savedProjects);

  }, []);

  return (

    <main className="min-h-screen bg-black text-white p-10">

      <div className="max-w-7xl mx-auto">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-bold mb-3">
              Dashboard
            </h1>

            <p className="text-gray-400">
              Your saved AI websites
            </p>

          </div>

          <a
            href="/"
            className="bg-white text-black px-5 py-3 rounded-xl font-semibold"
          >
            Create New
          </a>

        </div>

        {projects.length === 0 ? (

          <div className="text-gray-500">
            No saved projects yet.
          </div>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {projects.map(
              (project, index) => (

                <div
                  key={index}
                  className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6"
                >

                  <div className="mb-5">

                    <div className="inline-block px-3 py-1 rounded-full bg-zinc-800 text-sm mb-4">
                      {project.template}
                    </div>

                    <h2 className="text-2xl font-bold mb-2">
                      {project.businessName}
                    </h2>

                    <p className="text-gray-400">
                      {project.industry}
                    </p>

                  </div>

                  <div>

                    <h3 className="font-semibold mb-2">
                      Hero Headline
                    </h3>

                    <p className="text-gray-400">
                      {
                        project.generatedData
                          .hero.headline
                      }
                    </p>

                  </div>

                </div>

              )
            )}

          </div>

        )}

      </div>

    </main>
  );
}