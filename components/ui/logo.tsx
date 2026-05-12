export default function Logo() {

  return (

    <div className="flex items-center gap-3">

      <div className="relative flex items-center justify-center">

        <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 shadow-lg shadow-purple-500/30" />

        <div className="absolute w-5 h-5 rounded-full bg-white/30 backdrop-blur-md" />

      </div>

      <h1 className="text-2xl font-black tracking-tight">

        BubbleAI

      </h1>

    </div>
  );
}