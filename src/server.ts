import express, { Request, Response } from "express";
import { scrapeDuckDuckGoNews } from "./scraper";

const app = express();
const PORT = 7000;

app.get(
  "/scrape",
  async (request: Request, response: Response): Promise<any> => {
    const query = request.query.query as string;

    if (!query) {
      return response.status(400).json({ error: "Missing query parameter." });
    }

    try {
      const result = await scrapeDuckDuckGoNews(query);
      response.json({ query, result });
    } catch (err) {
      response.status(500).json({ error: "Scraping Failed", details: err });
    }
  },
);

app.listen(PORT, () => {
  console.log("Server is running or Port " + PORT);
});
