import { NextResponse } from "next/server";
import { groq } from "@/lib/groq";
import { buildImageMap } from "@/lib/images";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const prompt = body.prompt;

    if (!prompt) {
      return NextResponse.json({ success: false, error: "Prompt required" });
    }

    // ✅ Fetch topic-matched images BEFORE generating HTML
    const images = await buildImageMap(prompt);

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          // ✅ Inject REAL URLs directly into system prompt
          // AI just copies them — no tokens, no hallucination risk
          content: `
You are an expert AI website generator. Generate ONLY valid HTML with inline CSS.

RULES:
- Return ONLY raw HTML. No markdown. No backticks.
- Mobile responsive, modern SaaS design
- Beautiful gradients, shadows, rounded corners

════════════════════════════════════
USE THESE EXACT IMAGE URLs — DO NOT CHANGE THEM:

Hero image:       ${images.hero}
About image:      ${images.about}
Service 1 image:  ${images.service1}
Service 2 image:  ${images.service2}
Service 3 image:  ${images.service3}
Testimonial img:  ${images.testimonial}
Feature image:    ${images.feature}

Copy these URLs exactly as-is into your <img src="..."> tags.
DO NOT invent or modify any image URL.
════════════════════════════════════

All images must have: style="width:100%;height:300px;object-fit:cover;border-radius:16px;display:block;"

Generate:
1. Sticky Navbar
2. Hero section
3. About section
4. Services (3 cards)
5. Features section
6. Testimonials
7. FAQ
8. Contact form
9. Footer
          `,
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 4096,
    });

    let html = completion.choices[0]?.message?.content || "";
    html = html
      .replace(/^```html\s*/i, "")
      .replace(/^```\s*/i, "")
      .replace(/```\s*$/i, "")
      .trim();

    return NextResponse.json({ success: true, html });

  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message });
  }
}