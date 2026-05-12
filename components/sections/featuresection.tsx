const features = [

  {
    title:
      "AI Website Generation",

    description:
      "Generate modern websites instantly using AI-powered workflows.",
  },

  {
    title:
      "Live Visual Editor",

    description:
      "Edit website sections live with real-time preview updates.",
  },

  {
    title:
      "Conversational AI Editing",

    description:
      "Use prompts like 'make hero premium' or 'add pricing section'.",
  },

  {
    title:
      "Export & Deploy",

    description:
      "Export responsive websites instantly and continue editing anytime.",
  },
];

export default function FeatureSection() {

  return (

    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold mb-6">

            Everything You Need
            to Build Faster

          </h2>

          <p className="text-zinc-400 text-xl max-w-3xl mx-auto">

            A complete AI-powered no-code website builder platform
            for startups, creators and businesses.

          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map(
            (
              feature,
              index
            ) => (

              <div
                key={index}
                className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
              >

                <h3 className="text-2xl font-semibold mb-4">

                  {feature.title}

                </h3>

                <p className="text-zinc-400 leading-relaxed">

                  {feature.description}

                </p>

              </div>

            )
          )}

        </div>

      </div>

    </section>
  );
}