export default function HeroSection() {

  return (

    <section className="relative overflow-hidden py-32">

      {/* BACKGROUND */}

      <div className="absolute inset-0">

        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full" />

      </div>

      {/* CONTENT */}

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 mb-8">

          <span className="w-2 h-2 rounded-full bg-green-400" />

          <span className="text-sm text-zinc-300">

            AI Powered Website Builder

          </span>

        </div>

        <h1 className="text-6xl md:text-8xl font-bold leading-tight max-w-5xl mx-auto">

          Build Stunning
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">

            {" "}AI Websites

          </span>

          {" "}in Minutes

        </h1>

        <p className="text-xl text-zinc-400 max-w-3xl mx-auto mt-8 leading-relaxed">

          Generate modern business websites using AI.
          Customize content, edit layouts, regenerate sections,
          and export production-ready websites instantly.

        </p>

        <div className="flex items-center justify-center gap-5 mt-12">

          <a
            href="/signup"
            className="px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:bg-zinc-200 transition"
          >
            Start Building
          </a>

          <a
            href="/dashboard"
            className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            View Dashboard
          </a>

        </div>

      </div>

    </section>
  );
}