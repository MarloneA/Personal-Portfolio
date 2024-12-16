// pages/api/ask.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";
import { GoogleGenerativeAI } from "@google/generative-ai";

type Data = {
  answer: string;
  error?: string;
};

// Predefined transcript to set the context
const transcript = `
You are a helpful assistant. You will answer questions based on the context provided below. Only answer questions within this scope
anything outside this scope just simply reply the question is outside the scope of this video. Assume that this is a video transcript and
as such make sure to make all questions referring to this video as questions referring to the provided transcript.

Do not begin your answers with "this content", "the provided transcript", "the transcript" or any such descriptions referencing the content as a transcript. just go straight to the point.

---
Transcript:
1. Express.js is a minimal and flexible Node.js web application framework.
2. It provides a robust set of features to develop web and mobile applications.
3. Key Features of Express.js:
   - Middleware: Functions that execute during the request/response cycle.
   - Routing: Map URLs to specific logic and controllers.
   - Templating Engines: Support for rendering dynamic HTML.
   - Error Handling: Centralized mechanism for error processing.
4. Basic Setup:
   - Install Express.js using npm: npm install express.
---
`;

export async function POST(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log("req", req.method);
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ answer: "", error: "Method not allowed" }),
      {
        status: 405,
      }
    );
  }

  const { question } = await req.json();

  if (!question || typeof question !== "string") {
    return new Response(
      JSON.stringify({ answer: "", error: "Invalid question input" }),
      {
        status: 400,
      }
    );
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_PROJECT_API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: transcript,
    });

    // Call Google Gemini API
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: "Hello" }],
        },
        {
          role: "model",
          parts: [{ text: "Great to meet you. What would you like to know?" }],
        },
      ],
    });

    let result = await chat.sendMessage(question);

    const answer = result.response.text() || "No answer found.";

    return new Response(
      JSON.stringify({
        answer,
      }),
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error communicating with OpenAI API:", error.message);
    return new Response(
      JSON.stringify({
        answer: "",
        error: "Internal Server Error",
        message: error.message,
      }),
      { status: 500 }
    );
  }
}
