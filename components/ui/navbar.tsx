export default function Navbar() {

  return (

    <nav className="border-b border-white/10 backdrop-blur-xl sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="relative flex items-center justify-center">

            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 shadow-lg shadow-purple-500/30" />

            <div className="absolute w-5 h-5 rounded-full bg-white/30 backdrop-blur-md" />

          </div>

          <h1 className="text-2xl font-bold tracking-tight">

            BuildFlow AI

          </h1>

        </div>

        <div className="flex items-center gap-4">

          <a
            href="/login"
            className="text-zinc-300 hover:text-white transition"
          >
            Login
          </a>

          <a
            href="/signup"
            className="px-5 py-3 rounded-2xl bg-white text-black font-semibold hover:bg-zinc-200 transition"
          >
            Get Started
          </a>

        </div>

      </div>

    </nav>
  );
}