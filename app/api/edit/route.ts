import { NextResponse } from "next/server";
import { groq } from "@/lib/groq";

export async function POST(
  req: Request
) {

  try {

    const body =
      await req.json();

    const {
      html,
      editPrompt,
    } = body;

    const completion =
      await groq.chat.completions.create({

        model:
          "llama-3.3-70b-versatile",

        messages: [

          {
            role: "system",

            content: `

You are an expert AI website editor.

You receive:
1. Existing HTML website
2. User edit request

Modify the HTML accordingly.

Rules:
- Return ONLY updated HTML
- No markdown
- No backticks
- Keep responsive design
- Preserve structure

            `,
          },

          {
            role: "user",

            content: `

EXISTING HTML:
${html}

EDIT REQUEST:
${editPrompt}

            `,
          },
        ],

        temperature: 0.7,
      });

    const updatedHtml =
      completion.choices[0]
        ?.message?.content;

    return NextResponse.json({

      success: true,

      html: updatedHtml,
    });

  } catch (error: any) {

    return NextResponse.json({

      success: false,

      error: error.message,
    });
  }
}