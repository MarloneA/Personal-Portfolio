import cheerio from "cheerio";
import axios from "axios";

export async function GET(req, res) {
  if (req.method !== "GET") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 400,
    });
  }

  try {
    // TODO: fetch events from eventbrite api

    return new Response(JSON.stringify({ events }), { status: 200 });
  } catch (error) {
    console.error("Error during scraping:", error);
    res.status(500).json({ error: "Failed to fetch events." });
  }
}
