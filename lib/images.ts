// lib/images.ts

const UNSPLASH_KEY = process.env.UNSPLASH_ACCESS_KEY;

interface SectionImages {
  hero: string;
  about: string;
  service1: string;
  service2: string;
  service3: string;
  testimonial: string;
  feature: string;
}

async function fetchUnsplashPhoto(query: string, index = 0): Promise<string> {
  try {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=5&orientation=landscape`,
      {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_KEY}`,
        },
      }
    );
    const data = await res.json();
    const photos = data.results;

    if (!photos || photos.length === 0) {
      // Fallback to picsum if no results
      return `https://picsum.photos/seed/${query}-${index}/800/500`;
    }

    // Pick different photo by index so each slot gets a unique image
    const photo = photos[index % photos.length];
    return photo.urls.regular;
  } catch {
    return `https://picsum.photos/seed/${query}-${index}/800/500`;
  }
}

export async function buildImageMap(prompt: string): Promise<SectionImages> {
  // Extract clean topic keywords from prompt
  const topic = prompt
    .toLowerCase()
    .replace(/[^a-z\s]/g, "")
    .trim()
    .split(/\s+/)
    .slice(0, 3)
    .join(" ");

  // Fetch all images in parallel — different queries per slot
  const [hero, about, service1, service2, service3, testimonial, feature] =
    await Promise.all([
      fetchUnsplashPhoto(`${topic} professional hero`,    0),
      fetchUnsplashPhoto(`${topic} team people`,          1),
      fetchUnsplashPhoto(`${topic} service`,              0),
      fetchUnsplashPhoto(`${topic} work`,                 1),
      fetchUnsplashPhoto(`${topic} solution`,             2),
      fetchUnsplashPhoto(`${topic} happy customer`,       0),
      fetchUnsplashPhoto(`${topic} feature technology`,   2),
    ]);

  return { hero, about, service1, service2, service3, testimonial, feature };
}