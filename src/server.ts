// import express and types
import express, { Request, Response } from "express";
// import the scraper
import { scrapeDuckDuckGoNews } from "./scraper";

// instantiate the app
const app = express();
// set the port
// OPTIMIZE: Use environment variables
const PORT = 7000;

// Get route
// Client sends news title
// Scraper scrapes data
// Server sends the scraped data as response.
// INFO: Request goes like this:
// http://localhost:7000/scrape?query=donald+trump+dead
app.get(
  // endpoint
  "/scrape",
  // anonymous function to call the scraper and respond to the request
  async (request: Request, response: Response): Promise<any> => {
    // get the input from the endpoint
    const query = request.query.query as string;

    // if no input was provided respond appropriately and terminate.
    if (!query) {
      return response.status(400).json({ error: "Missing query parameter." });
    }

    try {
      // scrape the data
      const result = await scrapeDuckDuckGoNews(query);
      // send the response
      response.json({ query, result });
    } catch (err) {
      // if scraping results in an error respond appropriately
      response.status(500).json({ error: "Scraping Failed", details: err });
    }
  },
);

// start the server on the provided port
app.listen(PORT, () => {
  console.log("Server is running or Port " + PORT);
});
