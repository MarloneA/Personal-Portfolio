import { google } from "googleapis";
import ffmpeg from "fluent-ffmpeg";
import fs from "fs";
import path from "path";
import { OpenAI } from "openai";
import { v4 as uuidv4 } from "uuid";
import ffmpegStatic from "ffmpeg-static";

console.log("FFmpeg Binary Path:", ffmpegStatic);

// ffmpeg.setFfmpegPath(ffmpegStatic);

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Directory to store temporary files
const TEMP_DIR = path.join(process.cwd(), "temp");

if (!fs.existsSync(TEMP_DIR)) fs.mkdirSync(TEMP_DIR);

export async function POST(req, res) {
  if (req.method === "POST") {
    const { youtubeUrl, userQuestion } = await req.json();
    console.log("youtubeUrl", youtubeUrl);
    try {
      if (youtubeUrl) {
        // Step 1: Get video metadata
        const videoId = extractVideoId(youtubeUrl);

        console.log("videoId", videoId);

        const videoInfo = await getYoutubeVideoInfo(videoId);

        console.log("videoInfo", videoInfo);

        // Step 2: Download and transcribe audio
        const audioFilePath = await downloadYouTubeAudio(videoId);
        const transcript = await transcribeAudio(audioFilePath);
        console.log("transcript", transcript);

        // Step 3: Store structured content
        const structuredData = summarizeTranscript(transcript);
        console.log("structuredData", structuredData);

        // Return structured data
        return new Response(
          JSON.stringify({
            message: "Video processed successfully.",
            title: videoInfo.title,
            structuredData,
          }),
          { status: 200 }
        );
      } else if (userQuestion) {
        // Step 4: Answer questions within scope
        const context = req.body.structuredData;
        const answer = await getScopedAnswer(userQuestion, context);

        return new Response({
          answer,
        });
      } else {
        return new Response(JSON.stringify({ error: "Invalid request." }), {
          status: 400,
        });
      }
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ error: "Internal server error." }), {
        status: 400,
      });
    }
  } else {
    return new Response(JSON.stringify({ error: "Method not allowed." }), {
      status: 400,
    });
  }
}

// Utility functions
function extractVideoId(url) {
  const regex =
    /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  if (match && match[1]) return match[1];
  throw new Error("Invalid YouTube URL.");
}

async function getYoutubeVideoInfo(videoId: string) {
  const youtube = google.youtube({
    version: "v3",
    auth: process.env.YOUTUBE_API_KEY,
  });
  const response = await youtube.videos.list({
    id: videoId,
    part: "snippet,contentDetails",
  });

  if (!response.data.items.length) throw new Error("Video not found.");

  const video = response.data.items[0];
  return {
    title: video.snippet.title,
    description: video.snippet.description,
    duration: video.contentDetails.duration,
  };
}

async function downloadYouTubeAudio(videoId: string) {
  const audioFilePath = path.join(TEMP_DIR, `${uuidv4()}.mp3`);
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return new Promise((resolve, reject) => {
    ffmpeg(videoUrl)
      .audioCodec("libmp3lame")
      .save(audioFilePath)
      .on("end", () => resolve(audioFilePath))
      .on("error", (error) => reject(error));
  });
}

// async function downloadYouTubeAudio(videoId: string) {
//   const audioFilePath = path.join(TEMP_DIR, `${uuidv4()}.mp3`);
//   const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

//   return new Promise((resolve, reject) => {
//     ffmpeg(videoUrl)
//       .setFfmpegPath(ffmpegStatic) // Use bundled ffmpeg binary
//       .audioCodec("libmp3lame")
//       .save(audioFilePath)
//       .on("end", () => resolve(audioFilePath))
//       .on("error", (error) => reject(error));
//   });
// }

async function transcribeAudio(filePath) {
  const audioData = fs.readFileSync(filePath);

  const response = await openai.audio.transcriptions.create({
    file: audioData,
    model: "whisper-1",
  });

  fs.unlinkSync(filePath); // Clean up temporary file
  return response.text;
}

function summarizeTranscript(transcript) {
  // Call OpenAI to summarize
  const prompt = `Summarize the following transcript into key points and topics:\n\n${transcript}`;

  const response = openai.completions.create({
    model: "text-davinci-003",
    prompt,
    max_tokens: 300,
  });

  return response.data.choices[0].text;
}

async function getScopedAnswer(question, context) {
  const prompt = `Based on the following context, answer the question only if it's within the scope:\n\nContext: ${context}\n\nQuestion: ${question}\n\nAnswer:`;

  const response = await openai.completions.create({
    model: "text-davinci-003",
    prompt,
    max_tokens: 150,
  });

  return response.data.choices[0].text.trim();
}
